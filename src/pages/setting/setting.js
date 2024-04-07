import { IonContent, IonHeader, IonIcon, IonToggle } from '@ionic/react'
import { chevronBackOutline, personCircleOutline } from 'ionicons/icons'
import React from 'react'
import { useHistory } from 'react-router'

export const Setting = () => {
    const history = useHistory();
    return (
        <>
            <IonContent>
                <IonHeader>
                    <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
                        <IonIcon icon={chevronBackOutline} onClick={() => history.push("/denny")} style={{ fontSize: "24px", color: "white" }} />
                        <p className="m-0 fw-bold fs-5 text-white">Setting</p>
                        <IonIcon icon={personCircleOutline} onClick={() => history.push("/user")} style={{ fontSize: "24px", color: "white" }} />
                    </div>
                </IonHeader>
                <IonContent fullscreen>
                    <div className='p-3'>
                        <div className="setting-content">
                            <p className="mb-0">Sounds</p>
                            {/* <IonIcon icon={chevronForwardOutline} /> */}
                            <IonToggle className="toggles" enableOnOffLabels={true}></IonToggle>
                        </div>
                        <div className="setting-content">
                            <p className="mb-0">HealthKit sync</p>
                            {/* <IonIcon icon={chevronForwardOutline} /> */}
                            <IonToggle className="toggles" enableOnOffLabels={true}></IonToggle>
                        </div>
                        <div className="setting-content">
                            <p className="mb-0">Reminders</p>
                            {/* <IonIcon icon={chevronForwardOutline} /> */}
                            <IonToggle className="toggles" enableOnOffLabels={true}></IonToggle>
                        </div>
                        <div className="setting-content">
                            <p className="mb-0">Length units</p>
                            {/* <IonIcon icon={chevronForwardOutline} /> */}
                            <select className="border-0 ps-4">
                                <option className="options" value="Select">Select</option>
                                <option className="options" value="cm" >cm</option>
                                <option className="options" value="in" >in</option>
                            </select>
                        </div>
                        <div className="setting-content">
                            <p className="mb-0">Weight units</p>
                            {/* <IonIcon icon={chevronForwardOutline} /> */}
                            <select className="border-0 ps-4">
                                <option className="options" value="Select">Select</option>
                                <option className="options" value="current" >Current</option>
                                <option className="options" value="complete" >Complete</option>
                            </select>
                        </div>
                        <div className="setting-content">
                            <p className="mb-0">Login With Face ID</p>
                            {/* <IonIcon icon={chevronForwardOutline} /> */}
                            <IonToggle className="toggles" enableOnOffLabels={true}></IonToggle>
                        </div>
                        <div className="setting-content">
                            <p className="mb-0">Clear app cache</p>
                        </div>
                    </div>
                </IonContent>
            </IonContent>
        </>
    )
}
