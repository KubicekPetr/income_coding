import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyALFzS90tgkhGjQsCNPWe7OCCvnSD3NHJQ",
    authDomain: "ecommerce-a446c.firebaseapp.com",
    projectId: "ecommerce-a446c",
    storageBucket: "ecommerce-a446c.appspot.com",
    messagingSenderId: "289296999868",
    appId: "1:289296999868:web:d649114372c021d01437b9",
    measurementId: "G-MRG905H0DM"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    console.log(firestore.doc('users/345lkjdfs'));
}

export const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;