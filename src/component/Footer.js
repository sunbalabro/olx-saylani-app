import React, { Component } from 'react'
import Ap from '../images/app.png'
import Gpl from "../images/gpl.png"
import Advelo from '../images/advelo.png'
import Adolx from '../images/adplx.png'
import Td from "../images/td.png"
import Face from "../images/face.png"
import Twitt from '../images/twitter.png'
import Tab from "../images/tab.png"
import Insta from "../images/insta.png"
import Aps from "../images/appst.png"
import Gps from "../images/gps.png"
export default class Footer extends Component {
    render() {
        return (
            <>
               
          <a href='https://veloconnect.store/?utm_source=google&utm_medium=banner&utm_campaign=IMC&utm_term=conversion&utm_content=display_ads&gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xaWJC80mm0AMHq4bIb3JdBZqdJIVWKrtTJ-RlYsAFZYpiPabfhKSZkaAm16EALw_wcB' target="_blank">
          <img src={Advelo} alt="ad"/>
            </a> 
            <br/> <br/> <br/> <br/> <br/>
          <div style={{display:"flex"}}>
          <img src={Adolx} alt="adolx"/>
          <div style={{backgroundColor:"rgb(246,247,247)" , width:"100%"}}>
            <img src={Td} style={{marginTop:"40px"}} alt=""/>
          <div style={{display:"flex"}}>
           <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" target="_blank"><img src={Ap} alt="ap"/></a> 
          <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_blank"><img src={Gpl} alt="gpl"/></a>  
          </div>
          </div>
          </div>
            <div className="row" style={{backgroundColor:"rgb(235,238,239)", alignItems:"center",justifyContent:"center",textAlign:"center",width:"1278px", height:"145px"}}>
                <div className="column" style={{marginLeft:"100px", height:"100px", width:"180px"}}>
                    <h5 style={{color:"rgb(0,47,52)", fontWeight:"bold"}}>POPULAR CATAGORIES</h5>
                    <div style={{marginTop:"10px", marginLeft:"4px"}}>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Cars</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Flats for rent</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Jobs</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Mobile Phones</h6></a>
                    </div>
                </div>
                <div className="column" style={{width:"180px" , height:"100px"}}>
                    <h5 style={{color:"rgb(0,47,52)", fontWeight:"bold"}}>TRENDING SEARCHES</h5>
                    <div style={{marginTop:"10px", marginLeft:"11px"}}>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Bikes</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Watches</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Books</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Dogs</h6></a>
                    </div>
                    
                </div>
                <div className="column" style={{height:"100px", width:"180px"}}>
                    <h5 style={{color:"rgb(0,47,52)", fontWeight:"bold"}}>ABOUT US</h5>
                    <div style={{marginTop:"10px", marginLeft:"40px"}}>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>About OLX Groups</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>OLX Blogs</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Contact Us</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>OLX for Businesses</h6></a>
                    </div>
                </div>
                <div className="column" style={{height:"100px", width:"180px"}}>
                    <h5  style={{color:"rgb(0,47,52)", fontWeight:"bold"}}>OLX</h5>
                    <div style={{marginTop:"10px", marginLeft:"60px"}}>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Help </h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Site map</h6></a>
                    <a href="/" style={{margin:"5px", color:"rgb(88,118,122)"}}><h6>Legal & Privacy information</h6></a>
                    
                    </div>
                </div>
                <div className="column" style={{height:"100px", width:"180px"}}>
                    <h5 style={{color:"rgb(0,47,52)", fontWeight:"bold"}}>FOLLOW US</h5>
                    <div style={{display:"flex", marginLeft:"30px"}}>
                    <button style={{backgroundColor:"rgb(235,238,239)",width:"29px", border:"1px solid rgb(235,238,239)"}}><img src={Face} alt=""/></button>
                    <button style={{backgroundColor:"rgb(235,238,239)",width:"29px", border:"1px solid rgb(235,238,239)"}}><img src={Twitt} alt=""/></button>
                    <button style={{backgroundColor:"rgb(235,238,239)",width:"29px", border:"1px solid rgb(235,238,239)"}}><img src={Tab} alt=""/></button>
                    <button style={{backgroundColor:"rgb(235,238,239)",width:"29px", border:"1px solid rgb(235,238,239)"}}><img src={Insta} alt=""/></button>
                    </div>
                    <br/>
                
                    <div style={{display:"flex", marginLeft:"36px"}}>
                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" target="_blank"><img src={Aps} alt=""/></a>
                <a href="https://apps.apple.com/app/olx-pakistan/id1119081665"><img src={Gps} alt=""/></a>
                </div>                
                </div>
            </div>
            <div style={{backgroundColor:"rgb(0,47,52)",width:"100%", padding:"17px"}}>
                <div style={{display:"flex"}}>
                    <div style={{marginLeft:"90px",display:"flex"}}>
                    <h6 style={{color:"white",fontSize:"10.6px", fontWeight:"bold"}}>Other Countries</h6>
                <h6 style={{}}>00</h6>
                <h6 style={{color:"white",fontSize:"10.6px"}}>India-South Africa-Indonesia</h6>
                    </div>
                
                    <div style={{marginLeft:"600px",display:"flex"}}>
                    <h6 style={{color:"white",fontSize:"10.6px", fontWeight:"bold"}}>Free Classifieds in Pakistan</h6>
                <h6 style={{}}>0</h6>
                <h6 style={{color:"white",fontSize:"10.6px"}}>. </h6>
                <h6 style={{}}>0</h6>
                <h6 style={{color:"white",fontSize:"10.6px"}}>©</h6>
                <h6 style={{}}>0</h6>
                <h6 style={{color:"white",fontSize:"10.6px"}}>2006-2020 OLX</h6>
                    </div>
                </div>
        
            </div>
 
            </>
        )
    }
}
