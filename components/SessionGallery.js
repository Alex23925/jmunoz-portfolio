import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import useFetchGalleryItem from "../hooks/useFetchGalleryItem";

import "../styles/gallery-styles/gallery.scss";
import "../styles/gallery-styles/loading-gallery.scss";
import "../styles/gallery-styles/session-styles.scss";

const SideVizImageAware = dynamic(() => import("./SideVizImageAware"));
const AwareGalleryItem = dynamic(() => import("./AwareGalleryItem"));
const BtmGallery = dynamic(() => import("../components/BtmGallery"));
const Loader = dynamic(() => import("./Loader"));

export default function Gallery({ sessionName, setCanScroll, canScroll, scrollY }) {
    const transition = { delay: 1.2, duration: .4, ease: [.6, .01, -.05, .9] };

    const btmVariant = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: { duration: 1, ...transition },
        }

    }

    const sessionItems = useFetchGalleryItem(sessionName);

    const [visiblePic, setVisiblePic] = useState(0);
    const [isPicVisible, setIsPicVisible] = useState(false);

    const [visiblePicSide, setVisiblePicSide] = useState(null);
    const [isPicVisibleSide, setIsPicVisibleSide] = useState(false);

    const [focusedPic, setFocusedPic] = useState(" ");
    const [isMounted, setIsMounted] = useState(false);

    // const scrollerRef = useRef(null);

    // console.log(scrollerRef.current.scrollTop);

    //scrollerRef.current.scrollTop = scrollY/2;

    useEffect(() => {
        setIsMounted(true);
    }, [sessionName])

    return !sessionItems ?
        <div className="loading-container">
            <div className="loading-txt-container">
                <h1 className="loading-txt">JUAN MUNOZ</h1>
            </div>
        </div> :
        (
            <>
                <Loader setCanScroll={setCanScroll} />
                <div className="gallery-wrapper">
                    {

                        sessionItems.map((item, index) => (
                            <AwareGalleryItem
                                setVisiblePic={setVisiblePic}
                                setIsPicVisible={setIsPicVisible}
                                img={item.data.shoot_image.url}
                                index={index}
                            />

                        ))
                    }
                </div>

                <motion.div initial="initial" animate="animate" variants={btmVariant} className="btm-helpful-txt-container">
                    <div className="btm-vertical-bar"></div>
                    <h2 className="btm-helpful-txt helpful-txt--styles">
                        Explore More
                    </h2>
                </motion.div>
                <BtmGallery setCanScroll={setCanScroll} />
            </>
        )
}

// side scroll bar if i ever want to implement again
{/* <div className="side-scroll-wrapper">
                    <div className="side-scroller">
                        <div className="side-scroll-container">
                            <section className="gallery-side-scroll">
                                {

                                    galleryItems.map((item, index) => (

                                        <SideVizImageAware
                                            scrollY={scrollY}
                                            canScroll={canScroll}
                                            visiblePic={visiblePic}
                                            setVisiblePicSide={setVisiblePicSide}
                                            setIsPicVisibleSide={setIsPicVisibleSide}
                                            classN={"gallery-side-pic"}
                                            img={item.data.shoot_image.url}
                                            index={index} />

                                    ))
                                }
                            </section>

                        </div>
                    </div>
                    <motion.div initial="initial" animate="animate" variants={btmVariant} className="helpful-txt-container">
                        <div className="verticle-bar"></div>
                        <h2 className="helpful-txt helpful-txt--styles">
                            <span>C</span>
                            <span>l</span>
                            <span>i</span>
                            <span>c</span>
                            <span>k</span>
                        </h2>
                    </motion.div>
                </div> */}