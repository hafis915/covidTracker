import React, {useRef} from 'react'
import "./Verify.css"
import { 
    IonContent, 
    IonPage,
    IonInput,
    IonItem,
    IonLabel,
    IonButton, 
    IonHeader
  } from '@ionic/react';


const Verify: React.FC = () => {

    const handleSubmitButton = () => {
    
    }
    return(
        <IonPage>
            <IonContent fullscreen className= "verify">
                <div className="verify-container">
                    <div className="main">
                        <div className="title">
                            <h2>Verify OTP</h2>
                        </div>
                        <p>we have sent an OTP on yout number +6222454</p>
                        <div className="verifyInput">
                            <IonItem
                                className="inputNumber"

                                >
                                <IonInput
                                placeholder= "0"
                                >
                                </IonInput>
                            </IonItem>

                            <IonItem
                                className="inputNumber"

                                >
                                <IonInput
                                placeholder= "0"
                                >
                                </IonInput>
                            </IonItem>

                            <IonItem
                                className="inputNumber"

                                >
                                <IonInput
                                placeholder= "0"
                                >
                                </IonInput>
                            </IonItem>
                            
                            <IonItem
                                className="inputNumber"

                                >
                                <IonInput
                                placeholder= "0"
                                >
                                </IonInput>
                            </IonItem>
                        </div>
                        <div className="button">
                            <IonButton
                            className= "button-login"
                            expand="full"
                            onClick= {handleSubmitButton}
                            >Submit</IonButton>
                        </div>

                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default  Verify