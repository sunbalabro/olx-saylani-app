import React, { Component } from 'react'
import ilog from "../images/log.png"
import { Link } from "react-router-dom"
import "../style/nav.css"
import Sunb from "../images/sunb.png"
export default class AddInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: "Rs | "
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ price: e.target.value })
    }
    render() {
        return (
            <>
                <div className="AddInfopage">
                    <div style={{ backgroundColor: "rgb(247, 248, 248)", height: "60px", display: "flex" }} className="header">
                        <Link to="/AddPost">
                            <svg style={{ fontSize: "28px", color: "rgb(0,47,52)", marginLeft: "20px" }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </Link>

                        <img src={ilog} style={{ width: "120px" }} alt="log" />
                    </div>
                    <h3 style={{ color: "rgb(0,47,52)", paddingBottom: "13px", paddingTop: "10px", fontWeight: "bold", textAlign: "center" }}>POST YOUR AD</h3>
                    <div style={{ padding: "10px", border: "1px solid rgb(204,213,214)", position: "", width: "700px", margin: "0 auto" }}>
                        <h4 style={{ color: "rgb(0,47,52)", fontSize: "17px", marginLeft: "10px", fontWeight: "bold", padding: "10px" }}>SELECTED CATEGORY</h4>
                        <br /><br />
                        <h6>Mobiles/Mobile Phones</h6>
                    </div>
                    <div style={{ padding: "10px", borderLeft: "1px solid rgb(204,213,214)", borderRight: "1px solid rgb(204,213,214)", width: "700px", margin: "0 auto" }}>
                        <h4 style={{ color: "rgb(0,47,52)", fontSize: "17px", marginLeft: "10px", fontWeight: "bold", padding: "10px" }}>INCLUDE  SOME DETAILS</h4>

                        <h5 style={{ color: "rgb(0,47,52)", marginLeft: "18px" }}>Make *</h5>
                        <input type="text" maxLength="10" style={{ width: "400px", marginLeft: "17px", padding: "15px", border: "1px solid rgb(92,122,125)", borderRadius: "5px" }} />
                        <div className="condition" style={{ marginTop: "30px" }}>
                            <h5 style={{ marginLeft: "18px", color: "rgb(0,47,52)" }}>Condition *</h5>
                            <button style={{ padding: "5px", width: "60px", fontSize: "13px", marginLeft: "17px", borderRadius: "3px" }}>New</button>
                            <button style={{ padding: "5px", width: "60px", fontSize: "13px", marginLeft: "6px", borderRadius: "3px" }}>Used</button>
                        </div>
                        <div style={{ marginTop: "35px" }}>
                            <h5 style={{ marginLeft: "18px", color: "rgb(0,47,52)" }}>Ad title *</h5>
                            <input type="text" maxLength="70" style={{ width: "400px", marginLeft: "17px", padding: "15px", border: "1px solid rgb(92,122,125)", borderRadius: "3px" }} />
                            <h6 style={{ marginLeft: "18px", color: "rgb(0,102,102)" }}>Mention the key feature of your item (e.g. brand, model, age, type)</h6>
                        </div>
                        <div style={{ marginTop: "35px" }}>
                            <h5 style={{ marginLeft: "18px", color: "rgb(0,47,52)" }}>Description *</h5>
                            <input type="text" maxLength="4096" style={{ width: "400px", marginLeft: "17px", padding: "35px", border: "1px solid rgb(92,122,125)", borderRadius: "3px" }} />
                            <h6 style={{ marginLeft: "18px", color: "rgb(0,102,102)", marginBottom: "27px" }}>Include condition, features and reason for selling</h6>
                        </div>
                    </div>
                    <div style={{ padding: "10px", borderTop: "1px solid rgb(204,213,214)", borderLeft: "1px solid rgb(204,213,214)", borderRight: "1px solid rgb(204,213,214)", width: "700px", margin: "0 auto" }}>
                        <h4 style={{ color: "rgb(0,47,52)", fontSize: "17px", marginLeft: "10px", fontWeight: "bold", padding: "10px" }}>SET A PRICE</h4>
                        <input type="text" value={this.state.price} onChange={this.handleChange} style={{ marginBottom: "10px", width: "400px", marginLeft: "17px", padding: "12px", fontSize: "14px", border: "1px solid rgb(92,122,125)", borderRadius: "3px" }} />

                    </div>
                    <div style={{ margin: "0 auto", padding: "12px", borderRight: "1px solid rgb(204,213,214)", borderLeft: "1px solid rgb(204,213,214)", borderTop: "1px solid rgb(204,213,214)", width: "700px" }}>
                        <h3 style={{ color: "rgb(0,47,52)", marginLeft: "10px", fontWeight: "bold", padding: "10px" }}>UPLOAD <span style={{ margin: "2px" }}> UP </span> <span style={{ margin: "1px" }}> TO </span> <span style={{ margin: "1px" }}> 12 </span> <span style={{ margin: "1px" }}> PHOTOS</span></h3>

                        <div style={{ display: "flex", marginLeft: "18px" }}>
                            <div style={{ border: "1px solid rgb(204,213,214)", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginLeft: "18px", marginTop: "10px" }}>
                            <div style={{ border: "1px solid rgb(204,213,214)", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginLeft: "18px", marginTop: "10px", marginBottom: "18px" }}>
                            <div style={{ border: "1px solid rgb(204,213,214)", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                            <div style={{ border: "1px solid rgb(204,213,214)", marginLeft: "7px", width: "100px", textAlign: "center", padding: "18px" }}>
                                <i style={{ fontSize: "23px",color:"rgb(204,213,214)" }} className="fa fa-camera"></i>
                                <h5 style={{ color: "rgb(0,47,52)" }}>Add Photo</h5>
                            </div>
                        </div>
                        <h6 style={{ color: "rgb(255,100,79)", fontSize: "12px", marginLeft: "19px", marginBottom: "20px" }}>This field is mandatory</h6>
                    </div>
                    <div style={{margin:"0 auto",borderLeft:"1px solid rgb(204,213,214)",padding:"13px",borderRight:"1px solid rgb(204,213,214)",borderTop:"1px solid rgb(204,213,214)",width:"700px"}}>
                        <h4 style={{color:"rgb(0,47,52)",marginLeft:"18px",fontWeight:"bold",fontSize:"19px",marginTop:"10px"}}>CONFIRM YOUR LOCATION</h4>
                    <button style={{color:"rgb(0,47,52)",fontWeight:"bold",borderBottom:"4px solid rgb(0,47,52)",borderRight:"1px solid white",borderTop:"1px solid white",borderLeft:"1px solid white",width:"216px",fontSize:"14px",padding:"7px",marginLeft:"18px",backgroundColor:"#fff"}}>LIST</button>
                    <button style={{color:"rgb(0,47,52)",borderBottom:"1px solid rgb(204,213,214)",width:"200px",borderTop:"1px solid white",borderRight:"1px solid white",borderLeft:"1px solid white",backgroundColor:"#fff",padding:"7px",fontSize:"14px"}}>CURRENT LOCATION</button>
                    <h4 style={{color:"rgb(0,47,52)",marginTop:"13px",marginLeft:"18px"}}>State *</h4>
                    <select style={{ fontSize:"15px",marginBottom:"18px",width:"412px",padding:"10px",marginLeft:"18px"}} name="state" id="states">
                      <option value=""> </option>
                      <option value="Azad Kashmir">Azad Kashmir</option>
                      <option value="Balochistan">Balochistan</option>
                      <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                      <option value="Khyber Pakhtonkhwa">Khyber Pakhtonkhwa</option>
                      <option value="North Areas">North Areas</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Sindh">Sindh</option>
                      </select>
                      <h6 style={{ marginBottom:"20px",color: "rgb(255,100,79)", fontSize: "12px", marginLeft: "19px", marginBottom: "20px" }}>This field is mandatory</h6>
                    </div>
                    <div style={{borderRight:"1px solid rgb(204,213,214)",borderLeft:"1px solid rgb(204,213,214)",width:"700px",padding:"20px",margin:"0 auto",borderTop:"1px solid rgb(204,213,214)"}}>
                        <h4 style={{marginLeft:"18px",fontSize:"20px",color:"rgb(0,47,52)",fontWeight:"bold"}}>REVIEW YOUR DETAILS</h4>
                    <div style={{display:"flex",marginLeft:"13px"}}>
                        <img src={Sunb} alt=""/>
                        <div style={{marginTop:"12px"}}>
                            <h5>Name</h5>
                            <input type="text" maxLength="30" style={{fontSize:"15px",width:"300px",padding:"9px"}} name="username" id="username" placeholder="sunbal"/>
                        </div>
                    </div>
                    <h4 style={{color:"rgb(0,47,52)",fontWeight:"bold",marginLeft:"20px",fontSize:"17px"}}>Let's verify your account</h4>
                   <br/>
                 <h5 style={{width:"370px",marginLeft:"18px",fontSize:"14px",color:"rgb(0,47,52)"}}>We will send you a confirmation code by sms on the next step .</h5>
                    <br/>
                    <h4 style={{color:"rgb(0,47,52)",marginLeft:"18px"}}>Mobile Phone Numbers *</h4>
                   <input type="text" value="+92 |" style={{ fontSize:"15px",border: "1px solid rgb(92,122,125)",padding:"12px",width:"370px",marginLeft:"18px"}} name="number" id="phoneNumber"/>
                   
                   <div>
        <div className="custom-control custom-switch">
          
          <label  className="custom-control-label" htmlFor="customSwitch1">Toggle this switch element</label>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" />
        </div>
        
      </div>
                    </div>


                </div>
            </>
        )
    }
}
