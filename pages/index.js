import { IconButton } from "@mui/material";
import Head from "next/head";
import { RiEditCircleFill, RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram, BsSlack, BsTwitter } from "react-icons/bs";
import { HomeLayouts } from "../layout/HomeLayout";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [emailList, setEmailList] = useState([]);
  const [mainEmailData, setMainEmailData] = useState([]);

  const getEmails = async () => {
    const emailsAPI = await fetch("http://localhost:6889/mail/getMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userWalletAddress: localStorage.getItem("userWA"),
      }),
    });

    const emails = await emailsAPI.json();
    setEmailList(emails.data);
    console.log(emails.data);
  };

  const getMyCustomDate = (date) => {
    const apiDate = new Date(date);
    const MyDate = `${apiDate.getDate()}/${
      apiDate.getMonth() + 1
    }/${apiDate.getFullYear()}`;
    return MyDate;
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <div
      className="w-full flex items-start"
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <aside className="w-2/5 h-full pl-4 pr-2 py-4 bg-gray-200">
        <div className="container-list h-full w-full rounded-xl flex flex-col gap-4 overflow-y-auto bg-white">
          {emailList ? (
            emailList.map((email) => (
              <div
                key={email.transactionHash}
                className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28"
                onClick={() => {
                  setMainEmailData(email);
                }}
              >
                <div className="header w-full flex items-end justify-between">
                  <div className="avatars flex items-center justify-start gap-2">
                    <div className="ava h-10 w-10 rounded-full overflow-hidden">
                      <img
                        src={
                          email.senderAvatar === "null"
                            ? "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                            : email.senderAvatar
                        }
                        alt=""
                      />
                    </div>
                    <div className="content flex flex-col items-start justify-between">
                      <div className="title text-sm font-semibold">
                        {email.senderUsername === "unknown"
                          ? email.senderAddress.substring(0, 25) + "..."
                          : email.senderUsername}
                      </div>
                      <div className="sub-title text-sm font-medium text-primary-900 inter">
                        {email.subject}
                      </div>
                    </div>
                  </div>
                  <div className="date text-xs font-medium text-primary-900  inter">
                    {getMyCustomDate(email.timestamp)}
                  </div>
                </div>
                <div className="content w-full text-xs inter">
                  {email.body.length > 45
                    ? email.body.substring(0, 205) + "..."
                    : email.body}
                </div>
              </div>
            ))
          ) : (
            <div className="h-full w-full flex items-center justify-center">
              Loding Please wait...
            </div>
          )}

          {/* <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28">
            <div className="header w-full flex items-end justify-between">
              <div className="avatars flex items-center justify-start gap-2">
                <div className="ava h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/100" alt="" />
                </div>
                <div className="content flex flex-col items-start justify-between">
                  <div className="title text-sm font-semibold">
                    Franco.ohana
                  </div>
                  <div className="sub-title text-sm font-medium text-primary-900 inter">
                    Student in iMBA
                  </div>
                </div>
              </div>
              <div className="date text-xs font-medium text-primary-900  inter">
                16:1 РМ.JU 122.2021
              </div>
            </div>
            <div className="content w-full text-xs inter">
              Students in the iMBA program from sies college of Business at the
              University of Illinois Urbana-Champaign--a world-class att...
            </div>
          </div>
          <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-primary-50 h-28">
            <div className="header w-full flex items-end justify-between">
              <div className="avatars flex items-center justify-start gap-2">
                <div className="ava h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/106" alt="" />
                </div>
                <div className="content flex flex-col items-start justify-between">
                  <div className="title text-sm font-semibold">
                    Genry Swarowski
                  </div>
                  <div className="sub-title text-sm font-medium text-primary-900 inter">
                    Minimalistic Photos for UI/UX Designers
                  </div>
                </div>
              </div>
              <div className="date text-xs font-medium text-primary-900  inter">
                10:30 PM, Jul 14, 2021
              </div>
            </div>
            <div className="content w-full text-xs inter">
              Join us for a webinar and live Q&A where our Jungle Scout experts
              share how to leverage Jungle Scout product research an...
            </div>
          </div> */}
        </div>
      </aside>
      <aside className="w-3/5 h-full pr-4 pl-2 py-4 bg-gray-200">
        {mainEmailData ? (
          <div className="container-email bg-white h-full w-full rounded-xl px-4 py-2 flex flex-col items-start gap-4  overflow-y-auto">
            <div className="titleAndBtn w-full flex items-center justify-between">
              <p className="text-xl font-semibold">
                {mainEmailData.subject ? mainEmailData.subject : "0x23456789"}
              </p>
              <div className="actionBtn flex items-center gap-1">
                <IconButton size="xs">
                  <RiErrorWarningLine size={18} />
                </IconButton>
                <IconButton size="xs">
                  <RiEditCircleFill size={18} />
                </IconButton>
                <IconButton size="sm">
                  <HiOutlineDotsVertical size={18} />
                </IconButton>
              </div>
            </div>
            <div className="avaDetails flex items-center gap-2 mb-8">
              <div className="image h-20 w-20 rounded-full overflow-hidden bg-primary-600">
                <img
                  src="https://picsum.photos/200"
                  alt="Image will come here"
                />
              </div>
              <div className="details  flex flex-col gap-1">
                <p className="text-sm font-medium">
                  {mainEmailData.senderAddress
                    ? mainEmailData.senderAddress
                    : "0x23456789"}
                </p>
                <p className="text-sm font-medium">10:30 PM, Jul 14, 2021</p>
                <p className="text-sm font-medium">
                  To
                  {mainEmailData.receiverAddress
                    ? mainEmailData.receiverAddress
                    : "0x23456789"}
                </p>
              </div>
            </div>
            <h5 className="font-semibold text-sm">
              {mainEmailData.transactionHash
                ? mainEmailData.transactionHash
                : "0x23456789"}
            </h5>
            {/* <div className="email-message text-sm flex flex-col gap-4">
            <div className="font-semibold">Here's what changed this week..</div>
            <div>
              Happy new week, Uxcelers! As you might be aware, we release new
              product updates every Monday, so here's what changed with Uxcel
              this week:
            </div>
            <div>
              <span className="font-semibold">
                A brand new lesson player experience.
              </span>{" "}
              We've completely revamped the UI for the lesson experience and
              have worked to simplify it as much as possible. Our goal is to
              create a more interactive and engaging learning experience Colin.
            </div>
            <div className="mb-2">Co-Founder</div>
            <div className="btns flex gap-4 items-center mb-2">
              <Button size="sm" className="shadow-none hover:shadow-none">
                Replay
              </Button>
              <Button size="sm" className="shadow-none hover:shadow-none">
                Forward
              </Button>
            </div>
            <div className="image h-80 overflow-hidden w-full flex items-center justify-start gap-4">
              <div className="img w-1/2 h-full">
                <img
                  src="https://picsum.photos/401"
                  alt=""
                  className="rounded-lg h-full overflow-hidden"
                />
              </div>
              <div className="img w-1/2 h-full flex flex-col gap-4">
                <img
                  src="https://picsum.photos/402"
                  alt=""
                  className="rounded-lg h-1/2 overflow-hidden"
                />
                <img
                  src="https://picsum.photos/403"
                  alt=""
                  className="rounded-lg h-1/2 overflow-hidden"
                />
              </div>
            </div>
            <footer>
              <div className="flex items-center justify-between">
                <div>
                  Uxcel is the ultimate tool to build and grow your design
                  career.
                </div>
                <div className="cursor-pointer">Unsubscribe</div>
              </div>
              <div className="icons flex items-center gap-2 my-4">
                <BsInstagram size={20} />
                <BsTwitter size={20} />
                <BsSlack size={20} />
                <ImLinkedin size={20} />
              </div>
            </footer>
          </div> */}
            <div className="email-message text-sm flex flex-col gap-4">
              {mainEmailData.body
                ? mainEmailData.body
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quama, laborum eius in sequi dicta officia veritatis inventore nostrumnam optio molestias facilis sint rerum, harum consectetur, sit unde?"}
            </div>
          </div>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            Loding Please wait...
          </div>
        )}
      </aside>
    </div>
  );
}

Home.Layout = HomeLayouts;
