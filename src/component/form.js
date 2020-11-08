import React, { Component } from 'react'
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
        
        firebase.database().ref("user").push({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto:  user.photoURL   
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
        firebase.database().ref("users").child("/user/  ").push({
          userName: user.displayName,
          userEmail: user.email,
          userPhoto:  user.photoURL   
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
            <div>
               <form >
                   <input className="s18" type="text" placeholder="Enter Your email"  style={{width:"250px",borderRadius:"10px", border:"1px solid black"}}/>
                   <br/><br/>   
                   <input className="s18" type="password" placeholder="Enter Your password"style={{width:"250px",borderRadius:"10px", border:"1px solid black"}}/>
                   <br/><br/>
                   <button className="s16 btn-primary">Submit</button>
                   <br/><br/>
                   
                   <button type="button" onClick={this.facebookAuth} className="s17" style={{backgroundColor:"rgb(72,103,170)",color:"white", width:"200px",height:"40px"}} >Sign in by Facebook</button>
                   
                   
                   
                   <br/><br/>
                   <button type="button" onClick ={this.gmailAuth} className="s17" style={{width:"200px",height:"40px"}} >Sign in by <span style={{color:"rgb(61,126,241)"}} class="s20" > G</span><span class="s20"  style={{color:"rgb(211,0,1)"}}>m</span><span class="s20" style={{color:"rgb(246,183,0)"}}>a</span><span class="s20" style={{color:"rgb(61,126,241)"}}>i</span><span class="s20" style={{rgb:"44,164,77"}}>l</span> </button>
                   
                   </form> 
            </div>
            </>
        )
    }
}
