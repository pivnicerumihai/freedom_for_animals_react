import React from "react";
import ShoppingBasketItem from "../components/ShoppingBasketItem/ShoppingBasketItem";
import StripeButton from "../components/StripeButton/StripeButton";
import {removeItemFromBasket,addItemToBasket,descreaseCount} from "../redux/actions/Shop";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {

    const dispatch = useDispatch();
    const basket = useSelector(state => state.shop.items);
    const total = useSelector(state => state.shop.totalPrice);

    return (
        <div className="checkout_page">
            <div className="checkout_container">
                <h2>Checkout</h2>
                <h3>Enter Payment Details Below to complete your order</h3>
                <div className="order_details">
          
                        {basket.map((el, i) => {

                            return <ShoppingBasketItem
                                key={i}
                                name={el.name}
                                price={el.price}
                                src={el.src}
                                remove={() => dispatch(removeItemFromBasket(el))}
                                increase={() => dispatch(addItemToBasket(el))}
                                descrease={() => dispatch(descreaseCount(el))}
                            />
                        })}
      
                </div>
                
            </div>
            <div className="stripe">
                    <StripeButton />
                </div>
        </div>
    )
}

export default Checkout;