import { IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { IoShareSocial, IoVideocam } from "react-icons/io5";
import { FaEthereum, FaMailBulk, FaPeopleCarry } from "react-icons/fa";
import { HiArrowDown, HiMenuAlt1, HiUserGroup } from "react-icons/hi";
import { HiInboxArrowDown, HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineScheduleSend } from "react-icons/md";
import { BsStar } from "react-icons/bs";
import { RiSpam2Fill, RiSpam3Fill } from "react-icons/ri";
const Sidebar = () => {

  const [bottomModal, setBottomModal] = useState(true)

  return (
    <div className="w-full">
      <aside className="w-64 h-screen" aria-label="Sidebar">
        <div className="h-screen relative py-4 px-3 bg-white rounded flex flex-col items-start justify-start">
          <div className="heading flex items-center justify-between w-full">
            <div className="logo">
              <img
                src="/assets/logo/airchains-console-primary-mono.svg"
                className="h-14"
                alt="company's logo"
              />
            </div>
            <div className="title"></div>
            <div className="toggle">
              <IconButton className="shadow-none hover:shadow-none bg-transparent">
                <span className="text-primary-500">
                  <HiMenuAlt1 size={20} />
                </span>
              </IconButton>
            </div>
          </div>

          <div className="list w-full mt-6 flex flex-col items-start justify-start">
            <div className="items flex items-center justify-start gap-2 py-1 w-full my-1 rounded-lg px-2 bg-primary-50">
              <div className="icon text-primary-700">
                <HiInboxArrowDown size={22} />
              </div>
              <div className="title inter text-base font-semibold text-primary-900">
                Inbox
              </div>
            </div>
            <div className="items flex items-center justify-start gap-2 py-1 w-full my-1 rounded-lg px-2">
              <div className="icon text-primary-700">
                <BiMailSend size={22} />
              </div>
              <div className="title inter text-base font-semibold">Sent</div>
            </div>
            <div className="items flex items-center justify-start gap-2 py-1 w-full my-1 rounded-lg px-2">
              <div className="icon text-primary-700">
                <FaMailBulk size={22} />
              </div>
              <div className="title inter text-base font-semibold">
                All mail
              </div>
            </div>
            <div className="items flex items-center justify-start gap-2 py-1 w-full my-1 rounded-lg px-2">
              <div className="icon text-primary-700">
                <IoVideocam size={22} />
              </div>
              <div className="title inter text-base font-semibold">Connect</div>
            </div>
            {/* upcoming features */}
            <div className="items flex flex-col items-start justify-start gap-2 py-1 w-full my-1 rounded-lg px-2 inter text-primary-900 font-semibold">
              <div className="row flex items-center gap-2">
                <div className="text">Upcoming Features</div>
                <div className="icon">
                  <HiArrowDown size={14} />
                </div>
              </div>
              <div className="nestedList ml-2">
                <div className="items flex items-center justify-between gap-2 py-1 w-full my-1 rounded-lg px-2">
                  <div className="flex items-center gap-2">
                    <div className="icon text-primary-700">
                      <IoShareSocial size={18} />
                    </div>
                    <div className="title inter text-sm font-semibold">
                      Social
                    </div>
                  </div>
                </div>
                {/* <div className="items flex items-center justify-between gap-2 py-1 w-full my-1 rounded-lg px-2">
                  <div className="flex items-center gap-2">
                    <div className="icon text-primary-700">
                      <HiUserGroup size={18} />
                    </div>
                    <div className="title inter text-sm font-semibold">
                      Group
                    </div>
                  </div>
                </div> */}
                {/* <div className="items flex flex-col items-start justify-start gap-2 py-1 w-full my-1 rounded-lg px-2 inter text-primary-900 font-semibold">
                  <div className="row flex items-center gap-2">
                    <div className="icon">
                      <HiUserGroup size={18} />
                    </div>
                    <div className="text inter text-sm font-semibold">Group</div>
                  </div>
                  <div className="nestedList ml-2 border-l border-primary-500">
                    <div className="items flex items-center justify-between gap-2 py-1 w-full my-1 rounded-lg px-2">
                      <div className="flex items-center gap-2">
                        <div className="icon text-primary-700">
                          <FaEthereum size={18} />
                        </div>
                        <div className="title inter text-sm font-semibold">
                          Eth India 2022
                        </div>
                      </div>
                    </div>
                    <div className="items flex items-center justify-between gap-2 py-1 w-full my-1 rounded-lg px-2">
                      <div className="flex items-center gap-2">
                        <div className="icon text-primary-700">
                          <HiUserGroup size={18} />
                        </div>
                        <div className="title inter text-sm font-semibold">
                          Polygon Connect
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="items flex items-center justify-between gap-2 py-1 w-full my-1 rounded-lg px-2">
                  <div className="flex items-center gap-2">
                    <div className="icon text-primary-700">
                      <MdOutlineScheduleSend size={18} />
                    </div>
                    <div className="title inter text-sm font-semibold">
                      Scheduled
                    </div>
                  </div>
                </div>
                <div className="items flex items-center justify-between gap-2 py-1 w-full my-1 rounded-lg px-2">
                  <div className="flex items-center gap-2">
                    <div className="icon text-primary-700">
                      <BsStar size={18} />
                    </div>
                    <div className="title inter text-sm font-semibold">
                      Stared
                    </div>
                  </div>
                </div>
                <div className="items flex items-center justify-between gap-2 py-1 w-full my-1 rounded-lg px-2">
                  <div className="flex items-center gap-2">
                    <div className="icon text-primary-700">
                      <RiSpam2Fill size={18} />
                    </div>
                    <div className="title inter text-sm font-semibold">
                      Spam
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="dropdown-cta"
            className={`p-4 mt-6 bg-primary-50 rounded-lg self-end absolute bottom-4 ml-3 ${bottomModal ? "" : "hidden"} `}
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="bg-primary-100 text-primary-900 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                Beta
              </span>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                data-collapse-toggle="dropdown-cta"
                aria-label="Close"
                onClick={() => {
                  setBottomModal(false)
                }}
              >
                <span className="sr-only">Close</span>
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
              There are some features that are not yet implemented. We are still
              working on it to make it live.
              <span className="text-red-400 text-sm"> WAGMI 🚀 🚀 🚀</span>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
