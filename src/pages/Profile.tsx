import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonTitle, 
  IonToolbar,
  IonCardHeader,
  IonList,
  IonItem,
  IonLabel

 } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader
      className= "profileHeader"
      >
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent
        className= "profileContainer"
        >
          <IonCard
          className= 'cardProfile'
          >
              <div className="backgroundImage">
              <IonCardTitle
              className= "userName"
              >User 1</IonCardTitle>
              <p>Lokasi | Role</p>
              </div>
            <img 
            className= 'profilePicture'
            src="https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png" alt="profile-picture"/>
            <IonCardHeader>
            </IonCardHeader>

            <IonCardContent>
              <IonList>
              <IonItem>
                 <IonLabel>Pokémon Yellow</IonLabel>
              </IonItem>

              <IonItem>
                 <IonLabel>Pokémon Yellow</IonLabel>
              </IonItem>


              <IonItem>
                 <IonLabel>Pokémon Yellow</IonLabel>
              </IonItem>

              <IonItem>
                 <IonLabel>Pokémon Yellow</IonLabel>
              </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
