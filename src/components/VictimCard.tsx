import React from "react"
import { 
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonItem,
    IonLabel
  } from '@ionic/react';
  import { 
      trashOutline, 
      pencilOutline, 
      chevronForwardOutline ,
    } from 'ionicons/icons';

const VictimCard : React.FC = () => {
return(
  <IonItemSliding>
    <IonItemOptions side="start">
      <IonItemOption onClick={() => console.log('favorite clicked')}>Favorite</IonItemOption>
      <IonItemOption color="danger" onClick={() => console.log('share clicked')}>Share</IonItemOption>
    </IonItemOptions>
    <IonCard
      className="dashBoardCard"
          >
          <IonCardHeader
          className='dashbordCardHeader'
          >
            <img src="https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png" alt="photo URL"/>
            <IonCardTitle>
              <h4>Victim 1</h4>
            </IonCardTitle>
            <div className="action">
              <IonIcon 
              className= "deleteCard"
              icon={trashOutline} />

              <IonIcon
              icon= {pencilOutline}
              className= "editCard"
              />

              <IonIcon
              icon= {chevronForwardOutline}
              className= "nextCard"
              />
            </div>
          </IonCardHeader>
    </IonCard>
    {/* </IonItem> */}

    <IonItemOptions side="end">
      <IonItemOption onClick={() => console.log('unread clicked')}>Unread</IonItemOption>
    </IonItemOptions>
  </IonItemSliding>
)
}

export default VictimCard

