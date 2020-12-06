import "../styles/gallery-styles/btm-gallery.scss";
import { motion } from "framer-motion";

export default function BtmGallery({ galleryItems }) {
    return (
        <>
            <div className="btm-gallery-wrapper">
                <div className="row1 btm-gallery-row">

                    <div className="btm-gallery-div marqueeone">
                        {

                            galleryItems.map((item, index) => (
                                <span>
                                    <img className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                                </span>
                            ))
                        }
                    </div>

                    <div className="btm-gallery-div marqueetwo">
                        {

                            galleryItems.map((item, index) => (
                                <span>
                                    <img className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                                </span>
                            ))
                        }
                    </div>

                    <div className="btm-gallery-div marqueethree">
                        {

                            galleryItems.map((item, index) => (
                                <span>
                                    <img className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                                </span>
                            ))
                        }
                    </div>

                </div>

                <div className="row2 btm-gallery-row">
                    <div className="btm-gallery-div marqueeone">
                        {

                            galleryItems.map((item, index) => (
                                <span>
                                    <img className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                                </span>
                            ))
                        }
                    </div>
                    <div className="btm-gallery-div marqueetwo">
                        {

                            galleryItems.map((item, index) => (
                                <span>
                                    <img className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                                </span>
                            ))
                        }
                    </div>
                    <div className="btm-gallery-div marqueethree">
                        {

                            galleryItems.map((item, index) => (
                                <span>
                                    <img className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}