import VizSensor from 'react-visibility-sensor';
import { useState, useEffect } from "react"

export default function SideVizImageAware({ img, index, classN, visiblePic, setVisiblePicSide, setIsPicVisibleSide }) {

    const [imgViz, setImgViz] = useState(false);
    const [initial, setInitial] = useState(0);
    
    let vwVar = index === visiblePic ? vwVar = "2vw" : vwVar = "0vw";
    const [focusedPic, setFocusedPic] = useState("unfocused");
    
    console.log("Index");
    console.log(index);
    console.log("Visible:")
    console.log(visiblePic);

    useEffect(() => {
        console.log("mounted!");
        
    }, [])

    return (
        <>
            
                <a className="side-bar-a" href={`#main-pic-${index}`}>
                    <img
                        src={img}
                        id={`pic-${index}`}
                        className={`${focusedPic} ${classN} pic-${index} pic-${index}--styles`}
                        style={{
                            display: "inlineBlock",
                            opacity: index === visiblePic ? 1 : 0.25,
                            transform: `translate3d(${vwVar}, 0, 0)`,
                            transition: 'opacity transform .5s cubic-bezier(.455,.03,.515,.955),height .5s cubic-bezier(.455,.03,.515,.955),-webkit-transform .5s cubic-bezier(.455,.03,.515,.955)'
                        }}
                    />
                </a>
            
        </>
    )
}
