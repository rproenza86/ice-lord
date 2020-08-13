import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';

const firebaseConfig = {
    apiKey: 'AIzaSyDisz32peGunYuHGprJCVWgDMa2OIomkAg',
    authDomain: 'ice-lord.firebaseapp.com',
    databaseURL: 'https://ice-lord.firebaseio.com',
    projectId: 'ice-lord',
    storageBucket: 'ice-lord.appspot.com',
    messagingSenderId: '1024998570333',
    appId: '1:1024998570333:web:81038c8efb22cbd47950b4',
    measurementId: 'G-6NZSGLYYKE',
};

firebase.initializeApp(firebaseConfig);

export const analytics = firebase.analytics();
export const performance = firebase.performance();

export default firebase;
