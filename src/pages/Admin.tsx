import React, {useState} from 'react'
import "./Admin.css"

import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonTitle,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel

  } from '@ionic/react';
import {chevronBackOutline} from "ionicons/icons"
import Chart from "../components/Chart"
import Table from '../components/Table'
const Admin : React.FC = () => {
    const [segment, setSegment] = useState('table')

    const handleChangeSegment = (segmentData:any) => {
      setSegment(segmentData)
      console.log(segment);
      
    }
    return (
    <IonPage>
        <IonHeader
            className="adminHeader"
            >
                <IonToolbar>
                <div className="name">
                <IonIcon 
                className="icon-back"
                icon={chevronBackOutline}></IonIcon>
                <IonTitle
                className="title"
                >Statistic</IonTitle>
                </div>
                </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSegment onIonChange={e => {
          handleChangeSegment(e.detail.value)
      }}>
          <IonSegmentButton value="table">
            <IonLabel>table</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="chart">
            <IonLabel>chart</IonLabel>
            
          </IonSegmentButton>
        </IonSegment>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent
          className= 'adminContainer'
          >
        {
          segment === 'table' ?
            <>
            <h4>Statistic</h4>
             <Table></Table>
            </>
  
          :
          <>
            <Chart></Chart>
            <Chart></Chart>
            <Chart></Chart>
          </>

        }
          </IonContent>
       
      </IonContent>
     
            

      </IonPage>
    )
}

export default Admin