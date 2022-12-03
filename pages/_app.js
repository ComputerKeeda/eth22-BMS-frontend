import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import "../styles/font.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
// import '../styles/scrollbar.css'


const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary50: "#F5F5FF",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4B4EFC",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#773B0E",

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <>
      <Provider store={store}>
        <NextUIProvider>
          <ThemeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </NextUIProvider>
      </Provider>
    </>
  );
}

export default MyApp;
const EmptyLayout = ({ children }) => <>{children} </>;
