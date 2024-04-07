import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import { chevronBackOutline, personCircleOutline } from "ionicons/icons";
import Daily from '../assets/images/baby/daily1.png'
import Weekly from '../assets/images/baby/weekly1.png'
import Scan from '../assets/images/baby/scan1.png'
import Size from '../assets/images/baby/size1.png'
import Timeline from '../assets/images/baby/timeline1.png'
import BabyNames from '../assets/images/baby/baby1.png'
import "./Tab2.css";
import { useHistory } from 'react-router-dom'

const Tab2 = () => {
  const history = useHistory()
  return (
    <>
      <IonContent>
        <IonHeader>
          <div className="header py-3 px-3 text-center">
            {/* <IonIcon icon={chevronBackOutline} style={{ fontSize: "24px", color: "white" }} /> */}
            <p className="m-0 fw-bold fs-5 text-white">Baby</p>
            {/* <IonIcon icon={personCircleOutline} style={{ fontSize: "24px", color: "white" }} /> */}
          </div>
        </IonHeader>
        <IonContent fullscreen>
          <div className="px-3 py-2">
            <div className="row">
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/daily')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Daily} />
                  </div>
                  <div className=" text-center pt-2">
                    {/* <p className="m-0 fw-semibold text-black-50 fs-6">Daily</p> */}
                  </div>
                {/* </div> */}
              </div>
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/weekly')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Weekly} />
                  </div>
                  <div className=" text-center pt-2">
                    {/* <p className="m-0 fw-semibold text-black-50 fs-6">Weekly</p> */}
                  </div>
                </div>
              {/* </div> */}
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/blogs')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Scan} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Scan</p>
                  </div> */}
                </div>
              {/* </div> */}
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/size')} className="cards  rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Size} />
                  </div>
                  <div className=" text-center pt-2">
                    {/* <p className="m-0 fw-semibold text-black-50 fs-6">Size</p> */}
                  </div>
                </div>
              {/* </div> */}
              {/* <div className="col-6" style={{ padding: "12px" }}> */}
                <div onClick={() => history.push('/timeline')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={Timeline} />
                  </div>
                  <div className=" text-center pt-2">
                    {/* <p className="m-0 fw-semibold text-black-50 fs-6">Timeline</p> */}
                  </div>
                </div>
              {/* </div> */}
              {/* <div className="col-6" style={{ padding: "5px" }}> */}
                <div onClick={() => history.push('/babyname')} className="cards rounded-3 col-6" style={{ cursor: "pointer",padding: "4px" }}>
                  <div className="img">
                    <img className="w-100 h-100" src={BabyNames} />
                  </div>
                  {/* <div className=" text-center pt-2">
                    <p className="m-0 fw-semibold text-black-50 fs-6">Baby Names</p>
                  </div> */}
                </div>
              {/* </div> */}
            </div>
          </div>
        </IonContent>
      </IonContent>
    </>
  );
};

export default Tab2;
