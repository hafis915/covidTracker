import React from 'react'
import Navbar from '../components/Navbar'
import { IonReactRouter } from '@ionic/react-router';
import {
    IonRouterOutlet

} from '@ionic/react'
import {Route} from 'react-router-dom'
import Detail from './Detail'
const Main: React.FC = () => {
    return(
        <Navbar></Navbar>
        // <h1>Hello</h1>
    )
}

export default Main