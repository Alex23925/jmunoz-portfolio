import { motion } from "framer-motion";
import "../styles/header.scss";

const overlayVariant = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 0,
    }
}
export default function Loader(props) {
    return (
        <motion.div variants={overlayVariant} initial="initial" animate="animate" className="loader-overlay">
            <h1 className="loader-number"></h1>
        </motion.div>
    )
}