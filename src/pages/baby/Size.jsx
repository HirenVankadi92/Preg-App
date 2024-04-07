import { IonContent, IonHeader, IonIcon,  IonSegment, IonSegmentButton, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSelect, IonSelectOption,IonButton} from '@ionic/react'
import { chevronBackOutline, personCircleOutline,call, heart, pin } from 'ionicons/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import "./baby.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Tabs from '../../components/Tabs'

export const Size = () => {
    const [selectedNavItem, setSelectedNavItem] = useState("");

  // Function to handle nav item click
  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };
    const history = useHistory();
    const navs = []

    const renderNavLinks = () => {
        const links = [];
        for (let i = 1; i <= 40; i += 2) {
          links.push(
            <IonButton
              key={i}
              className="nav-link"
              onClick={() => console.log()}
            >
              {i}-{i + 1}
            </IonButton>
          );
        }
        return links;
      };
    return (
        <IonContent>
            <IonHeader>
                <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
                    <IonIcon icon={chevronBackOutline} onClick={() => history.push("/baby")} style={{ fontSize: "24px", color: "white" }} />
                    <p className="m-0 fw-bold fs-5 text-white">Size</p>
                    <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} />
                </div>
            </IonHeader>

            <IonSegment>
          {[1, '1-2', 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15].map(navItem => (
            <IonSegmentButton 
              key={navItem} 
              value={navItem} 
              onClick={() => handleNavItemClick(navItem.toString())} 
              className={selectedNavItem === navItem.toString() ? 'segment-button active' : 'segment-button'}
            >
              {navItem}
              <br></br>
              {selectedNavItem === navItem.toString() ? "Week" : ""}
            </IonSegmentButton>
          ))}
        </IonSegment>

        {selectedNavItem && (
          <>
            <img src={`url_for_${selectedNavItem}_image`} alt={`Image for ${selectedNavItem}`} />
            <IonSelect >
              <IonSelectOption value="Option1">Option 1</IonSelectOption>
              <IonSelectOption value="Option2">Option 2</IonSelectOption>
              {/* Add more options as needed */}
            </IonSelect>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{selectedNavItem} Week</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {/* Content for the card */}
              </IonCardContent>
            </IonCard>
          </>
        )}
        </IonContent>
    )
}
