import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
 
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

// import Home from "../src/assets/images/tab images/home.png"

import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

// import Menus from "../src/assets/images/tab-images/menus.svg";
import "./App.css";

/* Theme variables */
import "./theme/variables.css";
import { Read } from "./pages/Read";
import { Login } from "./pages/login/login";
import { Create } from "./pages/login/create";
import React, { useContext, useState } from "react";

import MainTabs from "./pages/MainTabs";

setupIonicReact();

const user = {
  setIsLoggedIn: () => {}
};
export const UserContext = React.createContext(user);


const IonicApp= () => {
  const user = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") !== null ? true: false);

  user.setIsLoggedIn = setIsLoggedIn;

  return (
    <IonApp>
      <IonReactRouter>
     
        <Route path="/login" component={Login} exact={true} />
        <Route path="/create" component={Create} exact={true} />
        <Route path="/" component={isLoggedIn ? MainTabs : Login} />
      </IonReactRouter>
    </IonApp>
  );
};
const App = () => {
  return (
    <UserContext.Provider value={user}>
    <IonicApp />
  </UserContext.Provider>
  );
};

export default App;
