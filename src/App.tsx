import { Route,Redirect } from 'react-router-dom';
import { 
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonApp,
  IonRouterOutlet 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { GuardProvider, GuardedRoute } from 'react-router-guards'
import { requireLogin } from './config/firebase/routerGuard'
import Login from './pages/Login';
import Verify from './pages/Verify'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard';
import AddVictim from './pages/AddVictim';
import Profile from './pages/Profile';
import Admin from './pages/Admin'
import Detail from './pages/Detail'
import Register from "./pages/Register"
// import Admin from './pages/Admin'
import { peopleOutline, accessibilityOutline, statsChartOutline, addOutline } from 'ionicons/icons';

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
        <IonTabs>
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
            <GuardedRoute exact path="/detail/:id" component= {Detail} />
            <GuardedRoute exact path="/" component= {Main} />
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/addVictim">
              <AddVictim />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/admin">
              <Admin></Admin>
            </Route>

            <Route exact path="/detail" component = {Detail}/>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>


          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={accessibilityOutline} />
              <IonLabel>Victims</IonLabel>
            </IonTabButton>

            <IonTabButton tab="admin" href="/admin">
              <IonIcon icon={statsChartOutline} />
              <IonLabel>Statistic</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab2" href="/addVictim">
              <IonIcon icon={addOutline} />
              <IonLabel>Add Victims</IonLabel>
            </IonTabButton>

            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
        </GuardProvider>
    </IonReactRouter>

  </IonApp>
);

export default App;
