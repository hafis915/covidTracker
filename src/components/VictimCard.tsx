import React from "react"
import { 
    IonItem,
    IonNav,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonRouterOutlet,
    IonTabButton,
    IonList
  } from '@ionic/react';
import { 
    trashOutline, 
    pencilOutline, 
    chevronForwardOutline ,
  } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Detail from '../pages/Detail'
import {Route, Redirect, useHistory} from 'react-router-dom'
import { deleteVictim } from '../config/firebase'

const VictimCard:React.FC <{victim:any}>= ({victim} ) => {

  const history = useHistory()
  const handleDetailInfo = () => {
    console.log("detail")
  }
  const handleMoreInfo = () => {
    console.log(victim.id)
    history.push(`/detail/${victim.id}`)
  }

  const handleDeleteVictim = (id:any) => {
    deleteVictim(id)

  }
return(
    <IonReactRouter>

    <IonCard
      className="dashBoardCard"
    >
          {/* <IonRouterOutlet>
            <Route exact path="/detail" component= {Detail} />
            <Redirect exact from ="/" to="/detail" />
          </IonRouterOutlet> */}
          <IonCardHeader
          className='dashbordCardHeader'
          >
            <img src={victim.data.photoUrl} alt="photo URL"/>
            <IonCardTitle>
              <h4>{victim.data.name}</h4>
            </IonCardTitle>
            <div className="action">

            <IonIcon
              icon= {pencilOutline}
              onClick= {handleDetailInfo}
              className= "editCard"
              />
            
            <IonIcon 
            onClick = {() =>  handleDeleteVictim(victim.id)}
            className= "deleteCard"
            icon={trashOutline} />
            
            {/* <a  href="/detail">sss</a> */}
            <IonIcon
            onClick= {handleMoreInfo}
            icon= {chevronForwardOutline}
            className= "nextCard"
            />
           
            </div>
          </IonCardHeader>
    </IonCard>
    </IonReactRouter>

)
}

export default VictimCard

