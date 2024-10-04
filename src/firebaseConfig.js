// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUBljf2859RZVpiDXUDOIKAP_bf6-aFU8",
    authDomain: "sttry-c35a6.firebaseapp.com",
    projectId: "sttry-c35a6",
    storageBucket: "sttry-c35a6.appspot.com",
    messagingSenderId: "80226052248",
    appId: "1:80226052248:web:b8c106572fbdbddcd188ed",
    measurementId: "G-S35T4MFKTJ"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup =()=> signInWithPopup(auth, provider);

export const db = getFirestore(app);
// const auth = getAuth(app);