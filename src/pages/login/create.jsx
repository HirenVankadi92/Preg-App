import { IonContent, IonHeader, IonIcon, useIonToast } from "@ionic/react";
import Signin from "../../assets/images/create2.png";
import Axios from "axios";

import {
  personOutline,
  mailOutline,
  keyOutline,
  callOutline,
  calendarClearOutline,
  eyeOffOutline,
  eyeOutline,
  alarm,
} from "ionicons/icons";
import Google from "../../assets/images/login-icon/google.jpg";
import Facebook from "../../assets/images/login-icon/facebook.jpg";
import Phone from "../../assets/images/login-icon/phone.jpg";
import React, { useRef, useState } from "react";
import "./login-create.css";
import { useHistory } from "react-router";

export const Create = () => {
  const [present] = useIonToast();
  const presentToast = (msg) => {
    present({
      message: msg,
      duration: 1500,
      position: "top",
    });
  };
  const history = useHistory();

  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [FromErrors, setFromErrors] = useState({});
  const ref = useRef();
  const pattern = new RegExp(/^\d{1,10}$/);

  const [activePassword, setActivePassword] = useState("");
  const [iserror, setIsError] = useState("");
  const [activeConfPassword, setActiveConfPassword] = useState("");
  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
  });

  const regex = new RegExp(
    "^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).{8,20}$"
  );
  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      contactNo: "",
      password: "",
      confirmPassword: "",
    };

    // Validate id field
    console.log("dfdf----->>>>", pattern.test(sendData.contactNo));
    if (sendData.name.trim() === "") {
      errors.name = "name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(sendData.name)) {
      errors.name = "please enter only text";
      isValid = false;
    }
    if (sendData.contactNo.trim() === "") {
      errors.contactNo = "Phone No is required";
      isValid = false;
    } else if (!pattern.test(sendData.contactNo)) {
      errors.contactNo = "please enter valid number";
      isValid = false;
    }

    if (sendData.password.trim() === "") {
      errors.password = "Password is required";
      isValid = false;
    } else if (!regex.test(sendData.password)) {
      errors.password =
        "Password must be min 8 letter ,max 20 letter ,1 special character and 1 number";
      isValid = false;
    }

    if (sendData.confirmPassword.trim() === "") {
      errors.confirmPassword = "confirmPassword is required";
      isValid = false;
    } else if (sendData.confirmPassword !== sendData.password) {
      errors.confirmPassword =
        "Your password and confirmation password do not match. ";
      isValid = false;
    }

    if (sendData.email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(sendData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }

    // // Validate user name field
    // if (person.user_name.trim() === "") {
    //   errors.user_name = "User name is required";
    //   isValid = false;
    // }

    // // Validate affiliation field
    // if (person.affiliation.trim() === "") {
    //   errors.affiliation = "Affiliation is required";
    //   isValid = false;
    // }

    // // Validate Role field
    // if (person.role.trim() === "") {
    //   errors.role = "Role is required";
    //   isValid = false;
    // }

    // // Validate status field
    // if (person.status.trim() === "") {
    //   errors.status = "status is required";
    //   isValid = false;
    // }

    setFromErrors({ ...errors });

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let copyData = { ...sendData, [name]: value };
    setSendData({ ...sendData, [name]: value });
    // validateForm(copyData)
  };
  const handleSubmit = (e) => {
    if (validateForm()) {
      try {
        Axios.post(
          "https://pregnancy-tracker.vercel.app/v1/user/auth/register",
          { ...sendData }
        ).then((response) => {
          if (response?.data?.message === "SUCCESS..!!") {
            history.push("/login");
            presentToast(response?.data?.data)
          } else {
            presentToast(response?.data?.data)

          }
          console.log(response);
        }).catch((error)=>{
          console.log(error);
          if(error?.response?.data?.message){
            presentToast(error?.response?.data?.message)
          }
        }
      );
      } catch (error) {
        

      }
    }
  };

  return (
    <IonContent>
      <div className="main-login">
        <div className="logimg">
          <img src={Signin} />
        </div>
        <div className="login-content">
          <div className="log-cont">
            <h3>Create Your Account</h3>
            <div className="login-create">
              <IonIcon icon={personOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="text"
                value={sendData?.name}
                name="name"
                placeholder="Name...."
                onChange={(e) => handleChange(e)}
                onBlur={validateForm}
                required="true"
              />
            </div>
            {FromErrors.name && (
              <div className="" style={{ color: "red" }}>
                {FromErrors.name}
              </div>
            )}
            <div className="login-create">
              <IonIcon icon={mailOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="email"
                value={sendData?.email}
                name="email"
                onBlur={validateForm}
                placeholder="Email...."
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            {FromErrors.email && (
              <div className="" style={{ color: "red" }}>
                {FromErrors.email}
              </div>
            )}
            <div className="login-create">
              <IonIcon icon={callOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="tel"
                value={sendData?.contactNo}
                name="contactNo"
                placeholder="Phone...."
                maxLength="10"
                onBlur={validateForm}
                onChange={(e) => {
                  handleChange(e);
                  // if (!pattern.test(e.target.value)) {
                  //   setIsError(true);
                  //   setFromErrors({
                  //     ...FromErrors,
                  //     phone: "Invalid phone number",
                  //   }); // Set error message for invalid phone number
                  // } else {
                  //   setIsError(false);
                  //   setFromErrors({ ...FromErrors, phone: "" }); // Clear error message
                  // }
                }}
                required={true}
              />
            </div>
            {FromErrors.contactNo && (
              <div className="" style={{ color: "red" }}>
                {FromErrors.contactNo}
              </div>
            )}
            {/* <div className="login-create">
              <IonIcon style={{ color: "#C2C2C2" }} />
              <input
                type="text"
                ref={ref}
                value={sDate}
                name="sDate"
                placeholder="Pregnancy Start Date...."
                onChange={(e) => setSdate(e.target.value)}
                onFocus={() => (ref.current.type = "date")}
                onBlur={() => (ref.current.type = "text")}
                required="true"
              />
            </div>
            {FromErrors.sDate && (
              <div className="" style={{ color: "red" }}>
                {FromErrors.sDate}
              </div>
            )} */}
            {/* <div className="login-create">
              <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="password"
                value={pass}
                name="pass"
                placeholder="Password...."
                onChange={(e) => setpass(e.target.value)}
                required="true"
              />
              <div
                className="d-flex justify-content-center align-items-center"
                onChange={(e) =>
                  activePassword == "eye"
                    ? setActivePassword("eyes")
                    : setActivePassword("eye")
                }
              >
                 {activePassword == "eye" ? (
                  <IonIcon icon={eyeOffOutline} className="eye" />
                ) : (
                  <IonIcon icon={eyeOutline} className="eyes" />
                )}
              </div>
            </div> */}
            <div className="login-create">
              <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
              <input
                type={activePassword == "eye" ? "password" : "text"}
                value={sendData?.password}
                onBlur={validateForm}
                name="password"
                onChange={(e) => handleChange(e)}
                placeholder="Password"
                required="true"
              />

              <div
                className="d-flex justify-content-center align-items-center"
                onClick={() =>
                  activePassword == "eye"
                    ? setActivePassword("eyes")
                    : setActivePassword("eye")
                }
              >
                {console.log(activePassword, "activePassword")}
                {activePassword == "eye" ? (
                  <IonIcon icon={eyeOffOutline} className="eye" />
                ) : (
                  <IonIcon icon={eyeOutline} className="eyes" />
                )}
              </div>
            </div>
            {FromErrors.password && (
              <div className="" style={{ color: "red" }}>
                {FromErrors.password}
              </div>
            )}
            <div className="login-create">
              <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
              <input
                type={activeConfPassword == "eye" ? "password" : "text"}
                value={sendData?.confirmPassword}
                name="confirmPassword"
                onBlur={validateForm}
                onChange={(e) => handleChange(e)}
                placeholder="Confirm Password...."
                required="true"
              />
              <div
                className="d-flex justify-content-center align-items-center"
                onClick={() =>
                  activeConfPassword == "eye"
                    ? setActiveConfPassword("eyes")
                    : setActiveConfPassword("eye")
                }
              >
                {console.log(activeConfPassword, "activeConfPassword")}
                {activeConfPassword == "eye" ? (
                  <IonIcon icon={eyeOffOutline} className="eye" />
                ) : (
                  <IonIcon icon={eyeOutline} className="eyes" />
                )}
              </div>
            </div>
            {FromErrors.confirmPassword && (
              <div className="" style={{ color: "red" }}>
                {FromErrors.confirmPassword}
              </div>
            )}
            <button onClick={handleSubmit}>Sign In</button>
            <div className="changes">
              <p>
                Alredy have an account? <a href="/login">Sign Up</a>
              </p>
            </div>
            {/* <div className='d-flex justify-content-center align-items-center flex-column mt-3'>
                            <div className='socials'>
                                <img src={Google} />
                                <p>Login with Google</p>
                            </div>
                            <div className='socials'>
                                <img src={Facebook} />
                                <p>Login with Facebook</p>
                            </div>
                            <div className='socials'>
                                <img src={Phone} />
                                <p>Login with Mobile</p>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </IonContent>
  );
};
