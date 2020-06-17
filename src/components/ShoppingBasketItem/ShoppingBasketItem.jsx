import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ShoppingBasketItem = (props) => {

    const numberOfItems = useSelector(state => state.shop.counts[props.name])

    return (
        <div className="shopping_basket_item">

            <FontAwesomeIcon
                onClick={props.remove}
                icon={faMinusCircle}
                className="remove_item" size="lg" />
            <div className="items_count">
                <FontAwesomeIcon
                onClick={props.increase}
                    className="remove_item"
                    icon={faSortUp} size="lg" />
                <p>{numberOfItems} x </p>
                {numberOfItems > 1 ? 
                <FontAwesomeIcon
                    onClick={props.descrease}
                    className="remove_item"
                    icon={faSortDown}
                    size="lg" />
                :
                null}
                
            </div>
            <img src={props.src} />
            <div className="item_details">

                <p className="name">{props.name}</p>
                
                <p><b>{numberOfItems > 1 ?
                <Fragment> {numberOfItems} x {props.price}  &#163;  <br/></Fragment> : null}
               
               Total: {props.price * numberOfItems} &#163;  </b></p>
            </div>
        </div>
    )
}

export default ShoppingBasketItem;