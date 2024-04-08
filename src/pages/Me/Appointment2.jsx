import {
  IonButton,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
} from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { IonCheckbox } from "@ionic/react";
import { useHistory, useLocation } from "react-router";
import "./me.css";
import { render } from "@testing-library/react";
import axios from "axios";

const Appointment2 = (props) => {
  const [name, setname] = useState("");
  const [profession, setprofession] = useState("");
  const location = useLocation()
  const [date, setdate] = useState(location?.state?.date?.split("T")[0] || new Date());
  const [weight, setweight] = useState("");
  const [addNote, setaddNote] = useState("");
  const [user,setUser] = useState("");
  const history = useHistory();
  console.log("location",location);
  const handleSelectChange = (event) => {
    setprofession(event.target.value);
  }

  const userId = localStorage.getItem("userId");


  const handleSubmit = async (e) => {
    const useToken = localStorage.getItem("token");

    const dataa = {
      user_id : userId,
      name: name,
      profession: profession,
      date: date,
      weight: weight,
      addNote: addNote,
    };

    console.log(dataa, "data==>>>");

    try {
      const response = await axios.post(
        "https://pregnancy-tracker.vercel.app/v1/user/appointment/addAppointment/",
        dataa,
        {
          headers: { Authorization: `Bearer ${useToken}` },
        }
      );
      console.log(response);
      console.log("appdataa", name, profession, date, weight, addNote,user);
    } catch (error) {}
  };
  console.log("date",date);
  return (
    <IonContent>  
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/appointments")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Appointment</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div className="center">
        <div>
          <input
            className="ridge"
            type="text"
            placeholder="Enter Your name"
            value={name}
            name="name"
            onChange={(e) => setname(e.target.value)}
            required="true"
          />
        </div>
        <div>
          <select
            className="ridge"
            value={profession}
            onChange={handleSelectChange}
            placeholder="Profession"
          >
            <option value="Doctor">Doctor</option>
            <option value="Hospital">Hospital</option>
            <option value="Nurse">Nurse</option>
            <option value="Physiotherapist">Physiotherapist</option>
            <option value="Consultant">Consultant</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div>
          <input
            className="ridge"
            type="date"
            defaultValue={date}
            value={date}
            name="date"
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div>
          <input
            className="ridge"
            type="text"
            placeholder="Enter Mom's Weight"
            // value={weight}
            // onChange={(e) => setweight(e.target.value)}
            // name="weight"
            required="true"
          />
        </div>
        <div>
          <input 
            className="ridge"
            type="textarea"
            placeholder="Add Notes (optional)"
             value={addNote}
            onChange={(e) => setaddNote(e.target.value)}
          name="notes" 
          />
            
        </div>
        <div>
          <button expand="full" color="light" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </IonContent>
  );
};
export default Appointment2