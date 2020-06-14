import React from "react";

const ImageSlideShow = (props) =>{
    return (
        <div onClick={props.click} className="image_slideshow">
           
            <img src={props.src}/>
      
        </div>
    )
}

export default ImageSlideShow;