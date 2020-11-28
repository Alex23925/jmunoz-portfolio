import dynamic from "next/dynamic";
import '../styles/home.scss';

const Meta = dynamic(() => import("../components/Meta"));
const AboutHeader = dynamic(() => import("../components/AboutHeader"));
const AboutLanding = dynamic(() => import("../components/AboutLanding"));
const AboutBg = dynamic(() => import("../components/AboutBg"));

export default function about() {

    return (
        <>
            <div className={`about-page-wrapper`} >
                <Meta />
                <AboutBg />
                <AboutHeader />
                <AboutLanding />
            </div>
        </>
    )
}