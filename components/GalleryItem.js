import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";
export default function GalleryItem({ img, title, category, photoshootLink }) {

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
                    <Link as={`/${category}/${photoshootLink}`} href="/[category]/[session]">
                        <a className="img-link">
                            <motion.img
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: .45 }}
                                initial="initial" animate="animate" className="animated-intro-img" src={img} alt="Picture of the red and silver BMW" />
                        </a>
                    </Link>
                </motion.div>

                <div className="title-container overflow-hid">
                    <motion.h2
                        animate={controlsHideTitle}
                        className="non-hover-title"
                    >
                        <span className="img-title--styles">{title} - </span>
                        <span className="img-category--styles">{category}</span>
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
    )
}