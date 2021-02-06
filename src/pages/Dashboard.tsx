import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonRouterOutlet
} from '@ionic/react';
import './Dashboard.css';
import VictimCard from '../components/VictimCard'
import {chevronBackOutline} from "ionicons/icons"
import { IonReactRouter } from '@ionic/react-router';
import {Route, Redirect} from 'react-router-dom'

import Detail from './Detail'

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader
      className="dashboardHeader"
      >
        <IonToolbar>
          <div className="name">
          <IonIcon 
          className="icon-back"
          icon={chevronBackOutline}></IonIcon>
          <IonTitle
          className="title"
          >Your Victims</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent 
      fullscreen
      className="dashboardContainer"
      >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent
        className= "dashboardContent"
        >
          <div className="title">
            <h4>Your Victims</h4>
          </div>

          <VictimCard></VictimCard>
          <VictimCard></VictimCard>
          <VictimCard></VictimCard>
          <VictimCard></VictimCard>
          <VictimCard></VictimCard>
          <VictimCard></VictimCard>
        </IonContent>
      </IonContent>
      {/* <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/detail" >
            <Detail></Detail>
          </Route>
        </IonRouterOutlet>
      </IonReactRouter> */}

    </IonPage>
  );
};

export default Dashboard;
