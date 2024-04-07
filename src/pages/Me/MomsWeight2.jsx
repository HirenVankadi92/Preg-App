import { IonContent, IonHeader, IonIcon } from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./me.css";
export const MomsWeight2 = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (event) => {
    setSelectedValue(event.target.textContent);
  };
  const handleSubmit = () => {
    window.location.href = `/momWeight?selectedValue=${selectedValue}`;
  };
  const history = useHistory();
  //   const handleClick = () => {
  //     history.push("/momWeight");
  //   };

  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/momweight")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Mom's Bump</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>
      {/* <NewC /> */}
      <div class="ex1">
        {[
          32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
          49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
          66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
          83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
          100,
        ].map((item, index) => (
          <>
            <p onClick={handleSelect}>{item}</p>
          </>
        ))}
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </IonContent>
  );
};
