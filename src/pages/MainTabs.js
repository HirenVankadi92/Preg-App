import React, { useState } from 'react';
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { Read } from "../pages/Read";
import { ellipse, square, triangle, home } from "ionicons/icons";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import Tab4 from "../pages/Tab4";
import Tab5 from "../pages/Tab5";

import Home from "../../src/assets/images/tab-images/Home.svg";
import Baby from "../../src/assets/images/tab-images/Baby.svg";
import Me from "../../src/assets/images/tab-images/Me.svg";
import User from "../../src/assets/images/tab-images/User.svg";
import Menu from "../../src/assets/images/tab-images/Menu.svg";

import Homes from "../../src/assets/images/tab-images/homes.svg";
import Babys from "../../src/assets/images/tab-images/babys.svg";
import Mes from "../../src/assets/images/tab-images/mes.svg";
import Users from "../../src/assets/images/tab-images/users.svg";
import { Babyname } from "../pages/baby/Babyname";
import { Timeline } from "../pages/baby/Timeline";
import { Size } from "../pages/baby/Size";
import { Weekly } from "../pages/baby/Weekly";
import { Daily } from "../pages/baby/Daily";
import { BabyScan } from "../pages/baby/BabyScan";
import { Guides } from "../pages/Me/Guides";
import { MomsWeight } from "../pages/Me/MomsWeight";
import { MomsWeight2 } from "../pages/Me/MomsWeight2";
import { MomsBump } from "../pages/Me/MomsBump";
import { BirthPlan } from "../pages/Me/BirthPlan";
import  Appointments  from "../pages/Me/Appointments";
import  Appointment2  from "../pages/Me/Appointment2";
import { ToDo } from "../pages/Me/ToDo";
import { Setting } from "../pages/setting/setting";
import { TellAFriend } from "../pages/setting/tellAFriend";
import Blogs from './blogs/Blogs';
const MainTabs = () => {
    const [active, setActive] = useState("home");

  return (
    <IonPage id="main">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/home">
                <Tab1 />
              </Route>
              <Route exact path="/read">
                <Read />
              </Route>
              <Route exact path="/baby">
                <Tab2 />
              </Route>
              <Route path="/me">
                <Tab3 />
              </Route>
              <Route path="/user">
                <Tab4 />
              </Route>
            
              

              {/*  Page Route  */}
              <Route path="/daily">
                <Daily />
              </Route>
              <Route path="/weekly">
                <Weekly />
              </Route>
              <Route path="/scan">
                <BabyScan />
              </Route>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/size">
                <Size />
              </Route>
              <Route path="/timeline">
                <Timeline />
              </Route>
              <Route path="/babyname">
                <Babyname />
              </Route>

              {/* Me Page Route  */}
              <Route path="/guides">
                <Guides />
              </Route>
              <Route path="/momweight">
                <MomsWeight />
              </Route>
              <Route path="/momweight2">
                <MomsWeight2 />
              </Route>
              <Route path="/mombump">
                <MomsBump />
              </Route>
              <Route path="/birthplan">
                <BirthPlan />
              </Route>
              <Route path="/appointments">
                <Appointments />
              </Route>
              <Route path="/appointment2">
                <Appointment2 />
              </Route>
              <Route path="/todo">
                <ToDo />
              </Route>

              {/* Setting Page Route  */}
              <Route path="/setting">
                <Setting />
              </Route>
              <Route path="/tell-a-friend">
                <TellAFriend />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" className="icones">
              <IonTabButton
                tab="home"
                href="/home"
                className="icon-img"
                onClick={() => setActive("home")}
              >
                {active == "home" ? <img src={Homes} /> : <img src={Home} />}
                <IonLabel></IonLabel>
              </IonTabButton>
              <IonTabButton
                tab="tab2"
                href="/baby"
                className="icon-img"
                onClick={() => setActive("baby")}
              >
                {active == "baby" ? <img src={Babys} /> : <img src={Baby} />}
                <IonLabel></IonLabel>
              </IonTabButton>
              <IonTabButton
                tab="tab3"
                href="/me"
                className="icon-img"
                onClick={() => setActive("me")}
              >
                {active == "me" ? <img src={Mes} /> : <img src={Me} />}
                <IonLabel></IonLabel>
              </IonTabButton>
              <IonTabButton
                tab="tab4"
                href="/user"
                className="icon-img"
                onClick={() => setActive("user")}
              >
                {active == "user" ? <img src={Users} /> : <img src={User} />}
                <IonLabel></IonLabel>
              </IonTabButton>
             
            </IonTabBar>
          </IonTabs>
        </IonPage>
  );
}

export default MainTabs;
