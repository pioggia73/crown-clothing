import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

   apiKey: "AIzaSyAODj7tmPttbo5PnhDmNQCI3bJ7EdbD9YA",
   authDomain: "crown-clothing-app-73b7c.firebaseapp.com",
   databaseURL: "https://crown-clothing-app-73b7c.firebaseio.com",
   projectId: "crown-clothing-app-73b7c",
   storageBucket: "crown-clothing-app-73b7c.appspot.com",
   messagingSenderId: "1092768377174",
   appId: "1:1092768377174:web:c545375fe475d2b86ccef7",
   measurementId: "G-7LB60M8CVJ"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message)
    } 
  };
  
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


