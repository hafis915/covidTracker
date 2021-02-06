import React from 'react'
import { 
    IonTabs,
    IonTabBar,
    IonRouterOutlet,
    IonTabButton,
    IonIcon,
    IonLabel,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Dashboard from '../pages/Dashboard';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import Login from '../pages/Login'
import {Route, Redirect} from 'react-router-dom'
import { peopleOutline, accessibilityOutline, triangle, addOutline } from 'ionicons/icons';

const Navbar : React.FC = () => {
    return(
    <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/tab3">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={accessibilityOutline} />
              <IonLabel>Victims</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={addOutline} />
              <IonLabel>Add Victims</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonReactRouter>
    )
}

export default Navbar