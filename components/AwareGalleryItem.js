import dynamic from "next/dynamic";

const VizImageAware = dynamic(() => import("./VizImageAware"));

export default function AwareGalleryItem({index, img}) {

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let x;

    if (vw < 650) {
        x = 0;
    } else (
        x = (index % 2) === 0 ? '-7.8vw' : '7.8vw'
    )

    const easing = [.25, .1, .25, 1];

    const fadeInUp = {
        initial: {
            y: 100,
            x: x,
            opacity: 0,
        },
        animate: {
            y: 0,
            x: x,
            opacity: 1,
            transition: {
                delay: .7,
                duration: .4,
                ease: easing,
            }
        }
    };


    return (
        <div initial="initial" animate="animate" variants={fadeInUp} className="gallery-wrapper-item">
            <div
                className="gallery-item-content">
                <div>
                        <a className="img-link">     
                            <VizImageAware
                            classN={"animated-intro-img"}
                                img={img}
                                index={index}
                             />
                        </a>
                </div>
            </div>
        </div>
    )
}