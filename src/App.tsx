import { Route,Redirect } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { GuardProvider, GuardedRoute } from 'react-router-guards'
import { requireLogin } from './config/firebase/routerGuard'
import Login from './pages/Login';
import Verify from './pages/Verify'
import Main from './pages/Main'
import Detail from './pages/Detail'
import Register from "./pages/Register"
// import Admin from './pages/Admin'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp >
    <IonReactRouter>
      <GuardProvider guards={[requireLogin]}>
          <IonRouterOutlet>
            <Route 
            exact path="/login" 
            render = { () => {
              if(localStorage.getItem('userUID')){
                return <Redirect to="/" />
              }else {
                return <Login /> 
              }
            }}/>

            <Route 
            exact path="/register"
            render = { () => {
              if(localStorage.getItem('userUID')) {
                return <Redirect to="/" />
              }else {
                return <Register/>
              }
            }} 
            />
            <GuardedRoute exact path="/verify" component= {Verify} />
            <GuardedRoute exact path="/detail" component= {Detail} />
            <GuardedRoute exact path="/" component= {Main} />
          </IonRouterOutlet>
      </GuardProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
