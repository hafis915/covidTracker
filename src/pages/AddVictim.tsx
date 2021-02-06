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
  IonButton
 } from '@ionic/react';
import './AddVictim.css';

const AddVictim: React.FC = () => {
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
            <IonInput value='hello'> </IonInput>
          </IonItem>

          <IonItem
          className="input"
          >
            <IonLabel position="stacked">Region</IonLabel>
            <IonInput value='hello'> </IonInput>
          </IonItem>

          <IonItem
          className="input"
          >
            <IonLabel position="stacked">Photo Url </IonLabel>
            <IonInput value='hello'> </IonInput>
          </IonItem>

          <IonItem
          className="input"
          >
            <IonLabel position="stacked">
              Gender
            </IonLabel>
            <IonInput value='hello'> </IonInput>
          </IonItem>

          <IonButton
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
