import React, { useState } from "react"
import background from "../img/Background.png";
import bulldog from "../img/bulldog.png";
import lion from "../img/lion.png";
import animals from "../animalsImg.json";
import donate from "../img/donate.jpg";
import fundraise from "../img/fundraise.jpg";
import shopping from "../img/shopping.jpg";
import ImageSlideShow from "../components/ImageSlideShow/ImageSlideShow";
import ImagePreview from "../components/ImagePreview/ImagePreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebookSquare, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

const FirstPage = () => {
    const [firstImageIndex, setFirstImageIndex] = useState(0);
    const [lastImageIndex, setLastImageIndex] = useState(4);
    const [previewImage, setPreviewImage] = useState(null);
    const history = useHistory();
    return (
        <div className="first_pg_container">
            <div className="top_container">

                <img style={{ width: "20%" }} src={background}></img>
                <div className="right_container">
                    <h1>Our Vision</h1>
                    <h3>Let's start living in a world where animals live free from cruelty and suffering</h3>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper viverra nam libero justo. Arcu non odio euismod lacinia.Pulvinar mattis nunc sed blandit libero volutpat sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. </p>
                    <div className="slideshow_container">
                        <FontAwesomeIcon
                            onClick={() => {
                                if (firstImageIndex === 0) {
                                    setFirstImageIndex(animals.length - 4);
                                    setLastImageIndex(animals.length);
                                }
                                else {
                                    setLastImageIndex(lastImageIndex - 1)
                                    setFirstImageIndex(firstImageIndex - 1)
                                }
                            }}
                            className="arrow left" icon={faArrowLeft} size="lg" />
                        {animals.map((el, i) => {
                            if (lastImageIndex > i && firstImageIndex <= i) {
                                return <ImageSlideShow click={() => setPreviewImage(i)} key={i} src={el.src} />
                            }
                        })}
                        <FontAwesomeIcon onClick={() => {
                            if (lastImageIndex === animals.length) {
                                setLastImageIndex(4);
                                setFirstImageIndex(0);
                            }
                            else {
                                setLastImageIndex(lastImageIndex + 1)
                                setFirstImageIndex(firstImageIndex + 1)
                            }
                        }} className="arrow right" icon={faArrowRight} size="lg" />
                    </div>
                </div>
            </div>
            <div className="middle_container">

                <div className="left_container">
                    <h1>Our Beliefs</h1>
                    <h3>We move the world to protect animals</h3>
                    <div className="subtitle">
                        <p><b>Why ?</b>
                            <br /> Because animals have a right to live free from pain.
                        <br />
                        </p>
                        <p>
                            <b>How ?</b>
                            <br />By tackling cruelty and suffering worldwide.</p>
                    </div>
                    <p>Lacinia at quis risus sed vulputate odio. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Libero enim sed faucibus turpis in eu mi bibendum. Tristique risus nec feugiat in fermentum posuere. Et egestas quis ipsum suspendisse ultrices.
                            </p>
                    <p>Enim nec dui nunc mattis enim ut tellus elementum. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id. Scelerisque eleifend donec pretium vulputate. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Aenean pharetra magna ac placerat.
                        </p>
                    <div className="social">
                        <h2>
                            Tell The World:
                            </h2>
                        <div className="icons">
                            <FontAwesomeIcon size="3x" icon={faFacebookSquare} />
                            <FontAwesomeIcon size="3x" icon={faTwitter} />
                            <FontAwesomeIcon size="3x" icon={faLinkedin} />
                            <FontAwesomeIcon size="3x" icon={faWhatsapp} />
                            <FontAwesomeIcon size="3x" icon={faEnvelope} />
                        </div>
                    </div>
                </div>
                <img src={bulldog}></img>
            </div>
            <div className="middle_container">
                <img src={lion}></img>
                <div className="right_container">
                    <h1>Get Involved</h1>
                    <h3>Every minute of every day, around the world, millions of animals are suffering. They urgently need our help.</h3>
                    <br />
                    <h4>World Animal Protection Needs You</h4>
                    <p className="subtitle">You could help protect animals today by donating – either by setting up a regular gift or making a one-off donation. You could Adopt a Bear or run and fundraising event or even a marathon for us! You can also take action to support our campaigns.</p>
                    <div className="involve_options">

                        <div className="option" style={{ backgroundImage: `url(${donate})` }}>
                            <p className="option_name">Donate</p>


                        </div>
                        <div className="option" style={{ backgroundImage: `url(${fundraise})` }}>
                            <p className="option_name">Fundraise</p>
                        </div>
                        <div className="option" style={{ backgroundImage: `url(${shopping})` }}>
                            <p className="option_name"
                            onClick={()=>history.push("/shop")}>Online Shoping</p>
                        </div>
                    </div>
                </div>
            </div>
            {previewImage ? <ImagePreview close={() => setPreviewImage(null)} index={previewImage} /> : null}
        </div>
    )
}

export default FirstPage;