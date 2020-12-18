import dynamic from "next/dynamic";
import '../styles/home.scss';
import { useState, useEffect } from "react";

const Meta = dynamic(() => import("../components/Meta"));
const CustomScrollLayout = dynamic(() => import("../components/CustomScrollLayout"));
const AboutHeader = dynamic(() => import("../components/AboutHeader"));
const AboutLanding = dynamic(() => import("../components/AboutLanding"));
const AboutBg = dynamic(() => import("../components/AboutBg"));
const Loader = dynamic(() => import("../components/Loader"));

export default function about() {

    const [canScroll, setCanScroll] = useState(false);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll])


    return (
        <>
            <CustomScrollLayout canScroll={canScroll}>
                <div className={`about-page-wrapper`} >
                    <Loader setCanScroll={setCanScroll} />
                    <Meta />
                    <AboutBg />
                    <AboutHeader />
                    <AboutLanding />
                </div>
            </CustomScrollLayout>
        </>
    )
}