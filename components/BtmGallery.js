import "../styles/gallery-styles/btm-gallery.scss";
import { motion } from "framer-motion";
import useFetchGalleryItem from "../hooks/useFetchGalleryItem";


export default function BtmGallery() {
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

    const  picsData = useFetchGalleryItem('gallery_item');

    return !picsData ?
        <div className="loading-container">
            <div className="loading-txt-container">
                <h1 className="loading-txt">JUAN MUNOZ</h1>
            </div>
        </div> : (
            <>
                <motion.div className="btm-gallery-wrapper">
                    <h1 className="gallery-title gallery-title--styles">
                        Gallery
                </h1>
                    <motion.div className="row1 btm-gallery-row">

                        {

                            picsData.map((item, index) => (
                                
                                    <a href={`https://jmunoz-portfolio.vercel.app/${item.data.category[0].text}/${item.data.gallery_item_pics_name}`} className="btm-gallery-child">
                                        <img id={`pic-${index}`} className="btm-gallery-pic" src={item.data.gallery_image.url} alt={`image ${index}`} />
                                    </a>
                                
                            ))
                        }
                    </motion.div>

                </motion.div>
            </>
        )
}
