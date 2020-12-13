import "../styles/gallery-styles/btm-gallery.scss";
import { motion } from "framer-motion";

export default function BtmGallery({ galleryItems }) {
    return (
        <>
            <div className="btm-gallery-wrapper">
                <h1 className="gallery-title gallery-title--styles">
                    Gallery
                </h1>
                <motion.div className="row1 btm-gallery-row">

                    {

                        galleryItems.map((item, index) => (
                            <div className="btm-gallery-child">
                                <img id={`pic-${index}`} className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                            </div>
                        ))
                    }
                </motion.div>

            </div>
        </>
    )
}
