import useWindowSize from "../hooks/useWindowSize";
import { useState, useRef, useEffect } from "react";

export default function CustomScrollLayout({canScroll, children }) {

    //Hooks
    const size = useWindowSize();

    //Refs
    const stopBodyScrollContainerRef = useRef();
    const scrollContainerRef = useRef();

    //Objects 
    const skewConfigs = {
        ease: .1,
        current: 0,
        previous: 0,
        rounded: 0
    }

    useEffect(() => {
        document.body.style.height = `${scrollContainerRef.current.getBoundingClientRect().height}px`;
        if (canScroll === false) {
            document.querySelector("body").classList.add("no-scroll");
        } else {
            document.querySelector("body").classList.remove("no-scroll");
        }
    }, [canScroll, size.height]);

    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, [])

    const skewScrolling = () => {
        skewConfigs.current = window.scrollY;
        skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
        skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

        //Variables
        const difference = skewConfigs.current - skewConfigs.rounded;
        const acceleration = difference / size.width
        const velocity = +acceleration;
        const skew = velocity * 7.5;

        //
        scrollContainerRef.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`;

        requestAnimationFrame(() => skewScrolling());
    };

    return (
        <>
            <div ref={stopBodyScrollContainerRef} className="stop-body-scrolling-container">
                <div ref={scrollContainerRef} className="scrolling-container">
                    {children}
                </div>
            </div>
        </>
    )

}