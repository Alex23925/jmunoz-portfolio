import "../styles/header.scss";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function AboutHeader() {
    const transition = { delay: 1.2, duration: .4, ease: [.6, .01, -.05, .9] };
    const btnVariant = {
        initial: {
            opacity: 0,
            y: 40,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ...transition },
        }

    }


    const arrow = <FontAwesomeIcon icon={faArrowLeft} />

    const onHoverStart = useAnimation();
    const onHoverEnd = useAnimation();


    return (
        <>
            <motion.section initial="initial" animate="animate" variants={btnVariant} className="header about-header">
                <div className="go-back-container go-back-container--stlyles">
                    <Link href="/">
                        <a style={{ textDecoration: 'none' }} className="go-back go-back--styles">
                            {/* <span className="arrow--styles">
                                {arrow}
                            </span> */}
                            JUAN MUNOZ
                        </a>
                    </Link>
                </div>
                <div className="calendar-container">
                    <h1 className="calendar calendar--styles">
                        <Link href="/about">
                            <a className="link link--styles">about</a>
                        </Link>
                    </h1>
                </div>
            </motion.section>
        </>
    )
}