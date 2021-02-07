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

export async function login(email,password) {
  try {
    const user =firebase.auth().signInWithEmailAndPassword(email, password)
    return user
  } catch (error) {
    console.log(error)
  }

}

export function logout() {
  firebase.auth().signOut()
  
}

export async function addVictim(payload) {
    const userUID = localStorage.getItem('userUID')


    console.log('add victim di index')
    db.collection('Victims').doc().set(payload)
      .then(res => {
        console.log('masuks ')
      })
      .catch(err => console.log(err))
}

export function deleteVictim(id) {
  db.collection('Victims').doc(id).delete()
    .then(res => {
      console.log('deleted')
    })
    .catch('ggal')
}

export async function getUserVictim() {
  const userUID = localStorage.getItem('userUID')
  const victims = db.collection("Victims")
  const userVictims = await victims.where('UserId', '==', userUID).get()
  if(userVictims.empty) {
    return("empty")
  }
  const result = []
  userVictims.forEach( doc => {
    const docs = {
      id : doc.id,
      data : doc.data()
    }
    result.push(docs)
  })
  return result
}

export const userVictimRef = db.collection('Victims')

export async function getVictimById(id){
  console.log(id, 'ini id')
//   db.collection("Victims").doc(id).get()
//   .then((docRef) => {
//     // console.log(docRef)
//     console.log(docRef.data())
//     return docRef.data()
//   })
//   .catch( err => {
//     console.log(err) 
// })
  try {
  const userVictim = await db.collection("Victims").doc(id).get()
  
  if(userVictim.empty) {
    return('empty')
  }
  console.log(userVictim,'itu')
  return userVictim
  } catch (error) {
    
  }
}