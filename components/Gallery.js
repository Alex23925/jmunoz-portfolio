import dynamic from "next/dynamic";
import { animate, motion } from "framer-motion";
import "../styles/gallery-styles/gallery.scss";

const GalleryItem = dynamic(() => import("./GalleryItem"));

const transition = { delay: 1, duration: .8, ease: [.6, .01, -.05, .9] };
const transition2 = { delay: 3, duration: 1.2, ease: [.6, .01, -.05, .9] };
const imgVariant = {
    initial: {
        width: 300 * 3,
        height: 400 * 3,
        x: -150,
        y: -250,
    },
    animate: {
        x: 0,
        y: 0,
        width: 300,
        height: 400,
        transition: { duration: 2, ...transition }
    }
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

export default function Gallery() {
    return (
        <div className="gallery-wrapper">


            {/* first image to be animated in */}
            <div className="gallery-wrapper-item">
                <div className="gallery-item-content">
                    <a href="#" className="img-link">
                        <motion.img variants={imgVariant} initial="initial" animate="animate" className="animated-intro-img" src="/bothBMW.jpeg" alt="Picture of the red and silver BMW" />
                    </a>
                    <motion.h2 variants={nonHoverTitleVariant} initial="initial" animate="animate" className="non-hover-title"><span className="img-title--styles">BMW - </span><span className="img-category--styles">Car</span></motion.h2>
                    <motion.h2 variants={h2Variant} initial="initial" animate="animate" className="hover-title--styles">Browse all photos from this session</motion.h2>
                </div>
            </div>



        </div>
    )
}