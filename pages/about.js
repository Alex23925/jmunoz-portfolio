import dynamic from "next/dynamic";
import '../styles/home.scss';

const Meta = dynamic(() => import("../components/Meta"));
const AboutHeader = dynamic(() => import("../components/AboutHeader"));

export default function about() {
    return (
        <>
            <div className={`page-wrapper`} >
                <Meta />
                {/* <Loader /> */}
                <AboutHeader />
            </div>
        </>
    )
}