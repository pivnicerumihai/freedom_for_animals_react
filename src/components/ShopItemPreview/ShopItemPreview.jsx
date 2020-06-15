import React, { Fragment } from "react";
import AddButton from "../AddButton/AddButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"

const ShopItemPreview = props => {
    return (
        <Fragment>
            <div className="shop_item_preview_container">
                <div className="shop_close_btn" onClick={props.click}>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" ></FontAwesomeIcon>
                    <p>Back to Shop</p>
                </div>
                <img src={props.src} />
                <div className="shop_item_preview_details">
                    <h2>{props.name}</h2>
                    <h3>{props.price} &#163;</h3>
                    <p className="description">{props.description} </p>
                    <AddButton />
                </div>
            </div>

        </Fragment>
    )
}

export default ShopItemPreview;