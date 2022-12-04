import { Input, useInput, Grid, Loading } from "@nextui-org/react";
import { Button } from "@material-tailwind/react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStateContext } from "../../context/ContextProvider";

export default function Login() {
  const router = useRouter();
  const { address, connector, isConnected } = useAccount();
  const { data: ensAvatar } = useEnsAvatar({ address });
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const { setLoginUserDetails } = useStateContext();

  const handleLogin = async () => {
    if (address != undefined) {
      router.push("/");
      localStorage.setItem("userWA", address);
      setLoginUserDetails(address);
    }
  };

  // useEffect(() => {
  //   if (address != undefined) {
  //     router.push("/");
  //     localStorage.setItem("userWA", address);
  //     setLoginUserDetails(address);
  //   }
  // }, [address]);

  //TODO: CALL API HERE

  return (
    <>
      <div className="h-screen w-full bg-orange-50 flex items-center justify-between">
        <section className="w-full h-full metamask flex flex-col items-center justify-center">
          <div className="mt-10">
            <div>
              {connectors.map((connector) => (
                <Button
                  disabled={!connector.ready}
                  key={connector.id}
                  onClick={() => {
                    connect({ connector });
                    handleLogin();
                  }}
                  // onClick={() => {
                  //   handleLogin()
                  // }}
                  className="shadow-none hover:shadow-none bg-[#F68614] w-full mt-10"
                >
                  {connector.name}
                  {!connector.ready && " (unsupported)"}
                  {isLoading &&
                    connector.id === pendingConnector?.id &&
                    "(connecting)"}
                </Button>
              ))}
              {error && <div>{error.message}</div>}
            </div>
          </div>
        </section>
      </div>
      {/* <Modal
        closeButton
        blur
        preventClose
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Select your
            <Text b size={18} css={{marginLeft : "8px"}} >
              Username
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={closeHandler}>
            Close
          </Button>
          <Button onClick={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
