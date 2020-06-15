import React, { Fragment } from "react";
import ShopItem from "../components/ShopItem/ShopItem";
import apparel from "../apparel.json";
import home from "../home.json";
import wildGifts from "../wildGifts.json";
import useScrollPosition from "../CustomHooks/useScrollPosition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {

    const scrollPosition = useScrollPosition();
    let position;

    if (scrollPosition < 10) {
        position = "shopping-top";
    }
    else {
        position = "shopping-scrolling";
    }
    return (
        <Fragment>
            <FontAwesomeIcon className={"shopping-bag " + position} icon={faShoppingBasket} size="3x"></FontAwesomeIcon>
            <div className="shop_page">
                <h2>Apparel</h2>
                <div className="apparel">

                    {apparel.map((el, i) => {
                        return (
                            <ShopItem 
                            key={i}
                            src={el.src} 
                            price={el.price} 
                            name={el.name}
                            description={el.description} />
                        )
                    })}
                </div>
                <h2>Home &amp; Living</h2>
                <div className="home-living">
                    {home.map((el, i) => {
                        return (
                            <ShopItem 
                            key={i}
                             src={el.src} 
                             price={el.price} 
                             name={el.name}
                             description={el.description} />
                        )
                    })}
                </div>
                <h2>Gifts for the Wild</h2>
                <div className="gift_for_wild">
                    {wildGifts.map((el, i) => {
                        return (
                            <ShopItem 
                            key={i} 
                            src={el.src} 
                            price={el.price} 
                            name={el.name}
                            description={el.description} />
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Shop;