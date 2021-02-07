import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonInput,
  IonLabel,
  IonList,
  IonButton,
  IonSelect,
  IonSelectOption
 } from '@ionic/react';
import './AddVictim.css';
import React, {useRef} from 'react'
import { addVictim } from '../config/firebase/index'
const AddVictim: React.FC = () => {


  const nameInput = useRef<HTMLIonInputElement>(null)
  const regionInput = useRef<HTMLIonInputElement>(null)
  const photoUrlInput = useRef<HTMLIonInputElement>(null)
  const genderInput = useRef<HTMLIonSelectElement>(null)


  const handleSubmitVictim = () => {
    const name = (nameInput.current?.value)
    const region= (regionInput.current?.value)
    const photoUrl =(photoUrlInput.current?.value)
    const gender = (genderInput.current?.value)
    const payload = {
      name,
      region,
      photoUrl,
      gender,
      UserId : localStorage.getItem('userUID') 
    }
    addVictim(payload)
  }


  return (
    <IonPage>
      <IonHeader
      className="addVictimHeader"
      >
        <IonToolbar>
          <IonTitle>Add Victim Form </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent 
      className="formContainer"
      fullscreen
      >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent
        className="formContent"
        >
          <IonList
          className= "form"
          >
            <h4>Add New Victim</h4>
          <IonItem
          className="input"
          >
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput
              ref={nameInput}
              type="text"
              placeholder="John"
             ></IonInput>
          </IonItem>

          <IonItem
          className="input"
          >
            <IonLabel position="stacked">Region</IonLabel>
            <IonInput 
            ref={regionInput}
            type='text'
            placeholder={"Makassar"}
            /> 
          </IonItem>

          <IonItem
          className="input"
          >
            <IonLabel position="stacked">Photo Url </IonLabel>
            <IonInput 
            ref={photoUrlInput}
            type="text"
            placeholder='photo.jpg'
            />
          </IonItem>

          <IonItem
          className="input"
          >
            <IonLabel position="stacked">
              Gender
            </IonLabel>
            <IonSelect
            ref={genderInput}
            >
              <IonSelectOption value="male">Male</IonSelectOption>
              <IonSelectOption value="female">Female</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonButton
          onClick={handleSubmitVictim}
          className= "submitButton"
          >Submit</IonButton>


          <IonButton
          color= 'danger'
          >Cancel</IonButton>

          </IonList>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default AddVictim;
