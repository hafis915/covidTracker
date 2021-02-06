import { 
  IonContent, 
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonButton 
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="login">
        <div className="login-Page">
          <div className="contain">
            <div className="title">
              <h1>Welcome</h1>
              <h1
              className= 'second-title'
              >Back</h1>
            </div>
            <IonItem className="ionItem">
              <IonLabel  
              position="floating">Phone Number</IonLabel>
              <IonInput 
              ></IonInput>
            </IonItem>
            <IonItem className="ionItem">
              <IonLabel  
              position="floating">Pasword</IonLabel>
              <IonInput 
              ></IonInput>
            </IonItem>
            <div className="button">
              <IonButton
              className= "button-login"
              expand="full"
              >Login</IonButton>
            </div>
            <div className="button">
              <IonButton
              color="danger"
              expand="full"
              >Cancel</IonButton>
            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
