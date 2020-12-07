import VizSensor from 'react-visibility-sensor';
import {useState} from "react"

export default function VizImageAware({img, index, classN}) {
    const [imgViz, setImgViz] = useState(false);

    return (
        <>
            <VizSensor
                onChange={(isVisible) => {
                    setImgViz(isVisible);
                }}
            >
                <img
                    src={img}
                    id={`pic-${index} pic-${index}--styles`}
                    className={classN}
                    style={{
                        opacity: imgViz ? 1 : 0.25,
                        transition: 'opacity 500ms linear'
                    }}
                />
            </VizSensor> 
        </>
    )
}