import { setDoc, doc, getDoc } from "firebase/firestore";
import React, {useContext,useState} from "react";
import {createUser,signInUser,signOutUser, db} from '../utils/FireBase';

const UserContext=React.createContext([]);
export const useUserContext = () => useContext (UserContext);

export const UserProvider = ({children}) => {
    const [userLogin,setUserLogin] = useState (undefined);
    
    const addUser = (user) =>{
        createUser(user.Email , user.Password).then((userCredential) => {
            setDoc(doc(db, "users", userCredential.user.uid), {id: userCredential.user.uid, ...user}).then ({...user, id:userCredential.user.uid});
            console.log ('usuario logueado', user);
        })
        }
   
        const verifyUser = (user) =>{
        signInUser(user.Email, user.Password).then ((userCredential) => {
            getDoc(doc(db, "users",userCredential.user.uid)).then (u => {setUserLogin (u.data()); console.log ('se logueo',u.data().Name)})
        })
    }
    
    const OutUser = () => {
        signOutUser().then (()=> {setUserLogin (undefined); console.log ('deslogueado',userLogin ) })
    }

    return (
        <UserContext.Provider value ={{userLogin,addUser, verifyUser , OutUser}}>
            {children}    
        </UserContext.Provider>
      )
}
