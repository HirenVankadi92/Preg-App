import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonItem, IonList
} from "@ionic/react";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./baby.css";

export const Babyname = () => {
  const history = useHistory();
  const babyNames = [
    {
      id: 1,
      name: "Liam",
      gender: "Male",
    },
    {
      id: 2,
      name: "Olivia",
      gender: "Female",
    },
    {
      id: 3,
      name: "Noah",
      gender: "Male",
    },
    {
      id: 4,
      name: "Emma",
      gender: "Female",
    },
    {
      id: 5,
      name: "William",
      gender: "Male",
    },
    {
      id: 6,
      name: "Ava",
      gender: "Female",
    },
    {
      id: 7,
      name: "James",
      gender: "Male",
    },
    {
      id: 8,
      name: "Isabella",
      gender: "Female",
    },
    {
      id: 9,
      name: "Oliver",
      gender: "Male",
    },
    {
      id: 10,
      name: "Sophia",
      gender: "Female",
    },
    {
      id: 11,
      name: "Benjamin",
      gender: "Male",
    },
    {
      id: 12,
      name: "Charlotte",
      gender: "Female",
    },
    {
      id: 13,
      name: "Elijah",
      gender: "Male",
    },
    {
      id: 14,
      name: "Mia",
      gender: "Female",
    },
    {
      id: 15,
      name: "Lucas",
      gender: "Male",
    },
    {
      id: 16,
      name: "Amelia",
      gender: "Female",
    },
    {
      id: 17,
      name: "Mason",
      gender: "Male",
    },
    {
      id: 18,
      name: "Harper",
      gender: "Female",
    },
    {
      id: 19,
      name: "Logan",
      gender: "Male",
    },
    {
      id: 20,
      name: "Evelyn",
      gender: "Female",
    },
    {
      id: 21,
      name: "Alexander",
      gender: "Male",
    },
    {
      id: 22,
      name: "Abigail",
      gender: "Female",
    },
    {
      id: 23,
      name: "Michael",
      gender: "Male",
    },
    {
      id: 24,
      name: "Emily",
      gender: "Female",
    },
    {
      id: 25,
      name: "Daniel",
      gender: "Male",
    },
    {
      id: 26,
      name: "Elizabeth",
      gender: "Female",
    },
    {
      id: 27,
      name: "Henry",
      gender: "Male",
    },
    {
      id: 28,
      name: "Avery",
      gender: "Female",
    },
    {
      id: 29,
      name: "Jackson",
      gender: "Male",
    },
    {
      id: 30,
      name: "Sofia",
      gender: "Female",
    },
    {
      id: 31,
      name: "Sebastian",
      gender: "Male",
    },
    {
      id: 32,
      name: "Aria",
      gender: "Female",
    },
    {
      id: 33,
      name: "David",
      gender: "Male",
    },
    {
      id: 34,
      name: "Scarlett",
      gender: "Female",
    },
    {
      id: 35,
      name: "Joseph",
      gender: "Male",
    },
    {
      id: 36,
      name: "Grace",
      gender: "Female",
    },
    {
      id: 37,
      name: "Carter",
      gender: "Male",
    },
    {
      id: 38,
      name: "Madison",
      gender: "Female",
    },
    {
      id: 39,
      name: "Owen",
      gender: "Male",
    },
    {
      id: 40,
      name: "Chloe",
      gender: "Female",
    },
    {
      id: 41,
      name: "Wyatt",
      gender: "Male",
    },
    {
      id: 42,
      name: "Lily",
      gender: "Female",
    },
    {
      id: 43,
      name: "John",
      gender: "Male",
    },
    {
      id: 44,
      name: "Zoey",
      gender: "Female",
    },
    {
      id: 45,
      name: "Gabriel",
      gender: "Male",
    },
    {
      id: 46,
      name: "Hannah",
      gender: "Female",
    },
    {
      id: 47,
      name: "Matthew",
      gender: "Male",
    },
    {
      id: 48,
      name: "Nora",
      gender: "Female",
    },
    {
      id: 49,
      name: "Ryan",
      gender: "Male",
    },
    {
      id: 50,
      name: "Ella",
      gender: "Female",
    },
    {
        id: 51,
        name: "Ella2",
        gender: "Female",
      }
  ];

  const [selectedTab, setSelectedTab] = useState("Male");
  const selectedNames = babyNames.sort((a, b) => a.name.localeCompare(b.name)).filter((x) => x.gender == selectedTab);

  const groupedNames = {};
  selectedNames.forEach((baby) => {
    const firstLetter = baby.name[0].toUpperCase();
    if (!groupedNames[firstLetter]) {
      groupedNames[firstLetter] = [];
    }
    groupedNames[firstLetter].push(baby);
  });
  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon
            icon={chevronBackOutline}
            onClick={() => history.push("/baby")}
            style={{ fontSize: "24px", color: "white" }}
          />
          <p className="m-0 fw-bold fs-5 text-white">Baby Name</p>
          <IonIcon
            icon={personCircleOutline}
            style={{ fontSize: "24px", color: "white" }}
          />
        </div>
      </IonHeader>

      <IonSegment value={selectedTab} onIonChange={e => setSelectedTab(e.detail.value)}>
        <IonSegmentButton  value="Male">
          <IonLabel>Boy</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton
          value="Female"
        >
          <IonLabel>Girl</IonLabel>
        </IonSegmentButton>
      </IonSegment>

      <div className="name-list">
        {Object.keys(groupedNames).map((letter) => (
          <div key={letter} className="group">
            <h2 className="letter">{letter}</h2>
            <IonList lines="none">
              {groupedNames[letter].map((baby) => (
                <IonItem key={baby.id}>
                <IonLabel>{baby.name}</IonLabel>
              </IonItem>
              ))}
            </IonList>
          </div>
        ))}
      </div>
    </IonContent>
  );
};
