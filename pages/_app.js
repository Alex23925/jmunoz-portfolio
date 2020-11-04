import '../styles/globals.scss'
import { useEffect, useState } from 'react'
import { useRouter, Router } from 'next/router'
import dynamic from 'next/dynamic';

const Loader = dynamic(() => import("../components/Loader"));

function MyApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  Router.events.on("routerChangeStart", () => setLoading(true));

  Router.events.on("routerChangeComplete", () => setLoading(false));

  Router.events.on("routerChangeError", () => setLoading(false));

  return loading ? <h1>Loading...</h1> : <Component {...pageProps} />

}

export default MyApp
