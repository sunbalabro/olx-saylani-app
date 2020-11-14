// import React from 'react'
// import IMAGE1 from "../images/image.png"
// import IMAGE2 from "../images/images.png"
// import IMAGE3 from "../images/images.jpg"
// import IMAGE4 from "../images/log.png"
// import "../style/CAROUSEL.css"

// import React, { Component } from 'react'
// var indexValue = 1


// export default class Carousel extends Component {

// btm_slide=(e)=>{
//                      this.showImg(indexValue = e);
//                     }
// side_slide=(e)=>{this.showImg(indexValue += e);}
// showImg =(e)=>{
//             var i;
//             const img = document.querySelectorAll('img')
//             const sliders = document.querySelectorAll('.btm-sliders span');
//             console.log(sliders)
//             if(e > img.length){
//                 indexValue=1
//             }
//             if(e > 1){
//                 indexValue=img.length
//             }
//             for(i=0; i < img.length; i++){
//                 img[i].style.display = 'none';
//             }
//             for(i=0; i < sliders.length; i++){
//                 sliders[i].style.background = 'rgba(255, 255, 255, 0.1)';
//             }
//             img[indexValue-1].style.display = 'block';
//             sliders[indexValue-1].style.display = 'white';
                     
             
//                  }
//     render() {
                
//         return (
//             <>
//         <div className="container">
//         <div className="content">
//             <div className="images">
//                 <img src={IMAGE1} alt="pic1"/>
//                 <img src={IMAGE2} alt="pic2"/>
//                 <img src={IMAGE3} alt="pic3"/>
//                 <img src={IMAGE4} alt="pic4"/>
//             </div>
//             <div onClick={()=>this.side_slide(-1)} className="slide left">
//                 <span className="fas fa-angle-left"></span>
//             </div>
//             <div onClick={()=>this.side_slide(1)} className="slide right">
//                 <span className="fas fa-angle-right"></span>
//             </div>
//             <div className="btm-sliders">
//               <span onClick={()=>this.btm_slide(1)}></span>
//               <span onClick={()=>this.btm_slide(2)}></span>
//               <span onClick={()=>this.btm_slide(3)}></span>
//               <span onClick={()=>this.btm_slide(4)}></span>
//             </div>
//         </div>
//         </div>
        
//         </>
//         )
//     }
// }

import React, { Component } from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import ReactDOM from "react-dom";
import Imag1 from '../images/mob1.png'
import Imag2 from '../images/mob2.png'
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import '../style/CAROUSEL.css'

export default class Cara extends Component {
    render() {
        return (
          
            <Carousel showIndicators={false} showArrows={true}  showThumbs={false}  >
        <div style={{ height: "300px",backgroundColor:"rgb(235,238,239)", color: "#000" }}>
      <h3 style={{width:"250px",padding:"10px"}}>Based on last search</h3>
        <CardGroup  style={{display:"flex"}}>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
        <div style={{height: "300px",backgroundColor:"rgb(235,238,239)", color: "#000" }}>
        <h3 style={{width:"250px",padding:"10px"}}>Based on last search</h3>
        <CardGroup style={{display:"flex"}}>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
    <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag2} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
    <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag2} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
    <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag2} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
    <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag2} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
        <div style={{ height: "300px",backgroundColor:"rgb(235,238,239)", color: "#000" }}>
      <h3 style={{width:"250px",padding:"10px"}}>Based on last search</h3>
        <CardGroup  style={{display:"flex"}}>
        <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card style={{width:"300px",margin:"5px",border:"1px solid rgb(183,194,198)",backgroundColor:"white"}}>
   <div style={{display:"flex"}}>
    <Card.Img variant="top" src={Imag1} />
   <span className="glyphicon glyphicon-heart-empty"></span>
      </div>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
      </Carousel>
      
       
        )
    }
}

const rootElement = document.getElementById("root");                                     
ReactDOM.render(<Carousel />, rootElement);

