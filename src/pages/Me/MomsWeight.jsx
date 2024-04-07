import { IonContent, IonHeader, IonIcon, IonLabel } from "@ionic/react";
import axios from "axios";
import {
  chevronBackOutline,
  navigate,
  personCircleOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import "./me.css";

export const MomsWeight = () => {
  const [data, setData] = useState([]);
  const useToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  

  const getAll = () => {
    fetch(
      `https://pregnancy-tracker.vercel.app/v1/user/weight/getWeight/${userId}`,
      {
        headers: { Authorization: `Bearer ${useToken}` },
      }
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    // headers.append("ngrok-skip-browser-warning", "true");
    getAll();
  }, []);


  const [date, setdate] = useState("");
  const [weight, setweight] = useState("");
  const [monthNumber, setmonth] = useState("");
  const [user, setUser] = useState("");


  const location = useLocation();
  const selectedValue = new URLSearchParams(location.search).get(
    "selectedValue"
  );
  console.log(selectedValue);
  const history = useHistory();
  const handleClick = () => {
    history.push("/momWeight2");
  };

  const handleSubmit = async (e) => {
    const wdataa = {
      user_id: userId,
      date: date,
      weight: selectedValue,
      monthNumber: monthNumber,
    };
    console.log(wdataa, "data==>>>");
    try {
      const response = await axios.post(
        "https://pregnancy-tracker.vercel.app/v1/user/weight/addWeight/",
        wdataa,
        {
          headers: { Authorization: `Bearer ${useToken}` },
        }
      );
      getAll();
      console.log(response);
      console.log("weightdataaa", date, weight, monthNumber, user);
      navigate();
    } catch (error) { }
  };

  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/me")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Mom's Weight</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      <div class='mom-weight-main'>
        <div class='weight-mom'>
          <div class='mom-weight'>
            <input
              class="ridge"
              type="text"
              value={selectedValue}
              name="weight"
              placeholder="Enter Weight"
              onClick={handleClick}
              onChange={(e) => setweight(e.target.value)}
            ></input>
          </div>
          <div class='mom-weight'>
            <input
              class="ridge"
              type="text"
              value={monthNumber}
              name="month"
              placeholder="Enter Month Number"
              onChange={(e) => setmonth(e.target.value)}
            ></input>
          </div>
        </div>
        <div class='mom-weight'>
          <input
            class="ridge"
            type="date"
            value={date}
            name="date"
            onChange={(e) => setdate(e.target.value)}
          ></input>
        </div>
      </div>
      <div class='main-button'>
        <button class='weight-buttons' onClick={() => handleSubmit()}>SUBMIT</button>
      </div>
      <div class='main-tables'>
        <table class='tables'>
          <thead>
            <tr>
              <th colspan="2">Date</th>
              <th>Weight</th>
              <th>MonthNo.</th>
            </tr>
          </thead>
          <tbody>
            {console.log("dddd", data)}
            {data?.data?.map((user) => (
              <tr key={user.user_id}>
                <td colspan="2">{user.date}</td>
                <td>{user.weight}</td>
                <td>{user.monthNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </IonContent>
  );
};
