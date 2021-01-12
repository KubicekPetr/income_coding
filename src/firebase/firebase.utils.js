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

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snaphost = await userRef.get();

    if (!snaphost.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (e) {
            console.log('Unable to create user', e);
        }
    }

    return userRef;
}

export const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;