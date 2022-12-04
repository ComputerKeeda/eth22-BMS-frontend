import { useEffect, useState } from "react";

import { huddleIframeApp, HuddleIframe } from "@huddle01/huddle01-iframe";

import { HomeLayouts } from "../layout/HomeLayout";

function Connect() {
  const [walletAddress, setWalletAddress] = useState("");

  const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/test-room",
    height: "500px",
    width: "75%",
  };

  const reactions = [
    "😂",
    "😢",
    "😦",
    "😍",
    "🤔",
    "👀",
    "🙌",
    "👍",
    "👎",
    "🔥",
    "🍻",
    "🚀",
    "🎉",
    "❤️",
    "💯",
  ];

  useEffect(() => {
    huddleIframeApp.on("peer-join", (data) =>
      console.log({ iframeData: data })
    );
    huddleIframeApp.on("peer-left", (data) =>
      console.log({ iframeData: data })
    );
  }, []);

  return (
    <div className="App">
      <div className="flex items-center justify-center w-full">
        <HuddleIframe config={iframeConfig} />
      </div>
    </div>
  );
}

export default Connect;

Connect.Layout = HomeLayouts;
