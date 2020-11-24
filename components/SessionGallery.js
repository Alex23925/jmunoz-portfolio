import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import Prismic from "prismic-javascript";
import "../styles/gallery-styles/gallery.scss";
import "../styles/gallery-styles/loading-gallery.scss";

const GalleryItem = dynamic(() => import("./SessionGalleryItem"));


export default function Gallery({sessionName}) {
    let type = " ";
    console.log(sessionName);
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

    // if title equals galleries title then show pics from session 

    const apiEndpoint = 'https://jmunoz-portfolio.cdn.prismic.io/api/v2';
    const accessToken = '';

    const Client = Prismic.client(apiEndpoint, { accessToken });
    const [galleryItems, setGalleryItemsData] = useState(null);

    const [sessionPics, setSessionPicsData] = useState(null);

    console.log(galleryItems);

    const [hidden, setHidden] = useState(" ");

    useEffect(() => {
        const fetchData = async () => {
            const response = await Client.query(
                Prismic.Predicates.at('document.type', sessionName)
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
                            console.log(index),
                            <GalleryItem
                                img={item.data.shoot_image.url}
                                title={item.data.shoot_title[0].text}
                                 />
                        ))
                    }
                </div>
            </>
        )
}
