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
                    id={`pic-${index} pic-${index}--styles`}
                    className={classN}
                />
            </VizSensor> 
        </>
    )
}
