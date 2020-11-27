import dynamic from "next/dynamic";
import '../styles/home.scss';

const Meta = dynamic(() => import("../components/Meta"));
const AboutHeader = dynamic(() => import("../components/AboutHeader"));
const AboutLanding = dynamic(() => import("../components/AboutLanding"));

export default function about() {
    return (
        <>
            <div className={`about-page-wrapper`} >
                <div className="img-bg-container">
                    <img className="img-background" src="/img-og.jpg" alt="background image" />
                </div>
                <Meta />
                <AboutHeader />
                <AboutLanding />
            </div>
        </>
    )
}