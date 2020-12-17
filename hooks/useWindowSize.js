import { useState, useEffect } from "react";

export default function useWindowSize() {
    function getSize() {
        let w;
        let h;
        if (typeof window !== "undefined") {
            w = window.innerWidth;
            h = window.innerHeight;
        }
        return {
            width: w,
            height: h,
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}