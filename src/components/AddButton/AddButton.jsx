import React from "react";

const AddButton = (props) => {
    return(
        <button onClick={props.click}>
            Add to Basket
        </button>
    );
}

export default AddButton;