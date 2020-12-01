import { motion } from "framer-motion";
import "../styles/header.scss";
import "../styles/gallery-styles/loading-gallery.scss";

export default function Loader({ setCanScroll }) {

    const transition = { delay: .2, duration: 1.6, ease: [.5, .01, -.05, .5] };

    const fNameVariant = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: .6,
                staggerChildren: .04,
                staggerDirection: -1,
            }
        }
    };

    const lNameVariant = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: .6,
                staggerChildren: .04,
                staggerDirection: 1,
            }
        }
    }

    const letterVariant = {
        initial: {
            y: 400,
        },
        animate: {
            y: 0,
            transition: { duration: 1, ...transition },
        }
    };
     
    const loadingVariant = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "-120%",
            transition: { ...transition },
        }
    }

    return (
        <>
            <motion.div
                onAnimationComplete={() => setCanScroll(true)}
                initial="initial" animate="animate" variants={loadingVariant} className="loading-container loading-container-copy">
                <div className="loading-txt-container">
                    <h1 className="loading-txt"><motion.span variants={fNameVariant} initial="initial" animate="animate" className="">
                        <motion.span variants={letterVariant}>J</motion.span>
                        <motion.span variants={letterVariant}>U</motion.span>
                        <motion.span variants={letterVariant}>A</motion.span>
                        <motion.span variants={letterVariant}>N</motion.span>
                    </motion.span>
                        <motion.span variants={lNameVariant} initial="initial" animate="animate" className="loader-lname">
                            <motion.span variants={letterVariant}>M</motion.span>
                            <motion.span variants={letterVariant}>U</motion.span>
                            <motion.span variants={letterVariant}>N</motion.span>
                            <motion.span variants={letterVariant}>O</motion.span>
                            <motion.span variants={letterVariant}>Z</motion.span>
                        </motion.span></h1>
                </div>
            </motion.div>
        </>
    )
}