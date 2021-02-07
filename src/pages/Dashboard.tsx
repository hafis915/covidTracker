import { 
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonPage, 
  IonTitle, 
  IonToolbar,

  
} from '@ionic/react';
import './Dashboard.css';
import VictimCard from '../components/VictimCard'
import {chevronBackOutline} from "ionicons/icons"
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getUserVictim, userVictimRef } from '../config/firebase'

const Dashboard: React.FC = () => {
  const history = useHistory()
  const [userVictims, setUserVictims] = useState<Array<Object>>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [newData, setNewData] = useState<Array<Object>>([])
  useEffect(() => {
    getUserVictim()
    .then((res:any) => {
      if(res.length) {
        console.log(res)
        setLoading(false)
        setUserVictims(res)
      }
    })
    .catch(err => {
      console.log(err);
    })
    return
  }, [newData])


  useEffect(() => {
    const userUID = localStorage.getItem('userUID')
      userVictimRef
      .onSnapshot( querySnapshot => {
        const temp:any = []
        const newVictims = querySnapshot.docChanges()
        console.log(newVictims, 'ini victims')
        console.log(newVictims.length)
        if(newVictims.length > 1) {
          setNewData([2])
        }else {
          setNewData(newVictims)
        }
      })
      return
  }, [])

  if(loading){
    return(
      <h1>Loading</h1>
    )
  }
  // console.log(userVictims, 'ini')
  return (

    <IonPage>
      <IonHeader
      className="dashboardHeader"
      >
        <IonToolbar>
          <div className="name">
          <IonTitle
          className="title"
          >Your Victims</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent 
      fullscreen
      className="dashboardContainer"
      >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent
        className= "dashboardContent"
        >
          <div className="title">
            <h4>Your Victims</h4>
          </div>
          {
            userVictims.map(   (victim,idx) => {
              return (
                <VictimCard
                key= {idx}
                victim= {victim}
                />
              )
            })
          }

        </IonContent>
      </IonContent>
    </IonPage>

  );
};

export default Dashboard;
