import React from "react"
import { 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon
  } from '@ionic/react';
  import { 
      trashOutline, 
      pencilOutline, 
      chevronForwardOutline ,
    } from 'ionicons/icons';

const VictimCard : React.FC = () => {
return(
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
)
}

export default VictimCard

