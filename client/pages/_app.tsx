import "../styles/globals.css";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import Layout from "../components/Layout/Layout";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import AuthProvider from "../contexts/AuthContext";
import User from "../Types/User";

NProgress.configure({ showSpinner: false });
//Binding events (loader)
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState<User>(null);
  const getUser = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`);
    setUser(res.data);
  };
  useEffect(() => {
    aos.init();
    (async () => await getUser())();
  });
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}

export default MyApp;
