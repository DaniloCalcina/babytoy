import { initializeApp } from "firebase/app";
import {collection, getDocs , doc , getDoc , getFirestore, where, query, addDoc, serverTimestamp} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword,signOut, signInWithEmailAndPassword  } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAIAgs4hYazSY1enJ2Z2Kv7oYdJqkTQjRQ",
  authDomain: "babystore-cb962.firebaseapp.com",
  projectId: "babystore-cb962",
  storageBucket: "babystore-cb962.appspot.com",
  messagingSenderId: "660016725896",
  appId: "1:660016725896:web:4c1b415380a22ccbe5043d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore (app);
export const auth = getAuth(app);


/* Para armar el arreglo desde firebase */

export const ObtenerItem = (category) => {
  const itemCollection = collection (db,"productos");
  if (category) { 
  const q = query(itemCollection, where ("categoryid", "==" ,category))
  return getDocs(q);
  }else{
  return getDocs(itemCollection);  
  }

  }
    
/* Para traer un solo documento  */

export const getItem = (id)=>{
  const d =doc (db, "productos",id);
  return getDoc(d);
}

  export const sendItem= (order)=>{
    const o = collection (db,'orders');
    addDoc(o,{...order,fecha: serverTimestamp()})
  }
  export const getCart =(id)=>{
    const c = doc(db,'orders',id)
    return getDoc(c);
  }

  export const sendBuyer = (buyer)=>{ 
    const b = collection (db,'users');
    addDoc(b)
  }

//Creacion Usuario
export const createUser = (email, password) =>  
 createUserWithEmailAndPassword( auth, email, password);
  
export const signInUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signOutUser =() =>
  signOut(auth); 