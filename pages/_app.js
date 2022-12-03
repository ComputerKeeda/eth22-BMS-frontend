import "../styles/globals.css";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "@material-tailwind/react";
import "../styles/font.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
// import '../styles/scrollbar.css'

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { ContextProvider } from "../context/ContextProvider";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});
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
      <WagmiConfig client={client}>
        <Provider store={store}>
          <ContextProvider>
            <NextUIProvider>
              <ThemeProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
            </NextUIProvider>
          </ContextProvider>
        </Provider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
const EmptyLayout = ({ children }) => <>{children} </>;
