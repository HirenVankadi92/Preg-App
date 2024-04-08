import { IonButton, IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { IonCheckbox } from "@ionic/react";
import { useHistory } from "react-router";
import "./me.css";
import axios from "axios";

export const ToDo = () => {
const [data,setData]= useState([])
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setIsChecked] = useState(false);
  const [user, setUser] = useState("");
  const userId = localStorage.getItem("userId");

  const abc = localStorage.getItem("token");
  console.log(abc, "bbbbb");
  function handleCheckboxChange() {
    setIsChecked(!status);
  }

  const handleSubmit = async (e) => {
    const todataa = {
      user_id: userId,
      title: title,
      date: new Date().toLocaleString(),
      status: status,
    };

    console.log(todataa, "data==>>>");

    try {
      const response = await axios.post(
        "https://pregnancy-tracker.vercel.app/v1/user/todo/createTodo/",
        todataa,
        {
          headers: { Authorization: `Bearer ${abc}` },
        }
      );
      setTitle("")
      fetchData()
    } catch (error) {}
  };

  const fetchData = async () => {
    const id = localStorage.getItem("userId");
    try {
      const response = await axios.get(
        `https://pregnancy-tracker.vercel.app/v1/user/todo/getTodo/${id}`,
        {
          headers: { Authorization: `Bearer ${abc}` },
        }
      );
      setData(response?.data?.data)
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("data",data);
  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/me")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">To Do</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div style={{ padding: "15px" }}>
        <div>
          <IonInput
            value={title}
            onIonInput={(e) => setTitle(e.target.value)}
            label="Type your task..."
            labelPlacement="floating"
            fill="outline"
            placeholder="Type your task..."
          ></IonInput>
          <IonButton expand="block" onClick={() => handleSubmit()}>
            Submit
          </IonButton>
        </div>
        <div style={{margin:"10px 0px"}}>
          <p>To-do list</p>
          {data?.map((item,index)=>(
            <>
        <IonCheckbox key={index} labelPlacement="end">{item?.title}</IonCheckbox>
        <br/>
        </>
      ))}
        </div>
      </div>
    </IonContent>
  );
};
