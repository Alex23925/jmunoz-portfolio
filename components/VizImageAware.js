import VizSensor from 'react-visibility-sensor';
import {useState} from "react"

export default function VizImageAware({ img, index, classN, setVisiblePic, setIsPicVisible}) {
    const [imgViz, setImgViz] = useState(false);

    return (
        <>
            <VizSensor
                onChange={(isVisible) => {
                    setImgViz(isVisible);
                    setVisiblePic(index);
                    setIsPicVisible(true);
                }}
            >
                <img
                    src={img}
                    id={`main-pic-${index}`}
                    className={classN}
                    // style={{
                    //     opacity: imgViz ? 1 : 0.25,
                    //     transition: 'opacity 500ms linear'
                    // }}
                />
            </VizSensor> 
        </>
    )
}
