import "../styles/gallery-styles/btm-gallery.scss";
import { motion } from "framer-motion";

export default function BtmGallery({ galleryItems }) {
    const transition = { delay: 1.2, duration: .4, ease: [.6, .01, -.05, .9] };

    const galleryVariant = {
    initial: {
        y: 40,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    }

}

    return (
        <>
            <motion.div className="btm-gallery-wrapper">
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

            </motion.div>
        </>
    )
}
