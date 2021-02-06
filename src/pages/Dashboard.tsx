import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonTitle, 
  IonToolbar,
} from '@ionic/react';
import './Dashboard.css';
import VictimCard from '../components/VictimCard'
import {chevronBackOutline} from "ionicons/icons"

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
    </IonPage>
  );
};

export default Dashboard;
