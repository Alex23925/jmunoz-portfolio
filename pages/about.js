import dynamic from "next/dynamic";
import '../styles/home.scss';

const Meta = dynamic(() => import("../components/Meta"));
const Header = dynamic(() => import("../components/Header"));

export default function about() {
    return (
        <>
            <div className={`page-wrapper`} >
                <Meta />
                {/* <Loader /> */}
                <Header />
            </div>
        </>
    )
}