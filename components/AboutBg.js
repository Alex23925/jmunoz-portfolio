import '../styles/home.scss';
import {useEffect, useState} from "react";

export default function AboutBg(){
    
    const [width, setWidth] = useState();
    let background;

    if (width < 650) {
        background = <div style={{
                        backgroundImage: "url(" + `${require("../public/mobile-bg.jpg")}` + ")",
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        filter: "blur(8px)",
                        filter: "brightness(.15)",
                    }}
            className="img-bg-container" />
    } else {
        background = <div style={{
                        backgroundImage: "url(" + `${require("../public/img-og.jpg")}` + ")",
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        filter: "blur(8px)",
                        filter: "brightness(.15)",
                    }}
            className="img-bg-container" />
    }

    useEffect(() => {
        setWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));

    }, [width])
    
    return (
        <>
            {background}
        </>
    )
}