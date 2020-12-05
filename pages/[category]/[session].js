import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Prismic from "prismic-javascript";
import '../../styles/home.scss';

const Header = dynamic(() => import("../../components/AboutHeader"));
const SessionGallery = dynamic(() => import("../../components/SessionGallery"));

export default function Session() {
    const router = useRouter();
    const routerSession = router.query.category;

    const apiEndpoint = 'https://jmunoz-portfolio.cdn.prismic.io/api/v2';
    const accessToken = '';

    const Client = Prismic.client(apiEndpoint, { accessToken });
    const [galleryItems, setGalleryItemsData] = useState(null);


    const [canScroll, setCanScroll] = useState(false);

    const pageWrapperRef = useRef();

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll])


    return (
        <div className={`page-wrapper`} >
            <>
                <Header />
                <SessionGallery sessionName={routerSession} setCanScroll={setCanScroll} />
            </> 
        </div>
    )
}