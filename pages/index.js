import dynamic from "next/dynamic";
import '../styles/home.scss';
import { useRef, useEffect } from "react";

const Meta = dynamic(() => import("../components/Meta"));
const Loader = dynamic(() => import("../components/Loader"));
const Header = dynamic(() => import("../components/Header"));
const Gallery = dynamic(() => import("../components/Gallery"));
export default function Home() {

  const pageWrapperRef = useRef();

  useEffect(() => {
    const pageBounds = pageWrapperRef.current.getBoundingClientRect();


    let top = pageBounds.y;
    let left = pageBounds.x;

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    console.log(" ");
    console.log("----------------");
    console.log(`viewport width: ${vw} viewport height: ${vh}`);

  }, [])

  return (
    <div ref={pageWrapperRef} className={`page-wrapper`} >
      <Meta />
      {/* <Loader /> */}
      <Header />
      <Gallery />
    </div>
  )
}
