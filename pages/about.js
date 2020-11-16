import dynamic from "next/dynamic";
import '../styles/home.scss';

const Meta = dynamic(() => import("../components/Meta"));
const AboutHeader = dynamic(() => import("../components/AboutHeader"));
const AboutLanding = dynamic(() => import("../components/AboutLanding"));

export default function about() {
    return (
        <>
            <div className={`page-wrapper`} >
                <Meta />
                {/* <Loader /> */}
                <AboutHeader />
                <AboutLanding />
            </div>
        </>
    )
}