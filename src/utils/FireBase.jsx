import { initializeApp } from "firebase/app";
import {collection, getDocs , doc , getDoc , getFirestore, where, query, setDoc, addDoc, serverTimestamp} from 'firebase/firestore';
import { useState } from "react";


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

/* Para subir a Firebase */
 export const sendItem= (order)=>{
    const [idOrder,setIdOrder]=useState('');
    const o = collection (db,'orders');
    addDoc(o,{...order,fecha: serverTimestamp()})
 }
/* Formulario Dinamico */

/*   const ordersCollection= collection(db,"orders");
  addDoc(ordersCollection,order)/* . then(({id})=>setOrderId (id)) */




//Codigo Mario 
/* const onFinishShoping = () =>{
  const order = {
    buyer:{
      buyerId:userLogin.id;
      nombre:userLogin.nombre;
      appellidos:userLogin.apellidos;
      direccion:userLogin.direccion;
      telefono:userLogin.telefono;
    },
    items:cart,
    total:totalPrice()
  };
  addDoc(collection(db,"orders"),{...order,
  fecha: serverTimestamp()}).then(()=>{
    cleanCart();
    setFinShopping(true);
  });
} */


/* Para subir el carrito */
/* const updateUserProfile = (userId, userProfileData) => {
  return setDoc(doc(db, "profiles", userId), {...userProfileData, id: userId});
};  */