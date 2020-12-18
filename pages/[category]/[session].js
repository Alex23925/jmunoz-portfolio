import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import useScrollPosition from '@react-hook/window-scroll';
import dynamic from "next/dynamic";
import Prismic from "prismic-javascript";
import '../../styles/home.scss';
import Cookie from "js-cookie";

const Header = dynamic(() => import("../../components/Header"));
const CustomScrollLayout = dynamic(() => import("../../components/CustomScrollLayout"));
const SessionGallery = dynamic(() => import("../../components/SessionGallery"));
const Loader = dynamic(() => import("../../components/Loader"));

export default function Session() {
    const router = useRouter();
    const routerSession = router.query.category;

    const [canScroll, setCanScroll] = useState(false);

    const scrollY = useScrollPosition(60);

    let cookieRouter = Cookie.get("sessionKey");

    useEffect(() => {
        Cookie.set("sessionKey", routerSession, { expires: 7, path: '' });
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [routerSession, canScroll])

    // !routerSession ?
    //     <Loader setCanScroll={setCanScroll} /> :

    return (
        <>
            <CustomScrollLayout canScroll={canScroll}>
                <motion.div className={`page-wrapper`} >
                    <>
                        <Header />
                        <SessionGallery scrollY={scrollY} sessionName={routerSession ? routerSession : cookieRouter} setCanScroll={setCanScroll} canScroll={canScroll} />
                    </>
                </motion.div>
            </CustomScrollLayout>
        </>
    )
}