import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../props.css'
import ModalSignin from "../component/ModalSignin"
import Cara from "./carousel"
import  UserDropdown from "../component/userDropdown.js"

import Ima from '../images/sale.png'
import IMA from '../images/adv2.png'
import { connect } from 'react-redux'

function Header(props) {
const nav =[
    {ID:1, label:"Mobile Phones "},
    {ID:2, label:" Cars "},
    {ID:3, label:" Motorcycles "},
    {ID:4, label:"Houses "},
    {ID:5, label:"TV-Video-Audio "},
    {ID:6, label:"Tablets "},
    {ID:7, label:"Land & Plots "},
]

console.log(props)
// if(props == props){
//   return
// }
    return (
        <>
        <div className="header fixed flex aic ">
           <div className="logo">
            <img src={require('../images/Untitled.png')}   alt='logo-pic' />
            </div>
            <div className='location rel flex aic'>
            <div><i  className="fa fa-search ico s24" aria-hidden="true"></i></div>
            <div>
                <input className='label s15 font' placeholder='Your Location' type='text' value="Pakistan"/>

             <button style={{height:"45px",width:"30px",background:"#fff" , border:"1px solid black"}} >   <i className="fa fa-angle-down arrow s26" aria-hidden="true"></i></button></div>
            </div>
            <div  className='search flex '>
                <input type='text' style={{flex:"1"}}  placeholder='Find MobilePhone, Cars ' classNmae='s15 font query'/>
                <button className=" go  cfff" style={{}} >   <i className="fa fa-search  s24" aria-hidden="true"></i></button>
            </div>
            <div className='action flex aic'>
         {
           Object.keys(props.userData).length == 0 ? (
<a href="#myGallery"  style={{textDecoration:"none"}} to='/accounts/signin' data-toggle="modal" data-target="#myModal" className='color fontb s18 sign noul'>Signin</a>
           
           ):(
<div className="user">
           <UserDropdown />
           </div>
           )
         }
           
           
           
           
           
            <Link to="/AddPost" style={{textDecoration:"none"}}>
                <button className='sell aic'>
                <i className="fa fa-plus pl aic s24" aria-hidden="true"></i>
                <h2 className=' font s20' >Sell </h2>
                </button></Link>
            </div>
        </div>
        <div className="hnav fixed flex  aic">
            <div className="dropdown">
           <button  style={{ border:"1px solid white",backgroundColor:"#ffff"}}className="view-cates flex aic color">
           <h2  className=' font s18'>All Catagories</h2>
           <i className="fa fa-angle-down arrow s26" aria-hidden="true"></i>
           
           </button>
           <div className="dropdown-content">   
              <div className="row">
                <div className="column" style={{height:"170px"}}>
                  <h3>Mobiles</h3>
                  <a href="/">Tablets</a>
                  <a href="/">Accessories</a>
                  <a href="/">Mobile Phones</a><br/>
                  <h3>Vehicles</h3>
                  <a href="/">Cars</a>
                  <a href="/">Cars on stallment</a>
                  <a href="/">Cars Accessories</a>
                  <a href="/">Spare Parts</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <br/>
                  <h3>3</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>4</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                </div>
                <div className="column">
                  <h3>Electronics & Home Appliances</h3>
                  <a href="/">Computer & Accessories</a>
                  <a href="/">TV-Audio-Video</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Games & Entertainment</a>
                  <a href="/">Other Home Appliances</a>
                  <a href="/">hgjhgj</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>2</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>3</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>4</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                
                </div>
                <div className="column">
                  <h3>Category 3</h3>
                  <a href="/">Link 1</a>
                  <a href="/">Link 2</a>
                  <a href="/">Link 3</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>2</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>3</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                </div>
                <div className="column">
                  <h3>Category 4</h3>
                  <a href="/">Link 1</a>
                  <a href="/">Link 2</a>
                  <a href="/">Link 3</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>2</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a><br/>
                  <h3>3</h3>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                  <a href="/">Cameras & Accessories</a>
                </div>
                
              </div>
            </div>
                        
    </div>

         {
             nav.map(items=>{
                 return(
                 <Link to={'/browser/' + items.ID} className='noul bl anchor color s18 font' >{items.label}</Link>
                 )
             })
         }
        </div>
        
          <ModalSignin/>
          
            <img src={Ima} style={{marginTop:"101px",width:"100%" ,display:"flex"}}  alt="sale"/>
         <a href="https://www.vivo.com/pk/activity/v20series" target="_blank"> <img src={IMA} alt="adv2"/></a>
        
          <div style={{marginTop:"30px" ,marginLeft:"100px",alignItems:"center", backgroundColor:"rgb(235,238,239)", width:"1000px", height:'300px'}}><Cara /></div>
            
          
          
        </>
    )
}

const mapStateToProps = (state) =>{
  return {
    userData: state.AuthReducer.userData
  }
}

export default connect(mapStateToProps)(Header)