import "../styles/header.scss";
import Link from "next/link";
import {useAnimation, motion} from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function AboutHeader() {
    const arrow = <FontAwesomeIcon icon={faArrowLeft} />

    const onHoverStart = useAnimation();
    const onHoverEnd = useAnimation();


    return (
        <> 
            <section className="header about-header">
                <div className="go-back-container go-back-container--stlyles">
                    <Link href="/">
                        <a className="go-back go-back--styles">
                           JM
                        </a>
                    </Link>
                </div>
                <div className="calendar-container">
                    <h1 className="calendar calendar--styles">
                        calendar
                    </h1>
                </div>
            </section>
        </>
    )
}