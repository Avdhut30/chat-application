import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCxpmWGPpibcwjbM2x2N9k4Zy9OUJsjIAE',
  authDomain: 'chat-web-app-d3b70.firebaseapp.com',
  projectId: 'chat-web-app-d3b70',
  storageBucket: 'chat-web-app-d3b70.appspot.com',
  messagingSenderId: '1033057028497',
  appId: '1:1033057028497:web:1ad9546ca57ea42029b230',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
