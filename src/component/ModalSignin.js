import React from 'react'
import '../App.css'
import '../props.css'
import Image from '../images/image.png'
import Image2 from '../images/images.png'
import Image3 from "../images/the-road-815297__340.png"

import Form from "./form"
export default function ModalSignin() {
  return (
    <>
      <div className="">
        <ul className="list-inline">
          <li> <a href="#myGallery" data-toggle="modal" data-target="#myModal">caption</a>
          </li>




          {/*end of thumbnails*/}
        </ul>

        {/*begin modal window*/}
        <div className="modal fade" id="myModal" style={{backgroundColor:"#fffff",width:"380px",margin:"0 auto",marginTop:"100px"}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{height:"50px"}}>
                <button type="button" style={{border:"1px solid white",marginRight:"210px",color:"rgb(0,47,52)"}} className="close" data-dismiss="modal" title="Close"> 
               <span className="active" style={{color:"rgb(0,47,52)",fontSize:"35px",fontWeight:"bold"}}>X</span> 
                </button>
              </div>
              <div className="modal-body">
                {/*CAROUSEL CODE GOES HERE*/}
                {/*begin carousel*/}
               
                 <div id="myGallery" className="carousel slide" data-interval="false"style={{display:"flex",alignItems:"center",height:"200px" ,width:"355px",border:"2px solid black"}}>
                  <div className="carousel-inner" style={{ border:"1px solid black"}}>
                    <div className="item active"> <img src={Image} style={{ width: "100px", border: "1px solid black" }} alt="item0" />

                      <div className="carousel-caption" style={{border:"1px solid black",width:"30px"}}>
                        <h3>Heading 3</h3>
                        <p>Slide 0  description.</p>
                      </div>
                    </div>
                    <div className="item"> <img src={Image2} style={{ width: "135px" }} alt="item1" />
                      <div className="carousel-caption">
                        <h3>Heading 3</h3>
                        <p>Slide 1 description.</p>
                      </div>
                    </div>
                    <div className="item"> <img src={Image3} style={{ width: "124px" }} alt="item2" />
                      <div className="carousel-caption">
                        <h3>Heading 3</h3>
                        <p>Slide 2  description.</p>
                      </div>
                    </div>

                    
                    {/*end carousel-inner*/}
                   </div> 
                  {/*Begin Previous and Next buttons*/}
 <a className="left carousel-control" href="#myGallery" role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" /></a> <a className="right carousel-control" href="#myGallery" role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" /></a> 

                  {/*end carousel*/}

                 </div>  
               
                <br />
                
                <Form />
                {/*end modal-body*/}</div>
              
              {/*end modal-content*/}</div>
            {/*end modal-dialoge*/}</div>
          {/*end myModal*/}&gt;</div>
      </div>
    </>
  )
}
