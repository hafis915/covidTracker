import { 
  IonContent, 
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCard
} from '@ionic/react';
import './Login.css';
import React, {useRef} from 'react'
import { useHistory } from 'react-router-dom'

const Login: React.FC = () => {
  const phoneNumber = useRef<HTMLIonInputElement>(null)
  const passwordInput = useRef<HTMLIonInputElement>(null)
  const history = useHistory()

  const handleLoginButton = () => {
    console.log("login")
    console.log(phoneNumber.current?.value)
    console.log(passwordInput.current?.value);
    history.push('/verify')
    
  }
  const handleCancelLoginButton= () => {
    console.log('cancel');
    
  }

  return (
    <IonPage>
      <IonContent fullscreen className="loginContainer">
        <IonCard
        className="login-Page"
        >
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
              type="text"
              ></IonInput>
            </IonItem>
            <IonItem className="ionItem">
              <IonLabel  
              position="floating">Password</IonLabel>
              <IonInput 
              type="text"
              ></IonInput>
            </IonItem>
            <div className="button">
              <IonButton
              className= "button-login"
              expand="full"
              onClick= {handleLoginButton}
              >Login</IonButton>
            </div>
            <div className="button">
              <IonButton
              color="success"
              expand="full"
              onClick= {handleCancelLoginButton}
              >Register</IonButton>
            </div>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
