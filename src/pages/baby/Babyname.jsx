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
      name: "Laksh",
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
      },
      {
        id: 52,
        name: "Orri",
        gender: "Male",
      },
      {
        id: 53,
        name: "Urvashi",
        gender: "Female",
      },
      {
        id: 52,
        name: "Aelish",
        gender: "Male",
      },
      {
        id: 53,
        name: "Aaren",
        gender: "Female",
      },
      {
        id: 54,
        name: "Rahul",
        gender: "Male",
      },
      {
        id: 55,
        name: "Radhika",
        gender: "Female",
      },
      {
        id: 56,
        name: "Nemish",
        gender: "Male",
      },
      {
        id: 57,
        name: "Nensi",
        gender: "Female",
      },
      {
        id: 58,
        name: "Hirem",
        gender: "Male",
      },
      {
        id: 59,
        name: "Hasti",
        gender: "Female",
      },
      {
        id: 60,
        name: "Pramit",
        gender: "Male",
      },
      {
        id: 61,
        name: "Nidhi",
        gender: "Female",
      },
      {
        id: 62,
        name: "Jenish",
        gender: "Male",
      },
      {
        id: 63,
        name: "Hemali",
        gender: "Female",
      }, {
        id: 64,
        name: "Prince",
        gender: "Male",
      },
      {
        id: 65,
        name: "Riddhi",
        gender: "Female",
      },
      {
        id: 66,
        name: "Uttam",
        gender: "Male",
      },
      {
        id: 67,
        name: "Saxi",
        gender: "Female",
      },
      {
        id: 68,
        name: "Aelish",
        gender: "Male",
      },
      {
        id: 69,
        name: "Dishant",
        gender: "Female",
      },
      {
        id: 70,
        name: "Parthiv",
        gender: "Male",
      },
      {
        id: 71,
        name: "Drasti",
        gender: "Female",
      },
      {
        id: 72,
        name: "Sahil",
        gender: "Male",
      },
      {
        id: 73,
        name: "Pal",
        gender: "Female",
      },
      {
        id: 74,
        name: "Utsav",
        gender: "Male",
      },
      {
        id: 75,
        name: "Mirali",
        gender: "Female",
      },
      {
        id: 76,
        name: "Krenil",
        gender: "Male",
      },
      {
        id: 77,
        name: "Gopi",
        gender: "Female",
      },
       {
        id: 78,
        name: "Ganesh",
        gender: "Male",
      },
      {
        id: 79,
        name: "Billi",
        gender: "Female",
      },
      {
        id: 80,
        name: "gopal",
        gender: "Male",
      },
      {
        id: 81,
        name: "Bansri",
        gender: "Female",
      },
      {
        id: 82,
        name: "Hiren",
        gender: "Male",
      },
      {
        id: 83,
        name: "Chandni",
        gender: "Female",
      },
      {
        id: 84,
        name: "purv",
        gender: "Male",
      },
      {
        id: 85,
        name: "Falguni",
        gender: "Female",
      },
      {
        id: 86,
        name: "Akshar",
        gender: "Male",
      },
      {
        id: 87,
        name: "Dhvni",
        gender: "Female",
      },
      {
        id: 88,
        name: "Jay",
        gender: "Male",
      },
      {
        id: 89,
        name: "Mili",
        gender: "Female",
      },
      {
        id: 90,
        name: "panth",
        gender: "Male",
      },
      {
        id: 91,
        name: "Diti",
        gender: "Female",
      },
      {
        id: 92,
        name: "Manav",
        gender: "Male",
      },
      {
        id: 93,
        name: "Niva",
        gender: "Female",
      },
      {
        id: 94,
        name: "Happy",
        gender: "Male",
      },
      {
        id: 95,
        name: "Hir",
        gender: "Female",
      }, {
        id: 96,
        name: "Keyur",
        gender: "Male",
      },
      {
        id: 97,
        name: "Dhruvika",
        gender: "Female",
      },
      {
        id: 98,
        name: "Parishrut",
        gender: "Male",
      },
      {
        id: 99,
        name: "pruthvi",
        gender: "Female",
      },
       {
        id: 100,
        name: "jahnav",
        gender: "Male",
      },
      {
        id: 101,
        name: "Tulsi",
        gender: "Female",
      },
      {
        id: 102,
        name: "Yug",
        gender: "Male",
      },
      {
        id: 103,
        name: "Khushali",
        gender: "Female",
      },
      {
        id: 104,
        name: "Het",
        gender: "Male",
      },
      {
        id: 105,
        name: "Darpan",
        gender: "Female",
      },
      {
        id: 106,
        name: "Zayn",
        gender: "Male",
      },
      {
        id: 107,
        name: "Zoya",
        gender: "Female",
      },
  
  
  
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
