import React from "react";
import AddButton from "../AddButton/AddButton";

const ShopItemPreview = props =>{
    return(
        <div className="shop_item_preview_container">
            <img src={props.src}/>
      
            <div className="shop_item_preview_details">
                <h2>{props.name}</h2>
                <h3>{props.price} &#163;</h3>
                <p>{props.description} </p>
                
                <AddButton/>
            </div>
        </div>
    )
}

export default ShopItemPreview;