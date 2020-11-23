import { useRouter } from "next/router";
import dynamic from "next/dynamic"
import '../../styles/home.scss';

const Header = dynamic(() => import("../../components/Header"));

export default function Session() {
    const router = useRouter();
    console.log(router);

    return (
        <div className={`page-wrapper`} >
            <>
                <Header />
                <h1>
                    hello
                </h1>
            </>
        </div>
    )
}