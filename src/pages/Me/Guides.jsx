import { IonContent, IonHeader, IonIcon } from '@ionic/react'
import { chevronBackOutline, personCircleOutline } from 'ionicons/icons'
import React from 'react'

import { useHistory } from 'react-router'
import "./me.css"

export const Guides = () => {
    const history = useHistory();
    return (
        <IonContent>
            <IonHeader>
                <div className="header py-3 px-3 d-flex justify-content-between align-items-center">
                    <IonIcon icon={chevronBackOutline} onClick={() => history.push("/me")} style={{ fontSize: "24px", color: "white" }} />
                    <p className="m-0 fw-bold fs-5 text-white">Guides</p>
                    <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} />
                </div>
            </IonHeader>
            <div>
                {/* console.log(new Date().toLocaleString()) */}
            </div>
        </IonContent>
    )
}
