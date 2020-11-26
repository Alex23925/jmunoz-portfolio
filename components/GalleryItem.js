import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useAnimation, motion } from "framer-motion";

export default function GalleryItem({ index, img, title, category, photoshootLink }) {

    const easing = [.25, .1, .25, 1];
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let x;

    if (vw < 650) {
        x = 0;
    } else (
        x = (index % 2) === 0 ? '-7.8vw' : '7.8vw'
    )
    console.log(vw);
    const fadeInUp = {
        initial: {
            y: 100,
            x: x,
        },
        animate: {
            y: 0,
            x: x,
            transition: {
                delay: .7,
                duration: .4,
                ease: easing,
            }
        }
    };

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
        <motion.div initial="initial" animate="animate" variants={fadeInUp} className="gallery-wrapper-item">
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
                        <span className="img-title--styles">{title}</span>
                    </motion.h2>
                    <motion.h2
                        animate={controlShowTitle}
                        className="hover-title--styles"
                    >
                        Browse session
                    </motion.h2>
                </div>
            </motion.div>
        </motion.div>
    )
}