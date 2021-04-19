import "../styles/globals.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import Layout from "../components/Layout/Layout";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false });
//Binding events (loader)
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    aos.init();
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout style={{ width: "100%" }}>
        <Component style={{ width: "100%" }} {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
