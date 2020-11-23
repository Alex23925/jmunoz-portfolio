import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import Prismic from "prismic-javascript";
import "../styles/gallery-styles/gallery.scss";
import "../styles/gallery-styles/loading-gallery.scss";

const GalleryItem = dynamic(() => import("./SessionGalleryItem"));


export default function Gallery() {
    const transition = {delay: .5, duration: 1.8, ease: [.5, .01, -.05, .5] };

    const loadingVariant = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "-120%",
            transition: {  ...transition },
        }
    }

    const apiEndpoint = 'https://jmunoz-portfolio.cdn.prismic.io/api/v2';
    const accessToken = '';

    const Client = Prismic.client(apiEndpoint, { accessToken });
    const [galleryItems, setGalleryItemsData] = useState(null);

    // animate variables
    const controlsHideTitle = useAnimation();
    const controlShowTitle = useAnimation();

    const [hidden, setHidden] = useState(" ");

    const imgRef = useRef();
    console.log(imgRef.current);

    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at('document.type', 'gallery_item')
            )
            if (response) {
                setGalleryItemsData(response.results)
            }
        }
        fetchData()


        const interval = setInterval(() => {
            setHidden("overflow-hid");
        }, 1600);
        return () => clearInterval(interval);
    }, [])

    return !galleryItems ?
        <div className="loading-container">
            <div className="loading-txt-container">
                <h1 className="loading-txt">98%</h1>
            </div>
        </div> :
        (
            <>
                <motion.div initial="initial" animate="animate" variants={loadingVariant} className="loading-container loading-container-copy">
                    <div className="loading-txt-container">
                        <h1 className="loading-txt">98%</h1>
                    </div>
                </motion.div>

                <div className="gallery-wrapper">
                    {
                        galleryItems.map((item, index) => (
                            <GalleryItem
                                img={item.data.gallery_image.url}
                                title={item.data.gallery_item_title[0].text}
                                category={item.data.category[0].text}
                                photoshootLink={item.data.gallery_item_title[0].text} />
                        ))
                    }
                </div>
            </>
        )
}
