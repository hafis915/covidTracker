import React, {useEffect, useState} from 'react'
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
import { useHistory , useParams} from 'react-router-dom'
import { getVictimById } from '../config/firebase'

const Detail : React.FC  = () => {
    const {id} = useParams<{id:string}>()
    const history = useHistory()
    const [victim , setVictim] = useState<any>({})
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        const data = getVictimById(id)
        data.then((res:any) =>{
            if(res) {
                setVictim(res.data())       
                setLoading(false)         
            }else{
                console.log('ioooo');
            }
        })
        .catch(err => {
            console.log(err)
        })
        
    }, [])



    const handleBackHome = () => {
        console.log('detail')
        history.push('/dashboard')
    }

    const handleDeleteDetail = () => {
        console.log('Are you sure?');
        
    }

    if(loading) return <h1>loading</h1>
    return (
    <IonPage>
              <IonHeader
      className="dashboardHeader"
      >
        <IonToolbar>
          <div className="name">
          <IonIcon 
          onClick= {handleBackHome}
          className="icon-back"
          icon={chevronBackOutline}></IonIcon>
          <IonTitle
          className="title"
          >Detail</IonTitle>
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
                        <img src={victim.photoUrl} alt="photo URL" />
                    </div>
                    <IonCardTitle>{victim.name}</IonCardTitle>
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
                        <IonLabel>Region : {victim.region} </IonLabel>
                    </IonItem>

                    <IonItem
                    className= "itemListDetail"
                    >
                        <IonLabel>Gender : {victim.gender} </IonLabel>
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