import "../styles/gallery-styles/btm-gallery.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Prismic from "prismic-javascript";

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

    const apiEndpoint = 'https://jmunoz-portfolio.cdn.prismic.io/api/v2';
    const accessToken = '';
    const Client = Prismic.client(apiEndpoint, { accessToken });
    const [pics, setPicsData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at('document.type', 'gallery_item')
            )
            if (response) {
                setPicsData(response.results)
            }
        }
        fetchData()
    }, [])


    return !pics ?
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

                        pics.map((item, index) => (
                            <div className="btm-gallery-child">
                                <img id={`pic-${index}`} className="btm-gallery-pic" src={item.data.gallery_image.url} alt={`image ${index}`} />
                            </div>
                        ))
                    }
                </motion.div>

            </motion.div>
        </>
    )
}
