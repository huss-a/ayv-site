import Document, { Html, Head, Main, NextScript } from "next/document";
import logo from "../images/logo.jpg";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* google fonts */}
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Poppins:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet preconnect"
          />
          {/* bootstrap */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet preconnect"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
            crossOrigin="anonymous"
            rel="preconnect"
          ></script>
          {/* font awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossOrigin="anonymous"
          />
          <link rel="shortcut icon" href={logo} type="image/x-icon" />

          <meta
            name="keywords"
            content="Finnair, Finnair Virtual, VA, Infinite flight, Virtual Airline, Airline, Finland, IFVARB, Infinite Flight Virtual Airline"
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <body>
          {/* 
Learn more about netlify forms in React: 

https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/
*/}
          <form name="contact-form" data-netlify="true" hidden>
            <input type="text" name="bot-field" hidden />
            <input name="Name" type="text" />
            <input name="Email" type="text" />
            <textarea name="Message" type="text"></textarea>
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
