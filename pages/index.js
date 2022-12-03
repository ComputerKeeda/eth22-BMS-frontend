import { IconButton } from "@mui/material";
import Head from "next/head";
import { RiEditCircleFill, RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ImLinkedin } from "react-icons/im";
import { BsInstagram, BsSlack, BsTwitter } from "react-icons/bs";
import { HomeLayouts } from "../layout/HomeLayout";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <div
      className="w-full flex items-start"
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <aside className="w-2/5 h-full pl-4 pr-2 py-4 bg-gray-200">
        <div className="container-list h-full w-full rounded-xl flex flex-col overflow-y-auto bg-white">
          <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28">
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
          </div>
          <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28">
            <div className="header w-full flex items-end justify-between">
              <div className="avatars flex items-center justify-start gap-2">
                <div className="ava h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/101" alt="" />
                </div>
                <div className="content flex flex-col items-start justify-between">
                  <div className="title text-sm font-semibold text-gray-500">
                    Franco.ohana
                  </div>
                  <div className="sub-title text-sm font-medium text-gray-500 inter">
                    Student in iMBA
                  </div>
                </div>
              </div>
              <div className="date text-xs font-medium text-gray-500  inter">
                16:1 РМ.JU 122.2021
              </div>
            </div>
            <div className="content w-full text-xs inter text-gray-500">
              Students in the iMBA program from sies college of Business at the
              University of Illinois Urbana-Champaign--a world-class att...
            </div>
          </div>
          <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28">
            <div className="header w-full flex items-end justify-between">
              <div className="avatars flex items-center justify-start gap-2">
                <div className="ava h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/102" alt="" />
                </div>
                <div className="content flex flex-col items-start justify-between">
                  <div className="title text-sm font-semibold text-gray-500">
                    Franco.ohana
                  </div>
                  <div className="sub-title text-sm font-medium text-gray-500 inter">
                    Student in iMBA
                  </div>
                </div>
              </div>
              <div className="date text-xs font-medium text-gray-500  inter">
                16:1 РМ.JU 122.2021
              </div>
            </div>
            <div className="content w-full text-xs inter text-gray-500">
              Students in the iMBA program from sies college of Business at the
              University of Illinois Urbana-Champaign--a world-class att...
            </div>
          </div>
          <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28">
            <div className="header w-full flex items-end justify-between">
              <div className="avatars flex items-center justify-start gap-2">
                <div className="ava h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/103" alt="" />
                </div>
                <div className="content flex flex-col items-start justify-between">
                  <div className="title text-sm font-semibold text-gray-500">
                    Franco.ohana
                  </div>
                  <div className="sub-title text-sm font-medium text-gray-500 inter">
                    Student in iMBA
                  </div>
                </div>
              </div>
              <div className="date text-xs font-medium text-gray-500  inter">
                16:1 РМ.JU 122.2021
              </div>
            </div>
            <div className="content w-full text-xs inter text-gray-500">
              Students in the iMBA program from sies college of Business at the
              University of Illinois Urbana-Champaign--a world-class att...
            </div>
          </div>
          <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28">
            <div className="header w-full flex items-end justify-between">
              <div className="avatars flex items-center justify-start gap-2">
                <div className="ava h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/103" alt="" />
                </div>
                <div className="content flex flex-col items-start justify-between">
                  <div className="title text-sm font-semibold text-gray-500">
                    Franco.ohana
                  </div>
                  <div className="sub-title text-sm font-medium text-gray-500 inter">
                    Student in iMBA
                  </div>
                </div>
              </div>
              <div className="date text-xs font-medium text-gray-500  inter">
                16:1 РМ.JU 122.2021
              </div>
            </div>
            <div className="content w-full text-xs inter text-gray-500">
              Students in the iMBA program from sies college of Business at the
              University of Illinois Urbana-Champaign--a world-class att...
            </div>
          </div>
          <div className="row w-full flex flex-col items-start justify-center py-2 px-4 gap-2 bg-white h-28">
            <div className="header w-full flex items-end justify-between">
              <div className="avatars flex items-center justify-start gap-2">
                <div className="ava h-10 w-10 rounded-full overflow-hidden">
                  <img src="https://picsum.photos/103" alt="" />
                </div>
                <div className="content flex flex-col items-start justify-between">
                  <div className="title text-sm font-semibold text-gray-500">
                    Franco.ohana
                  </div>
                  <div className="sub-title text-sm font-medium text-gray-500 inter">
                    Student in iMBA
                  </div>
                </div>
              </div>
              <div className="date text-xs font-medium text-gray-500  inter">
                16:1 РМ.JU 122.2021
              </div>
            </div>
            <div className="content w-full text-xs inter text-gray-500">
              Students in the iMBA program from sies college of Business at the
              University of Illinois Urbana-Champaign--a world-class att...
            </div>
          </div>
        </div>
      </aside>
      <aside className="w-3/5 h-full pr-4 pl-2 py-4 bg-gray-200">
        <div className="container-email bg-white h-full w-full rounded-xl px-4 py-2 flex flex-col items-start gap-4  overflow-y-auto">
          <div className="titleAndBtn w-full flex items-center justify-between">
            <p className="text-xl font-semibold">Genry Swarowski</p>
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
              <img src="https://picsum.photos/200" alt="Image will come here" />
            </div>
            <div className="details  flex flex-col gap-1">
              <p className="text-sm font-medium">
                List-owner@test.lab on behalf of user2@test.lab
              </p>
              <p className="text-sm font-medium">10:30 PM, Jul 14, 2021</p>
              <p className="text-sm font-medium">To listatest.lar</p>
            </div>
          </div>
          <h5 className="font-semibold">
            Minimalistic Photos for UI/UX Designers 💪🏻
          </h5>
          <div className="email-message text-sm flex flex-col gap-4">
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
          </div>
        </div>
      </aside>
    </div>
  );
}

Home.Layout = HomeLayouts;
