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

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snaphost = await userRef.get().catch(e => console.log('Missing or insufficient permissions', e));

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
            console.error('Unable to create user', e);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc(); // rendomly generated id
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            title,
            items,
            id: doc.id,
            routeName: encodeURI(title.toLowerCase()),
        }
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

export const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: 'select_account',
});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;