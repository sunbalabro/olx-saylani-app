// import React from 'react'
import Header from '../component/Header'
import Footer from "../component/Footer"
import Cards from "../component/Cards"
// import {connect} from 'react-redux'
import firebase from "../firebase/firebase"
// import React, { Component } from 'react'
import React, { Component } from 'react'

class Home extends Component {
    componentDidMount(){

    }
    getData(){
        firebase.database().ref("/products").once("value").then((snapshot)=>{
console.log(snapshot.val())
        })
    }
    render() {
                return (
                    <div>
                <div className="home-page">
         
         <Header />
         <Cards />
        <Footer />
         {/* <div><button onClick="addTodo()">AddToso</button></div> */}
         {/* <h1>{props.mereProduct.name}</h1> */}
        </div>        
                    </div>
                )
            }
        }

export default Home;