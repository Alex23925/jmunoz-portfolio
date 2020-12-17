import dynamic from "next/dynamic";
import '../styles/home.scss';
import { useState, useRef, useEffect } from "react";

const Meta = dynamic(() => import("../components/Meta"));
const CustomScrollLayout = dynamic(() => import("../components/CustomScrollLayout"));
const Loader = dynamic(() => import("../components/Loader"));
const Header = dynamic(() => import("../components/Header"));
const Gallery = dynamic(() => import("../components/Gallery"));

export default function Home() {

  const [canScroll, setCanScroll] = useState(false);

  //Refs
  const pageWrapperRef = useRef();

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

 
  return (
    <>
      <CustomScrollLayout canScroll={canScroll}>
          <div ref={pageWrapperRef} className={`page-wrapper lock`} >
            <Meta />
            {/* <Loader /> */}
            <Header />
            <Gallery setCanScroll={setCanScroll} />
          </div>
    </CustomScrollLayout>
    </>
  )
}
