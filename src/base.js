import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDXPnGqsyHTizJbhjipMuXlWztR9MDkDg4',
  authDomain: 'catch-of-the-day-maccorzo.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-maccorzo.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
