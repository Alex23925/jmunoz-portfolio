import VizSensor from 'react-visibility-sensor';
import { useState, useEffect } from "react"

export default function SideVizImageAware({ img, index, classN, visiblePic, setVisiblePicSide, setIsPicVisibleSide, canScroll, scrollY }) {

    
    const [imgViz, setImgViz] = useState(false);
    const [initial, setInitial] = useState(0);
    
    let vwVar;
    let op;

    vwVar = index === visiblePic ? vwVar = "2vw" : vwVar = "0vw";
    const [focusedPic, setFocusedPic] = useState("unfocused");
    
    if (scrollY === 0) {
        op = .25;
        vwVar = "0vw";
    } else {
        op = index === visiblePic ? 1 : 0.25;
        vwVar = index === visiblePic ? vwVar = "2vw" : vwVar = "0vw";
    }

    // console.log("Index");
    // console.log(index);
    // console.log("Visible:")
    // console.log(visiblePic);

    return (
        <>
            
                <a className="side-bar-a" href={`#main-pic-${index}`}>
                    <img
                        src={img}
                        id={`pic-${index}`}
                        className={`${focusedPic} ${classN} pic-${index} pic-${index}--styles`}
                        style={{
                            display: "inlineBlock",
                            opacity: op,
                            transform: `translate3d(${vwVar}, 0, 0)`,
                            transition: 'opacity transform .5s cubic-bezier(.455,.03,.515,.955),height .5s cubic-bezier(.455,.03,.515,.955),-webkit-transform .5s cubic-bezier(.455,.03,.515,.955)'
                        }}
                    />
                </a>
            
        </>
    )
}
