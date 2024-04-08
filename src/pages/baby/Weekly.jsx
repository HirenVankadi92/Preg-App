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
    const [selectedTab, setSelectedTab] = useState("1-5 week");
    const history = useHistory();
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
                <IonSegmentButton value="1-5 week">
                    <IonLabel>1-5 week</IonLabel>
                </IonSegmentButton>
            </IonSegment>

            <div className='d-flex justify-content-center'>
                <IonCard >
                    <img height={200} src={babyName} />
                </IonCard>
                <IonCard color="light"  >
                    <IonCardHeader >
                        <IonCardTitle><b>Size</b>   <b>&gt;</b>    </IonCardTitle>

                        <IonCardSubtitle><b>Length</b> <br />  (inch)</IonCardSubtitle> 0.05       </IonCardHeader>

                    <IonCardContent className=''><b>Weight</b></IonCardContent>
                </IonCard>
            </div>

            <IonItem>
                <IonLabel>
                    <h2><b>Your Baby</b></h2>
                    <p>
                        During the first 1-5 weeks of your baby's life, each day unveils new wonders and challenges as you navigate the journey of parenthood. Your baby, still in the tender stages of infancy, relies on you for everything, fostering a profound bond built on love and care.
                    </p><p>
                        In these initial weeks, your baby's development is remarkable. They gradually adjust to life outside the womb, exhibiting reflexes like rooting and sucking, essential for feeding and comfort. Their senses awaken, responding to your touch, voice, and scent, strengthening the attachment between parent and child.
                    </p><p>
                        Despite their tiny size, your baby's personality begins to emerge, manifesting through subtle cues and expressions. You'll witness their first fleeting smiles, a heartwarming glimpse into their budding emotions.
                    </p><p>
                        Amidst the joys of parenthood, challenges may arise, such as adjusting to feeding schedules, deciphering your baby's cries, and managing sleep patterns. However, each obstacle is an opportunity for growth, strengthening your confidence and intuition as a caregiver.
                    </p><p>
                        As you embark on this transformative journey, cherish the quiet moments of bonding with your newborn, knowing that each cuddle, kiss, and gentle lullaby nurtures their physical and emotional well-being. These precious weeks lay the foundation for a lifetime of love, trust, and cherished memories between you and your little one.
                    </p>
                </IonLabel>
            </IonItem>



        </IonContent>
    )
}
