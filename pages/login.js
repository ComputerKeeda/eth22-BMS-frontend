import React from "react";
import Login from "../components/pages/Login";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

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

export default function login() {
  return (
    <div>
      <WagmiConfig client={client}>
        <Login />
      </WagmiConfig>
    </div>
  );
}
