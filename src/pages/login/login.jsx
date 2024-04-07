import { IonContent, IonHeader, IonIcon, useIonRouter, useIonToast } from "@ionic/react";
import Signin from "../../assets/images/login2.png";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// impport H
import {
  personOutline,
  keyOutline,
  eyeOutline,
  eyeOffOutline,
  navigate,
} from "ionicons/icons";
import React, { useContext, useState } from "react";
import "./login-create.css";
import axios from "axios";
import { UserContext } from "../../App";

export const Login = () => {
  const dispatch = useContext(UserContext);
  const [present] = useIonToast();
  const presentToast = (msg) => {
    present({
      message: msg,
      duration: 1500,
      position: "top",
    });
  };
  const router = useIonRouter()
  console.log(router,"routerlogin")
  const [activeConfPassword, setActiveConfPassword] = useState("eye");
  const [user, setUser] = useState("");
  const [FromErrors, setFromErrors] = useState({});

  const [pass, setPass] = useState("");
  const [sendData,setSendData]= useState({
    email:"",
    password:"",
   
  })
  // const [token, setToken] = useState("")
  const regex = new RegExp(
    "^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).{8,20}$"
  );
  const handleChange = (e)=>{
const {name,value}= e.target
setSendData({...sendData,[name]:value})
  }

  const validateForm = () => {
    let isValid = true;
    const errors = {
      email:"",
    password:"",
   
    };
  
    
  
    if (sendData.password.trim() === "") {
          errors.password = "Password is required";
          isValid = false;
        } else if (!regex.test(sendData.password)) {
          errors.password =
            "Password must be min 8 letter ,max 20 letter ,1 special character and 1 number";
          isValid = false;
        }
  
  
  
  
    if (sendData.email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(sendData.email)) {
      errors.email = "Invalid email address";
      isValid = false;
    }
  
  
    setFromErrors({ ...errors });
  
    return isValid;
  };
  
  const handlelogin = async (values) => {
    
if(validateForm()){
    
    try {
      const response = await axios.post(
        "https://pregnancy-tracker.vercel.app/v1/user/auth/login",
        {...sendData}
      );
      console.log(response,"resosbabdj");
      const token = response.data.data.token;
      const userId = response.data.data.user_id;
      console.log(token,"tokenab")
        // localStorage.removeItem("token");
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        if (!token) {
          router.push("/login");
        }else{
          dispatch.setIsLoggedIn(true);
          router.push("/home")
        }
      console.log("tologinnn", user, pass);
    } catch (error) {
      presentToast(error?.response?.data?.message)
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
            <h3>Login Your Account</h3>
            <div className="login-create">
              <IonIcon icon={personOutline} style={{ color: "#C2C2C2" }} />
              <input
                type="email"
                name="email"
                value={sendData?.email}
                onBlur={validateForm}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Email..."
              />
            </div>
            {FromErrors.email && (
              <div className="" style={{ color: "red" }}>
                {FromErrors.email}
              </div>
            )}
            <div className="login-create">
              <IonIcon icon={keyOutline} style={{ color: "#C2C2C2" }} />
              <input
                type={activeConfPassword == "eye" ? "password" : "text"}
                name="password"
                value={sendData?.password}
                onChange={(e) => handleChange(e)}
                onBlur={validateForm}
                placeholder="Password...."
              />
              <div
                className="d-flex justify-content-center align-items-center"
                onClick={() =>
                  activeConfPassword == "eye"
                    ? setActiveConfPassword("eyes")
                    : setActiveConfPassword("eye")
                }
              >
                {activeConfPassword == "eye" ? (
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
            {/* <div className="forgots">
              <a href="">Forgot Password?</a>
            </div> */}
            <button onClick={() => handlelogin()}>Log In</button>
            <div className="changes">
              <p>
                Don't have an account? <a href="/create">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </IonContent>
  );
};
