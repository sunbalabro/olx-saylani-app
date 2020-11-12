import React, { Component } from 'react'
import ilog from "../images/log.png"
import { Link } from "react-router-dom"
// import "../style/nav.css"
import Veh from "../images/vehicle.png"
import Sal from "../images/sal.png"
import Ren from "../images/ren.png"
import Bik from "../images/bik.png"
import Mi from "../images/mi.png"
import El from "../images/el.png"
import Bus from "../images/bus.png"
import Ser from "../images/ser.png"
import Jo from "../images/jo.png"
import Ani from "../images/ani.png"
import Fur from "../images/fur.png"
import Clo from "../images/clo.png"
import Spo from "../images/spo.png"
import Kid from "../images/kid.png"
// import "react-bootstrap "
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
// import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import 'bootstrap/dist/css/bootstrap.min.css';
export default class AddPost extends Component {


    render() {
        return (
            <>
                <div className="AddPostPage">
                    <div style={{ backgroundColor: "rgb(247, 248, 248)", height: "60px", display: "flex" }} className="header">
                        <Link to="/">
                            <svg style={{ fontSize: "28px", color: "rgb(0,47,52)", marginLeft: "20px" }} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </Link>

                        <img src={ilog} style={{ width: "120px" }} alt="log" />
                    </div>
                    <h3 style={{ color: "rgb(0,47,52)", paddingBottom: "13px", paddingTop: "10px", fontWeight: "bold",fontSize:"23px", textAlign: "center" }}>POST YOUR AD</h3>
                    <div style={{ border: "1px solid rgb(183,194,198)", padding: "1px", paddingBottom: "20px", width: "850px" }} className="container">
                        <div style={{ padding: "20px" }}>
                            <h4 style={{ fontWeight: "bold", color: "rgb(0,47,52)" }}>CHOOSE A CATAGORY</h4>
                        </div>
                        <div style={{ border: "1px solid rgb(183,194,198)", width: "430px" }}>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                                <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                    <div style={{ padding: "8px", alignItems: "center" }}>
                                       <img src={Mi} alt=""/>
                                    </div>
                                    <div style={{ width: "420px", alignItems: "center" }}>
                                        <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Mobiles</h4>
                                    </div>



                                </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center",cursor:"pointer",padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                   <img src={Veh} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Vehicles</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                  <img src={Sal} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Property for Sale</h4>
                                </div>
                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                   <img src={Ren} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Property for Rent</h4>
                                </div>

                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                    <img src={El} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Electronics & Home Appliances</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                    <img src={Bik} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Bikes</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                    <img src={Bus} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Business,Industrial & Agriculture</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                    <img src={Ser} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Services</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                   <img src={Jo} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Jobs</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                    <img src={Ani} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Animals</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                   <img src={Fur} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Furniture & Home Decor</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                   <img src={Clo} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Fashion & beauty</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                   <img src={Spo} alt=""/>
                                </div>
                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Books,Sports & Hobbies</h4>
                                </div>



                            </div>
                            </Link>
                            <Link to="/AddInfo" style={{ textDecoration: "none", color: "rgb(0,0,0)" }}>
                            <div style={{ alignItems: "center", padding: "20px", height: "38px", display: "flex", width: "430px", border: "1px solid rgb(183,194,198)" }}>
                                <div style={{ padding: "8px", alignItems: "center" }}>
                                    <img src={Kid} alt=""/>
                                </div>

                                <div style={{ width: "420px", alignItems: "center" }}>
                                    <h4 className="s17" style={{ color: "rgb(0,47,52)" }}>Kids</h4>
                                </div>



                            </div>
                            </Link>

                        </div>


                    </div>
                    <br />










                    <br />
      
                    <br />
                    <div style={{ backgroundColor: "rgb(0,47,52)", padding: "12px", display: "flex" }} className="footer">
                        <div style={{ width: "200px", textAlign: "center" }}>
                            <h5 style={{ color: "white" }}>Sitemap</h5>
                        </div>

                        <div style={{ marginLeft: "800px", display: "flex" }}>
                            <h6 style={{ color: "white", fontSize: "10.6px", fontWeight: "bold" }}>Free Classifieds in Pakistan</h6>
                            <h6 style={{}}>0</h6>
                            <h6 style={{ color: "white", fontSize: "10.6px" }}>. </h6>
                            <h6 style={{}}>0</h6>
                            <h6 style={{ color: "white", fontSize: "10.6px" }}>©</h6>
                            <h6 style={{}}>0</h6>
                            <h6 style={{ color: "white", fontSize: "10.6px" }}>2006-2020 OLX</h6>
                        </div>
                    </div>
                </div>

            </>

        )
    }
}
