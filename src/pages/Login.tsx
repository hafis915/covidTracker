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
  const emailInput = useRef<HTMLIonInputElement>(null)
  const passwordInput = useRef<HTMLIonInputElement>(null)
  const history = useHistory()

  const handleLoginButton = () => {
    console.log("login")
    console.log(emailInput.current?.value)
    console.log(passwordInput.current?.value);
    history.push('/')
    
  }
  const handleRegisterButton= () => {
    history.push('/register')
    
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
              position="floating">Email</IonLabel>

              <IonInput
              ref={emailInput}
              type="text"
              ></IonInput>
            </IonItem>

            <IonItem className="ionItem">

              <IonLabel  
              position="floating">Password</IonLabel>

              <IonInput 
              type="password"
              ref={passwordInput}
              ></IonInput>
            </IonItem>
            <p>Or Login <a href="'/login">With Phone number</a> </p>
            <div className="button">
              <IonButton
              className= "button-login"
              expand="full"
              onClick= {handleLoginButton}
              >Login</IonButton>
            </div>
            <p>Dont Have an account ? lets join wtih us and click register button</p>
            <div className="button">
              <IonButton
              color="success"
              expand="full"
              onClick= {handleRegisterButton}
              >Register</IonButton>
            </div>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
