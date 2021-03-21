//import dotenv
import env from 'react-dotenv';

//firebase config
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/analytics'

//all configurations can be obtained if you create a project on firebase
const firebaseConfig = {
    apiKey: env.API_KEY,
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGE_SENDER_ID,
    appId: env.APP_ID,
    measurementId: env.MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;