import '../styles/globals.scss'
import { AnimatePresence } from "framer-motion";
import { useRouter, Router } from 'next/router'
import dynamic from 'next/dynamic';

function MyApp({ Component, pageProps, router }) {

  Router.events.on("routerChangeStart", () => setLoading(true));

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )

}

export default MyApp
