import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import "../styles/gallery-styles/gallery.scss";

const GalleryItem = dynamic(() => import("./GalleryItem"));

const transition = { delay: .6, duration: .8, ease: [.6, .01, -.05, .9] };
const transition2 = { delay: 1.2, duration: 1, ease: [.6, .01, -.05, .9] };

let topOut;
console.log(topOut);
// in order to make imgVariant animation responsive
// I have to somehow get the img ref x(left) and y (top) to the initial state of this variant
// GOAL:  
// [] get Ref variable to initial variant x variable

const imgVariant = {
    initial: {
        width: "210%",
        height: "auto",
        overflow: "hidden",
        x: -218,
        y: -81,
    },
    animate: {
        x: 0,
        y: 0,
        width: "100%",
        height: "auto",
        transition: { duration: 2, ...transition }
    },
}

const h2Variant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 0,
    }
}

const nonHoverTitleVariant = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 2, ...transition2 }
    }
}

const portraitVariant = {
    initial: {
        overflow: "none"
    },
    animate: {
        overflow: "hidden"
    },
}

export default function Gallery() {

    const [hidden, setHidden] = useState(" ");


    useEffect(() => {
        const interval = setInterval(() => {
            setHidden("img-portrait");
        }, 1400);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className="gallery-wrapper">


            {/* first image to be animated in */}
            <div className="gallery-wrapper-item">
                <div className="gallery-item-content">
                    <motion.div
                        whileHover={{ scale: .97 }}
                        transition={{ duration: .45 }}
                        ref={portraitVariant}
                        initial="initial"
                        animate="animate"
                        className={hidden}>
                        <a href="#" className="img-link">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
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
                    <motion.h2 variants={nonHoverTitleVariant} initial="initial" animate="animate" className="non-hover-title"><span className="img-title--styles">BMW - </span><span className="img-category--styles">Car</span></motion.h2>
                    <motion.h2 variants={h2Variant} initial="initial" animate="animate" className="hover-title--styles">Browse all photos from this session</motion.h2>
                </div>
            </div>

            <div className="gallery-wrapper-item">
                <div className="gallery-item-content">
                    <motion.div
                        whileHover={{ scale: .97 }}
                        transition={{ duration: .45 }}
                        className="img-portrait">
                        <a href="#" className="img-link">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: .45 }}
                                initial="initial" animate="animate" className="animated-intro-img" src="/bothBMW_med.jpeg" alt="Picture of the red and silver BMW" />
                        </a>
                    </motion.div>
                    <motion.h2 variants={nonHoverTitleVariant} initial="initial" animate="animate" className="non-hover-title"><span className="img-title--styles">BMW - </span><span className="img-category--styles">Car</span></motion.h2>
                    <motion.h2 variants={h2Variant} initial="initial" animate="animate" className="hover-title--styles">Browse all photos from this session</motion.h2>
                </div>
            </div>





        </div>
    )
}