import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
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


export default function Gallery() {
    const controlsHideTitle = useAnimation();
    const controlShowTitle = useAnimation();

    const [hidden, setHidden] = useState(" ");


    useEffect(() => {
        const interval = setInterval(() => {
            setHidden("overflow-hid");
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
                        initial="initial"
                        animate="animate"
                        className={hidden}>
                        <a href="#" className="img-link">
                            <motion.img
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
                    <motion.h2 animate="animate" className="non-hover-title"><span className="img-title--styles">BMW - </span><span className="img-category--styles">Car</span></motion.h2>
                    <motion.h2 animate="animate" className="hover-title--styles">Browse all photos from this session</motion.h2>
                </div>
            </div>

            <div className="gallery-wrapper-item">
                <motion.div
                    className="gallery-item-content">
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
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: .45 }}
                                initial="initial" animate="animate" className="animated-intro-img" src="/bothBMW_med.jpeg" alt="Picture of the red and silver BMW" />
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
                </motion.div>
            </div>





        </div >
    )
}