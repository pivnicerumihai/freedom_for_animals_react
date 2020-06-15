import React, { useState,Fragment } from "react";
import ShopItemPreview from "../ShopItemPreview/ShopItemPreview";
import AddButton from "../AddButton/AddButton";

const ShopItem = (props) => {

    const { src, price, name, description } = props;
    const [isHovering,setIsHovering] = useState(false);
    const [preview, setPreview] = useState(false);

    return (
        <Fragment>
        <div className="shop_item" 
        onMouseEnter = { ()=> setIsHovering(true)}
        onMouseLeave = { () => setIsHovering(false)}
        onClick={ ()=> setPreview(true)}
        >
            <img src={src} alt={name}></img>
            <AddButton />
            <h3>{price} &#163;</h3>
            {isHovering ? <p className="shop_item_name">{name}</p> : null }
        </div>
        {preview ? <ShopItemPreview src={src} price={price} name={name} description={description}/> : null }
        </Fragment>
    )
}

export default ShopItem;