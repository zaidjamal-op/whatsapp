import React from 'react'
//import { Container, Form, Button } from 'react-bootstrap'
import firebase from './firebase'
import "./Login.css"
//import whatsapp from "../images/whatsapp--v2.png"


export default function Login({ onIdSubmit }) {

  function handleSubmit() {

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    //var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    //var token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    onIdSubmit(user.email)

    // ...
  }).catch((error) => {
    console.log(error)
  });

  
  }

  return (
   <div className="form"> 
   <span className="span__header">Welcome to Whatsapp-create</span>
      <img className="form__img" alt="logo" src="http://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=http%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fnexus2cee_Search-Thumb-150x150.png&w=150&h=150&zc=3"></img>
     <button className="form__button" 
     type="button" 
     onClick={handleSubmit}
     
     >
       Login with Google
       
       </button>

     <footer> 
       <span className="span__footer">Made with 💙 by Zaid Jamal </span>
     </footer>
   </div>
   
  )
}
