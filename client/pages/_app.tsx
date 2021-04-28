import "../styles/globals.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import Layout from "../components/Layout/Layout";
import aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import User from "../Types/User";

NProgress.configure({ showSpinner: false });
//Binding events (loader)
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState<User>(null);
  const getCurrentUser = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`);
    setUser(res.data);
  };
  useEffect(() => {
    console.log("render");
    aos.init();
    if (!user) return;
    (async () => await getCurrentUser())();
  }, [getCurrentUser, user]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
