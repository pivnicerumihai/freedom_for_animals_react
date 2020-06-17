import React, { useState,Fragment } from "react";
import ShopItemPreview from "../ShopItemPreview/ShopItemPreview";
import AddButton from "../AddButton/AddButton";
import {addItemToBasket} from "../../redux/actions/Shop";
import {useDispatch, useSelector } from "react-redux";

const ShopItem = (props) => {

    const { id, src, price, name, description } = props;
    const [isHovering,setIsHovering] = useState(false);
    const [preview, setPreview] = useState(false);
    const dispatch = useDispatch();


    return (
        <Fragment>
        <div className="shop_item" 
        onMouseEnter = { ()=> setIsHovering(true)}
        onMouseLeave = { () => setIsHovering(false)}
        >
            <img  
            onClick={ ()=> setPreview(true)} 
            src={src} alt={name}></img>
            <AddButton click={()=>{
                dispatch(addItemToBasket({id:id, src:src, price:price, name:name}))
            }} />
            <h3>{price} &#163;</h3>
            {isHovering ? <p className="shop_item_name">{name}</p> : null }
        </div>
        {preview ? <ShopItemPreview click={()=>setPreview(false)} src={src} price={price} name={name} description={description}/> : null }
        </Fragment>
    )
}

export default ShopItem;