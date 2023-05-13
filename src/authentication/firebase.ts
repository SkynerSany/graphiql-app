import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import store from '../store/store';
import { onRedirect, openErrorModal } from '../store/reducers';

const firebaseConfig = {
  apiKey: 'AIzaSyDIXJ5YT7hoNbBFqK3TBcV41-TzIO-7n7w',
  authDomain: 'fir-auth-6edd8.firebaseapp.com',
  projectId: 'fir-auth-6edd8',
  storageBucket: 'fir-auth-6edd8.appspot.com',
  messagingSenderId: '904760319835',
  appId: '1:904760319835:web:44fd0d957f114b4e51447e',
  measurementId: 'G-Q4TYKH9GG7',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    store.dispatch(openErrorModal());
    setTimeout(() => store.dispatch(onRedirect()), 2000);

    // alert(text.wrongData);
    if (err instanceof Error) console.log(err.message);
  }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    store.dispatch(openErrorModal());

    // alert(text.wrongData);
    if (err instanceof Error) console.log(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, logout };
