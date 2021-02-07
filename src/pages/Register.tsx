import { 
    IonContent, 
    IonPage,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonCard
  } from '@ionic/react';
import './Register.css';
import React, {useRef} from 'react'
import { useHistory } from 'react-router-dom'
import { registerNewUser } from '../config/firebase'
const Register: React.FC = () => {
    const emailInput = useRef<HTMLIonInputElement>(null)
    const passwordInput = useRef<HTMLIonInputElement>(null)
    const history = useHistory()
  
    const handleRegisterButton = () => {
      console.log("Register")
      console.log(emailInput.current?.value)
      console.log(passwordInput.current?.value);
      const email = emailInput.current?.value
      const password = passwordInput.current?.value
      registerNewUser(email, password)
      history.push('/')
      
    }
    const handleCancelRegisterButton= () => {
      history.push('/login')
      
    }
  
    return (
      <IonPage>
        <IonContent fullscreen className="RegisterContainer">
          <IonCard
          className="Register-Page"
          >
            <div className="contain">
              <div className="title">
                <h1>Welcome</h1>
                <h1
                className= 'second-title'
                >To Covid Tracker</h1>
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
              <div className="button">
                <IonButton
                className= "button-Register"
                expand="full"
                onClick= {handleRegisterButton}
                >Register</IonButton>
              </div>
              <div className="button">
                <IonButton
                color="danger"
                expand="full"
                onClick= {handleCancelRegisterButton}
                >cancel</IonButton>
              </div>
            </div>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Register;
  