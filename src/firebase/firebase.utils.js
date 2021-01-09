import firebase from 'firebase/app';
import 'firebase/auth';

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

export const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithRedirect(googleAuthProvider);

export default firebase;