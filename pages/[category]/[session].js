import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { useAnimation, motion } from "framer-motion";
import dynamic from "next/dynamic";
import Prismic from "prismic-javascript";
import '../../styles/home.scss';

const Header = dynamic(() => import("../../components/Header"));
const SessionGallery = dynamic(() => import("../../components/SessionGallery"));

export default function Session() {
    const router = useRouter();
    console.log(router.query.session);

    const apiEndpoint = 'https://jmunoz-portfolio.cdn.prismic.io/api/v2';
    const accessToken = '';

    const Client = Prismic.client(apiEndpoint, { accessToken });
    const [galleryItems, setGalleryItemsData] = useState(null);


    return (
        <div className={`page-wrapper`} >
            <>
                <Header />
                <SessionGallery />
            </>
        </div>
    )
}