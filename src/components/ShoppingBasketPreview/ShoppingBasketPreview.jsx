import React from "react";
import ShoppingBasketItem from "../ShoppingBasketItem/ShoppingBasketItem";
import { useSelector,useDispatch } from "react-redux";
import {removeItemFromBasket,addItemToBasket,descreaseCount} from "../../redux/actions/Shop";

const ShoppingBasketPreview = (props) => {
   
    const dispatch = useDispatch();
    const basket = useSelector(state => state.shop.items);
    const total = useSelector(state=> state.shop.totalPrice);

    return(
        <div className={"shopping_basket_preview " + props.position}>
            <h3>Shopping Basket</h3>
          
            {basket.map((el,i)=>{
     
                return <ShoppingBasketItem 
                key={i} 
                name={el.name} 
                price={el.price} 
                src={el.src}
                remove={()=>dispatch(removeItemFromBasket(el))} 
                increase={()=>dispatch(addItemToBasket(el))}
                descrease={()=>dispatch(descreaseCount(el))}
                />
  })}
           
            <div className="total">
                <button>Checkout</button>
                <p>Total: {total} &#163;</p></div>
          
        </div>
    )
}

export default ShoppingBasketPreview;