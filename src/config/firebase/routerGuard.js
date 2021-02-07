import firebase from 'firebase'

export const requireLogin = (to, from ,next) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            next()
          // ...
        } else {
            next.redirect('/login')
        }
      })
}
// export default requireLogin