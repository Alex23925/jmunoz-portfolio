import "../styles/gallery-styles/btm-gallery.scss";
import { motion } from "framer-motion";

export default function BtmGallery({ galleryItems }) {
    return (
        <>
            <div className="btm-gallery-wrapper">
                <h1 className="gallery-title gallery-title--styles">
                    Gallery
                </h1>
                <motion.div drag="x" className="row1 btm-gallery-row">

                    {

                        galleryItems.map((item, index) => (
                            <span>
                                <img id={`pic-${index}`} className="btm-gallery-pic" src={item.data.shoot_image.url} alt={`image ${index}`} />
                            </span>
                        ))
                    }
                </motion.div>
            </div>
        </>
    )
}