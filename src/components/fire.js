import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB2iIoplG-b-1jPSeWDVg-8P7dVsQTlRkI',
  authDomain: 'cryptovision-5e324.firebaseapp.com',
  databaseURL: 'https://cryptovision-5e324.firebaseio.com',
  projectId: 'cryptovision-5e324',
  storageBucket: '',
  messagingSenderId: '338133362821',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
