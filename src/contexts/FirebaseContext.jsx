import { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';
import { set } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'raihanfolio-731d6.firebaseapp.com',
  projectId: 'raihanfolio-731d6',
  storageBucket: 'raihanfolio-731d6.appspot.com',
  messagingSenderId: '758337266327',
  appId: '1:758337266327:web:7a2f1cd80ac01643a63fd2',
  measurementId: 'G-J9285WXVY2',
};
//Firebase-App
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

//context
const FirebaseContext = createContext();
//custom-hook
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  //provider-funtions
  const signUpUserWithEmailAndPassword = ({ email, password }) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const putData = (key, data) => set(ref(db, key), data);
  return (
    //used Provider for reading
    <FirebaseContext.Provider
      value={{ signUpUserWithEmailAndPassword, putData }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
