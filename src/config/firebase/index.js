import firebase from 'firebase'
const firebaseConfig ={
    apiKey: "AIzaSyA4K3gvca8IPl4dWMWvU0xxpMLQH5CwmHw",
    authDomain: "covid-tracker-15c5b.firebaseapp.com",
    projectId: "covid-tracker-15c5b",
    storageBucket: "covid-tracker-15c5b.appspot.com",
    messagingSenderId: "1003865457747",
    appId: "1:1003865457747:web:702fb98137c0527839b2a6"
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const auth = firebase.auth()
const db = firebase.firestore()

export function registerNewUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    localStorage.setItem('userUID', user.user.uid)
    console.log('success register')
    console.log(user);
    
  })
  .catch(err => {
    console.log(err);
  })
}

function login(email,password) {
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}

// module.exports = {
//   registerNewUser,
//   login
// }