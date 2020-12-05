import { motion, AnimatePresence } from "framer-motion";
import "../styles/header.scss";
import "../styles/gallery-styles/loading-gallery.scss";

function template({y}) {
    return `translateY(${y}%)`
}

export default function Loader({ setCanScroll }) {

    const transition = { delay: .25, duration: .9, ease: [1, 1, 0, 0] };

    const transition2 = { duration: 1.4, ease: [.6, .01, -.05, .9] };

    const fNameVariant = {
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: .17,
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
                delayChildren: .17,
                staggerChildren: .04,
                staggerDirection: 1,
            }
        }
    }

    const letter = {
        initial: {
            y: "0%",
        },
        animate: {
            // -520%
            y: "0%",
            transition: { duration: 1, ...transition2 },
        }
    };

    // -120%
    const loadingVariant = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "-120%",
            transition: { ...transition },
        },
        exit: {
            y: "0%",
            transition: { ...transition },
        },

    }

    return (
        <>
            <motion.div
                onAnimationComplete={() => setCanScroll(true)}
                initial="initial" animate="animate" exit="exit" variants={loadingVariant} className="loading-container">
                <motion.div className="name-title loading-txt loading-txt-container">
                    JUAN MUNOZ
                </motion.div>
            </motion.div>
        </>
    )
}