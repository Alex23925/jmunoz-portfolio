import dynamic from "next/dynamic";
import '../styles/home.scss';

const Meta = dynamic(() => import("../components/Meta"));
const Header = dynamic(() => import("../components/Header"));
const Gallery = dynamic(() => import("../components/Gallery"));
export default function Home() {
  return (
    <div className="page-wrapper">
      <Meta />
      <Header />
      <Gallery />
    </div>
  )
}
