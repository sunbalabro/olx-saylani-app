import './App.css'
import React from 'react'
import { BrowserRouter, Route, Links, Router } from "react-router-dom";
import './props.css'
import Home from './Pages/Home'
import AddPost from "./Pages/AddPost"
import AddInfo from "./Pages/AddInfo"
import firebase from "./firebase/firebase"
import { connect } from 'react-redux';
import { addUser } from './store/action/AuthAction';


class App extends React.Component {

  getuserData = (user) => {
    var userData;
    console.log(user)
    firebase.database().ref(`/user/${user.uid}`).once("value", (snapshot) => {
      userData = snapshot.val();
      this.props.addUser(userData)
    })
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getuserData(user)
      } else {
          this.props.addUser({})
      }
    })
  }
  render() {

    console.log(this.props)
    return (


      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/AddPost" component={AddPost} />
        <Route path="/AddInfo" component={AddInfo} />
      </BrowserRouter>

    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (e) => dispatch(addUser(e))
  }
}
export default connect(null, mapDispatchToProps)(App)