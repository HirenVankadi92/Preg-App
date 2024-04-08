import {
    IonContent, IonHeader, IonIcon,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonItem, IonList,
    IonInput,
    IonTextarea,
    IonNote,
    IonToggle,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonCard
} from '@ionic/react'
import { chevronBackOutline, personCircleOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import babyName from '../../assets/images/baby/baby1.png'
import "./baby.css"

export const Weekly = () => {
    const [selectedTab, setSelectedTab] = useState("1");
    const history = useHistory();

    const tabs = [{
        id: 1,
        text: '1-5 Week',
        image: require('../../assets/images/baby/1-5.png'),
        description: '',
        length: 0.05,
        weight: 0
    },
    {
        id: 2,
        text: '6-10 Week',
        image: require('../../assets/images/baby/6-10.png'),
        description: '',
        length: 1.22,
        weight: 1.20
    },
    {
        id: 3,
        text: '11-15 Week',
        image: require('../../assets/images/baby/11-15.png'),
        description: '',
        length: 6.60,
        weight: 4.10
    }
    ]

    const currentTab = tabs.find(x => x.id == selectedTab);
    return (
        <IonContent>
            <IonHeader>
                <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
                    <IonIcon icon={chevronBackOutline} onClick={() => history.push("/baby")} style={{ fontSize: "24px", color: "white" }} />
                    <p className="m-0 fw-bold fs-5 text-white">Weekly</p>
                    <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} />
                </div>
            </IonHeader>
            <IonSegment value={selectedTab} onIonChange={e => setSelectedTab(e.detail.value)}>
                <IonSegmentButton value="1">
                    <IonLabel>1-5 Week</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="2">
                    <IonLabel>6-10 Week</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="3">
                    <IonLabel>11-15 Week</IonLabel>
                </IonSegmentButton>
            </IonSegment>

            {selectedTab &&
                <> <div className='d-flex '>
                    <IonCard >
                        <img height={200} src={currentTab.image} />
                    </IonCard>
                    <IonCard color="light" style={{ width: 150 }}  >
                        <IonCardHeader >
                            <IonCardTitle><b>Size</b>   <b>&gt;</b>    </IonCardTitle>

                            <IonCardSubtitle><b>Length</b> <br />  (inch)</IonCardSubtitle> {currentTab.length}      </IonCardHeader>

                        <IonCardContent className=''><b>Weight</b> (ounces) </IonCardContent> {currentTab.weight}
                    </IonCard>
                </div>

                    <IonItem>
                        <IonLabel>
                            <h2><b>Your Baby</b></h2>
                            <p>
                                {currentTab.description}
                            </p>
                        </IonLabel>
                    </IonItem>
                </>
            }



        </IonContent>
    )
}
