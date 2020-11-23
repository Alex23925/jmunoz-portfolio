import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import Prismic from "prismic-javascript";
import "../styles/gallery-styles/gallery.scss";
import "../styles/gallery-styles/loading-gallery.scss";

const GalleryItem = dynamic(() => import("./GalleryItem"));


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


// animated image unusued as of now
// might use later

{/* first image to be animated in
                <div className="gallery-wrapper-item">
                    <div className="gallery-item-content">
                        <motion.div
                            whileHover={{ scale: .97 }}
                            transition={{ duration: .45 }}
                            onHoverStart={() => {
                                controlsHideTitle.start({
                                    y: -50,
                                    opacity: 1,
                                    transition: { duration: .35 },
                                })

                                controlShowTitle.start({
                                    y: -25,
                                    x: 8,
                                    transition: { duration: .35 }
                                })
                            }}
                            onHoverEnd={() => {
                                controlsHideTitle.start({
                                    y: 0,
                                    opacity: 1,
                                    transition: { duration: .35 },
                                })

                                controlShowTitle.start({
                                    y: 20,
                                    transition: { duration: .35 }
                                })

                            }}
                            className={hidden}
                        >
                            <a href="#" className="img-link">
                                <motion.img
                                    ref={imgRef}
                                    whileHover={{ scale: 1.15 }}
                                    transition={{ duration: .45 }}
                                    variants={imgVariant}
                                    initial="initial"
                                    animate="animate"
                                    className="animated-intro-img"
                                    src="/bothBMW_med.jpeg"
                                    alt="Picture of the red and silver BMW"
                                />
                            </a>
                        </motion.div>
                        <div className="title-container overflow-hid">
                            <motion.h2
                                animate={controlsHideTitle}
                                className="non-hover-title"
                            >
                                <span className="img-title--styles">BMW - </span>
                                <span className="img-category--styles">Car</span>
                            </motion.h2>
                            <motion.h2
                                animate={controlShowTitle}
                                className="hover-title--styles"
                            >
                                Browse session
                    </motion.h2>
                        </div>
                    </div>
                </div> */}
// const transition2 = { delay: 1.2, duration: 1, ease: [.6, .01, -.05, .9] };

    // let topOut;
    // // in order to make imgVariant animation responsive
    // // I have to somehow get the img ref x(left) and y (top) to the initial state of this variant
    // // GOAL:  
    // // [] get Ref variable to initial variant x variable

    // const imgVariant = {
    //     initial: {
    //         width: "210%",
    //         height: "auto",
    //         overflow: "hidden",
    //         x: -218,
    //         y: -81,
    //     },
    //     animate: {
    //         x: 0,
    //         y: 0,
    //         width: "100%",
    //         height: "auto",
    //         transition: { duration: 2, ...transition }
    //     },
    // }