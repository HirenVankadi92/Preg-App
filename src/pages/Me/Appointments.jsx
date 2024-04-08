import React, { useRef, useState } from "react";
import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, key, personCircleOutline } from "ionicons/icons";
import { IonDatetime, IonButton } from "@ionic/react";
import "./me.css";
import { useHistory } from "react-router";
import DatePicker from "react-multi-date-picker";

const Appointments = () => {
  const [date, setDate] = useState(new Date().toISOString());
  const calendarRef = useRef();


  // function update(key, value) {
  //   let date = calendarRef.current.date;
  //   calendarRef.current.set(key, date[key] + value);

  //   setDate(new DateObject(date));
  // }
  const history = useHistory();
  const handleClick = () => {
    console.log("date",date);
    history.push("/appointment2",{ date:date });
  }
  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/me")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Appointment</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div className="nensi-main">
        <div>
          {/* <button onClick={() => update("month", 1)}>+</button>
        <span style={style}>{date.month.name}</span>
        <button onClick={() => update("month", -1)}>-</button> */}
        </div>
        <div>
          {/* <button onClick={() => update("year", 1)}>+</button>
        <span style={style}>{date.year}</span>
        <button onClick={() => update("year", -1)}>-</button> */}
        </div>
        <div className="uttsav">
        <IonDatetime onIonChange={(e)=>setDate(e.detail.value)}></IonDatetime>
          {/* <DatePicker
            ref={calendarRef}
            value={date}
          
            onChange={(e)=>{console.log("eeeeee",e); }}
            minDate={new Date().setDate(10)}
            // maxDate={new Date().setDate(15)}
          /> */}
        </div>
      </div>
      <div>
        <>
          <IonButton expand="full" color="light" onClick={handleClick}>
            ADD
          </IonButton>
          {/* <IonButton expand="full" onClick="" style={{ color: "white" }}>ADD</IonButton> */}
        </>
      </div>
      <div>
        <label></label>
      </div>
    </IonContent>
  );
};
export default Appointments