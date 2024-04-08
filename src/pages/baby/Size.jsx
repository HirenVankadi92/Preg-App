import { IonContent, IonHeader, IonIcon, IonSegment, IonSegmentButton, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonSelect, IonSelectOption, IonButton } from '@ionic/react'
import { chevronBackOutline, personCircleOutline, call, heart, pin } from 'ionicons/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import "./baby.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Tabs from '../../components/Tabs'
import BabyNames from '../../assets/images/baby/Apple seed.png'

export const Size = () => {
  const [selectedNavItem, setSelectedNavItem] = useState("");

  // Function to handle nav item click
  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };
  const history = useHistory();
  const images = [
    "Chia seed",
    "Watermelon seed",
    "Chia seed",
    "blueberry",
    "raspberry",
    "Apple seed",
    "Watermelon seed",
    "blueberry",
    "raspberry",
    "graps",
    "strawberry",
    "fig",
    "Kiwi",
    "Avocado",
    "Mango",
    "banana",
    "coconut",
    "Bunch of graps",
    "Pineapple",
    "Rhubarb",
    "cantaloupe",
    "jackfruit"
  ];

  const items = images.map((image, index) => ({
    id: index, // Start ids from 3 since we are skipping 1 and 2
    image: image,
    name: image
  }));

  const imagesPath = items.map(item => require(`../../assets/images/baby/${item.image}.png`));

  return (
    <IonContent>
      <IonHeader>
        <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
          <IonIcon icon={chevronBackOutline} onClick={() => history.push("/baby")} style={{ fontSize: "24px", color: "white" }} />
          <p className="m-0 fw-bold fs-5 text-white">Size</p>
          <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} />
        </div>
      </IonHeader>

      <IonSegment mode='md'>
        {['<1', '1-2', '3-4', 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(navItem => (
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

      {selectedNavItem && imagesPath[selectedNavItem] && items[selectedNavItem].name && (<>
        <div className="d-flex justify-content-center align-items-center">
          <div className="img">
            {/* Display the image using the selected item index */}
            <img className="w-100 h-100" src={imagesPath[items[selectedNavItem].id]} alt={items[selectedNavItem].name} />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {items[selectedNavItem].name}
        </div>
      </>

      )}
    </IonContent>
  )
}
