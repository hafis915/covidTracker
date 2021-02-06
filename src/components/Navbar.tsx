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
import AddVictim from '../pages/AddVictim';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin'
import {Route, Redirect} from 'react-router-dom'
import { peopleOutline, accessibilityOutline, statsChartOutline, addOutline } from 'ionicons/icons';

const Navbar : React.FC = () => {
    return(
    <IonReactRouter>
        <IonTabs>

          <IonRouterOutlet>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/addVictim">
              <AddVictim />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/admin">
              <Admin></Admin>
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

            <IonTabButton tab="admin" href="/admin">
              <IonIcon icon={statsChartOutline} />
              <IonLabel>Statistic</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab2" href="/addVictim">
              <IonIcon icon={addOutline} />
              <IonLabel>Add Victims</IonLabel>
            </IonTabButton>

            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonReactRouter>
    )
}

export default Navbar