import '../styles/home.scss';
import {useEffect, useState} from "react";

export default function AboutBg(){
    
    const [width, setWidth] = useState();
    let img = "";
    let imgTag;

    if (width < 650) {
        img = "/mobile-bg.jpg";
        imgTag = <img className="mobile-img-background" src="mobile-bg.jpg" alt="background image" />
    } else {
        img = "/img-og.jpg";
        imgTag = <img className="img-background" src="/img-og.jpg" alt="background image" />
    }

    useEffect(() => {
        setWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0));

    }, [width])
    
    return (
        <div className="img-bg-container">
                {imgTag}
        </div>
    )
}