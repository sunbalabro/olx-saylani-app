import React, { Component } from 'react'
import Sf from "../images/sf.png"
import Sg from "../images/sg.png"
import "../style/form.css"
import firebase from "../firebase/firebase"
export default class form extends Component {
gmailAuth=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        // ...
        
        firebase.database().ref(`/user/${user.uid}`).set({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto:  user.photoURL   
        }).catch((err)=>{
          console.log(err)
        })
      })
      
     
      
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorMessage)
        // ...
      });
}
facebookAuth=()=>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user)
        // ...
        firebase.database().ref(`/user/${user.uid}`).set({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto:  user.photoURL   
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorMessage)
      });
}
// https://olxapp-saylani-123.firebaseapp.com/__/auth/handler
    render() {
        
        return (
            <>
            <div className="form">
               <form style={{width:"350px",textAlign:"center"}}>
                
                
                   <br/><br/>
                   
                   <button  type="button" onClick={this.facebookAuth} style={{marginBottom:"5px"}} > <img src={Sf} alt=""/>Continue with facebook</button>

                   <br/>
                   <button type="button" onClick ={this.gmailAuth}> <img src={Sg} alt=""/> Continue with gmail </button>
                   <br/><br/>
                   <h5 style={{fontSize:"12px"}}>We won`t share your personel details to anyone</h5>
                   <br/>
                   <h5 style={{fontSize:"12px"}}>If you continue you are accepting <span> <a href="/">OLX Terms and Conditions and Privacy Policy</a> </span></h5>
                   </form> 
            </div>
            </>
        )
    }
}
