import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/header.scss";

const transition = { delay: 1.2, duration: .4, ease: [.6, .01, -.05, .9] };

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
};

const letter = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    }
};

const nameVariant = {
    initial: {
        y: 40,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    }
}

const btnVariant = {
    initial: {
        y: 40,
    },
    animate: {
        y: 0,
        transition: { duration: 1, ...transition },
    }

}

export default function Header(props) {


    return (
        <motion.div initial="initial" animate="animate" exit="exit" className="header header-styles">
            <motion.div initial="initial" animate="animate" variants={nameVariant} className="name-title">
                <motion.span variants={fNameVariant} initial="initial" animate="animate" className="first-name first-name--styles">
                    <motion.span variants={letter}>J</motion.span>
                    <motion.span variants={letter}>U</motion.span>
                    <motion.span variants={letter}>A</motion.span>
                    <motion.span variants={letter}>N</motion.span>
                </motion.span>
                <motion.span variants={lNameVariant} initial="initial" animate="animate" className="last-name last-name--styles">
                    <motion.span variants={letter}>M</motion.span>
                    <motion.span variants={letter}>U</motion.span>
                    <motion.span variants={letter}>N</motion.span>
                    <motion.span variants={letter}>O</motion.span>
                    <motion.span variants={letter}>Z</motion.span>
                </motion.span>
            </motion.div>
            <nav className="main-nav main-nav--styles">
                <Link href="/about">
                    <motion.a initial="initial" animate="animate" variants={btnVariant} className="link link--styles">about</motion.a>
                </Link>

            </nav>
        </motion.div>
    )
}