import React, { useState, Fragment } from "react";
import ShopItem from "../components/ShopItem/ShopItem";
import apparel from "../apparel.json";
import home from "../home.json";
import wildGifts from "../wildGifts.json";
import useScrollPosition from "../CustomHooks/useScrollPosition";
import ShoppingBasketPreview from "../components/ShoppingBasketPreview/ShoppingBasketPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {

    const [preview, setPreview] = useState(false);
    const scrollPosition = useScrollPosition();
    let position;
    let previewPosition;

    if (scrollPosition < 10) {
        position = "shopping-top";
        previewPosition = "preview_top";
    }
    else {
        position = "shopping-scrolling";
        previewPosition ="preview_scrolling"
    }
    return (
        <Fragment>
            {preview ? <ShoppingBasketPreview position={previewPosition}/> : null}
            <FontAwesomeIcon
                onClick={() => setPreview(!preview)}
                className={"shopping-bag " + position}
                icon={faShoppingBasket} size="3x" />
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