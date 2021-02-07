    {/* <IonReactRouter>
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
            {/* <GuardedRoute exact path="/detail" component= {Detail} /> */}
            {/* <GuardedRoute exact path="/" component= {Main} />
          </IonRouterOutlet> */}


      {/* </GuardProvider>
    </IonReactRouter> */} 