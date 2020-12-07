import VizSensor from 'react-visibility-sensor';
import { useState } from "react"

export default function SideVizImageAware({ img, index, classN, visiblePic, setVisiblePicSide, setIsPicVisibleSide }) {
    const [imgViz, setImgViz] = useState(false);
    let vwVar = index === visiblePic ? vwVar = "-2vw" : vwVar = "0vw";
    const [focusedPic, setFocusedPic] = useState("unfocused");
    console.log(focusedPic);

    return (
        <>
            <VizSensor
                onChange={(isVisible) => {
                    setImgViz(isVisible);
                    setIsPicVisibleSide(true);
                    setVisiblePicSide(index);
                }}
            >
                <img
                    src={img}
                    id={`pic-${index} pic-${index}--styles`}
                    className={`${focusedPic} ${classN} pic-${index} pic-${index}--styles`}
                    style={{
                        opacity: index === visiblePic ? 1 : 0.25,
                        transform: `translate3d(${vwVar}, 0, 0)`,
                        transition: 'opacity transform .5s cubic-bezier(.455,.03,.515,.955),height .5s cubic-bezier(.455,.03,.515,.955),-webkit-transform .5s cubic-bezier(.455,.03,.515,.955)'
                    }}
                />
            </VizSensor>
        </>
    )
}
