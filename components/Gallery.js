import dynamic from "next/dynamic";
import { animate, motion } from "framer-motion";
import "../styles/gallery-styles/gallery.scss";

const GalleryItem = dynamic(() => import("./GalleryItem"));

const transition = {delay: 1, duration: .8, ease: [.6, .01, -.05, .9] };

const imgVariant = {
    initial: {
        width: "180vw",
        height: "auto",
        x: -150,
        y: -150,
    },
    animate: {
        x: 0,
        y: 0,
        width: 300,
        height: 400,
        transition: { duration: 2, ...transition }
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
                    <div className="non-hover-title"><span>BMW - </span><span>Car</span></div>
                    <div className="hover-title">browse all photos from this session</div>
                </div>
            </div>


        </div>
    )
}