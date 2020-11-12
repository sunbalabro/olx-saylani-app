import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from "../firebase/firebase"
 class UserDropdowm extends Component {
    
    render() {
    
      return (
        <>

<img style={{borderRadius:"20px",width:"33px"}} src={this.props.userData.userPhoto} alt=""/>
<button style={{width:'57px',fontSize:"13px",textAlign:"center",borderRadius:"10px"}}onClick={()=>firebase.auth().signOut()}>SignOut</button>

      </>
        )
    }
}
const mapStateToProps = (state) =>{
  return {
    userData: state.AuthReducer.userData
  }
}
export default connect(mapStateToProps)(UserDropdowm)
