// import React from 'react'
import IMAGE1 from "../images/image.png"
import IMAGE2 from "../images/images.png"
import IMAGE3 from "../images/images.jpg"
import IMAGE4 from "../images/log.png"
import "../style/CAROUSEL.css"

import React, { Component } from 'react'
var indexValue = 1


export default class Carousel extends Component {

btm_slide=(e)=>{
                     this.showImg(indexValue = e);
                    }
side_slide=(e)=>{this.showImg(indexValue += e);}
showImg =(e)=>{
            var i;
            const img = document.querySelectorAll('img')
            const sliders = document.querySelectorAll('.btm-sliders span');
            console.log(sliders)
            if(e > img.length){
                indexValue=1
            }
            if(e > 1){
                indexValue=img.length
            }
            for(i=0; i < img.length; i++){
                img[i].style.display = 'none';
            }
            for(i=0; i < sliders.length; i++){
                sliders[i].style.background = 'rgba(255, 255, 255, 0.1)';
            }
            img[indexValue-1].style.display = 'block';
            sliders[indexValue-1].style.display = 'white';
                     
             
                 }
    render() {
                
        return (
            <>
        <div className="container">
        <div className="content">
            <div className="images">
                <img src={IMAGE1} alt="pic1"/>
                <img src={IMAGE2} alt="pic2"/>
                <img src={IMAGE3} alt="pic3"/>
                <img src={IMAGE4} alt="pic4"/>
            </div>
            <div onClick={()=>this.side_slide(-1)} className="slide left">
                <span className="fas fa-angle-left"></span>
            </div>
            <div onClick={()=>this.side_slide(1)} className="slide right">
                <span className="fas fa-angle-right"></span>
            </div>
            <div className="btm-sliders">
              <span onClick={()=>this.btm_slide(1)}></span>
              <span onClick={()=>this.btm_slide(2)}></span>
              <span onClick={()=>this.btm_slide(3)}></span>
              <span onClick={()=>this.btm_slide(4)}></span>
            </div>
        </div>
        </div>
        <script>
            
          
        </script>
        </>
        )
    }
}



