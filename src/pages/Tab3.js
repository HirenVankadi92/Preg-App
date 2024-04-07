import {
  IonContent,
  IonHeader,
  IonIcon
  // IonPage,
  // IonTitle,
  // IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import Guides from '../assets/images/me/guides-removebg-preview.png'
import MomWeight from '../assets/images/me/mom_s_weight-removebg-preview.png'
import MomBump from '../assets/images/me/mom_s_bump-removebg-preview.png'
import BirthPlan from '../assets/images/me/birth_plan-removebg-preview.png'
import Appointments from '../assets/images/me/appointment-removebg-preview.png'
import Todo from '../assets/images/me/to_do-removebg-preview.png'
import "./Tab3.css";
import { useHistory } from 'react-router-dom'

const Tab3 = () => {
  const history = useHistory()
  return (
    <>
      <IonContent>
        <IonHeader>
          <div className="header py-3 px-3 text-center">
            {/* <IonIcon icon={chevronBackOutline} style={{ fontSize: "24px", color: "white" }} /> */}
            <p className="m-0 fw-bold fs-5 text-white">Mom</p>
            {/* <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} /> */}
          </div>
        </IonHeader>
        <IonContent fullscreen>
          <div className="px-3 py-2">
            <div className="row">
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/guides')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Guides} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Guides</p>
                  </div>
                </div> */}
              </div>
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/momweight')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={MomWeight} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Mom’s Weight</p>
                  </div>
                </div> */}
              </div>
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/mombump')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={MomBump} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Mom’s Bump</p>
                  </div>
                </div> */}
              </div>
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/birthplan')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={BirthPlan} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Birth Plan</p>
                  </div>
                </div> */}
              </div>
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/appointments')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Appointments} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Appointments</p>
                  </div>
                </div> */}
              </div>
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/todo')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Todo} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">To Do</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </IonContent>
      </IonContent>
    </>
  );
};

export default Tab3;
