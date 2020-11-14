import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from "../firebase/firebase"
 class UserDropdowm extends Component {
    
    render() {
    
      return (
        <>

<img style={{borderRadius:"20px",width:"30px"}} src={this.props.userData.userPhoto} alt=""/>
<button style={{border:"2px solid rgb(0,47,52)",fontSize:"13px",width:"63px",color:"rgb(0,47,52)",fontWeight:"bold",textAlign:"center",borderRadius:"10px",alignItems:"center"}}onClick={()=>firebase.auth().signOut()}>SignOut</button>

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
