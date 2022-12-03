import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import "../styles/font.css";
// import '../styles/scrollbar.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <NextUIProvider>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;
const EmptyLayout = ({ children }) => <>{children} </>;