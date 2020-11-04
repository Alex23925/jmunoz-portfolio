import dynamic from "next/dynamic";
import '../styles/home.scss';

const Meta = dynamic(() => import("../components/Meta"));
const Loader = dynamic(() => import("../components/Loader"));
const Header = dynamic(() => import("../components/Header"));
const Gallery = dynamic(() => import("../components/Gallery"));
export default function Home() {
  return (
    <div div div className={`page-wrapper`} >
      <Meta />
      {/* <Loader /> */}
      <Header />
      <Gallery />
    </div>
  )
}
