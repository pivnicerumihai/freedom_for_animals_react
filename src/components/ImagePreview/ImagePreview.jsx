import React, { useState } from "react";
import animals from "../../animalsImg.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons"

const ImagePreview = (props) => {

    const [index, setIndex] = useState(props.index);

    return (
        <div className="img_preview" >
            <div>
                <img src={animals[index].src} />
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    size="lg"
                    className="preview_arrow left"
                    onClick={() => {
                        if (index === 0) {
                            setIndex(animals.length - 1)
                        }
                        else {
                            setIndex(index - 1)
                        }
                    }}
                />
                <div className="close_btn" onClick={props.close}>
                    <FontAwesomeIcon icon={faTimes} size="2x" > </FontAwesomeIcon>
                    <p>Close</p>
                </div>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    size="lg"
                    className="preview_arrow right"
                    onClick={() => {
                        if (index === animals.length - 1) {
                            setIndex(0)
                        }
                        else {
                            setIndex(index + 1);
                        }

                    }
                }
                  ></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default ImagePreview;