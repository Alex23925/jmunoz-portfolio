import '../styles/globals.scss'
import { useEffect, useState } from 'react'
import { useRouter, Router } from 'next/router'
import dynamic from 'next/dynamic';

const Loader = dynamic(() => import("../components/Loader"));

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on("routerChangeStart", () => useState(true));

  Router.events.on("routerChangeComplete", () => useState(false));

  Router.events.on("routerChangeError", () => useState(false));

  return loading ? <div>Loading...</div> : <Component {...pageProps} />

}

export default MyApp
