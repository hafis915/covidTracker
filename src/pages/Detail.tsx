import React from 'react'
import "./Detail.css"
import { 
    IonContent, 
    IonHeader, 
    IonIcon, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonCardHeader,
    IonCardTitle,
    IonRouterOutlet,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    
  } from '@ionic/react';

import {chevronBackOutline} from "ionicons/icons"



const Detail : React.FC = () => {



    const handleDeleteDetail = () => {
        console.log('Are you sure?');
        
    }
    return (
    <IonPage>
              <IonHeader
      className="dashboardHeader"
      >
        <IonToolbar>
          <div className="name">
          <IonIcon 
          className="icon-back"
          icon={chevronBackOutline}></IonIcon>
          <IonTitle
          className="title"
          >Your Victims</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>

        <IonContent
        className = "detailContainer"
        >
            {/* <div className="title">
                Detail of Victim
            </div> */}

            <IonCard
            className = "detailCard"
            >
                <IonCardHeader
                className = "detailCardHeader"
                >
                    <div className="profilePicture">
                        <img src="https://cdn1.iconfinder.com/data/icons/random-115/24/person-512.png" alt="photo URL" />
                    </div>
                    <IonCardTitle>Victim 1</IonCardTitle>
                </IonCardHeader>


                <IonCardContent
                className = "detailCardContent"
                >
                    <IonItem
                    className= "itemListDetail"
                    >
                        <IonLabel>Age : 80</IonLabel>
                    </IonItem>

                    <IonItem
                    className= "itemListDetail"
                    >
                        <IonLabel>Address : dimana mana </IonLabel>
                    </IonItem>

                    <IonItem
                    className= "itemListDetail"
                    >
                        <IonLabel>Gender : Laki </IonLabel>
                    </IonItem>
                    <div className="buttonDetail">
                    <IonItem
                    button
                    color = 'success'
                    className= "button"
                    >
                        <IonLabel>Edit Data </IonLabel>
                    </IonItem>

                    <IonItem
                    button
                    color = 'danger'
                    className= "button"
                    onClick= {handleDeleteDetail}
                    >
                    <IonLabel>Delete </IonLabel>
                    </IonItem>
                    </div>

                </IonCardContent>
            </IonCard>
        </IonContent>
    </IonPage>
    )
}

export default Detail