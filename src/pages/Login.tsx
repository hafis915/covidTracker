import { 
  IonContent, 
  IonPage,
  IonInput,
  IonItem,
  IonLabel,
  IonButton 
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
              type= "number"
              // ref={phoneNumber}
              ></IonInput>
            </IonItem>
            <IonItem className="ionItem">
              <IonLabel  
              position="floating"></IonLabel>
              <IonInput 
              placeholder="password"
              // ref= {passwordInput}
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
              color="danger"
              expand="full"
              onClick= {handleCancelLoginButton}
              >Cancel</IonButton>
            </div>
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
