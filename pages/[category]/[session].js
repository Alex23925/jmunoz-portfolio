import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import useScrollPosition from '@react-hook/window-scroll';
import dynamic from "next/dynamic";
import Prismic from "prismic-javascript";
import '../../styles/home.scss';

const Header = dynamic(() => import("../../components/AboutHeader"));
const SessionGallery = dynamic(() => import("../../components/SessionGallery"));

export default function Session() {
    const router = useRouter();
    const routerSession = router.query.category;
    const [session, setSession] = useState();

    const [canScroll, setCanScroll] = useState(false);

    const scrollY = useScrollPosition(60);

    console.log(routerSession);

    useEffect(() => {
        setSession(router.query.category);

        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll])


    return !routerSession ?
        <div className="loading-container">
            <div className="loading-txt-container">
                <h1 className="loading-txt">JUAN MUNOZ</h1>
            </div>
        </div> :(
        <div className={`page-wrapper`} >
            <>
                <Header />
                <SessionGallery scrollY={scrollY} sessionName={routerSession} setCanScroll={setCanScroll} canScroll={canScroll} />
            </> 
        </div>
    )
}