import { Button, IconButton } from "@material-tailwind/react";
import React, { useState } from "react";
import { IoMdAdd, IoMdPeople, IoMdSettings } from "react-icons/io";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiMenuAlt4, HiStatusOnline } from "react-icons/hi";
import {
  Modal,
  Button as NexBtn,
  Input,
  Text,
  Textarea,
} from "@nextui-org/react";
import swal from "sweetalert";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const [sendMailLoading, setSendMailLoading] = useState(false);
  const [receiverData, setReceiverData] = useState("");
  const [mailSubject, setMailSubject] = useState("");
  const [mailBody, setMailBody] = useState("");

  const sendMail = async () => {
    setSendMailLoading(true);
    const sendEmailAPI = await fetch("http://localhost:6889/mail/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: localStorage.getItem("userWA").toString(),
        receiver: receiverData,
        mailSubject: mailSubject,
        mailBody: mailBody,
        // mailAttachment: "ye attachment hain",
      }),
    });

    const emails = await sendEmailAPI.json();
    console.log(emails);
    setSendMailLoading(false);
    swal(emails.message, emails.description, "success");
    closeHandler();
  };

  return (
    <>
      <div className="flex w-full h-16 items-center justify-between bg-primary-900 px-4">
        <div className="searchbar w-5/12 h-10 bg-white rounded-xl flex items-center justify-between">
          <input
            className="rounded-xl pl-4 flex-1 placeholder:font-medium placeholder:inter"
            type="text"
            placeholder="Search....."
          />
          <div className="icon mr-4">
            <IconButton
              className="bg-transparent shadow-none hover:shadow-none text-black"
              size="sm"
            >
              <HiEllipsisHorizontal size={20} />
            </IconButton>
          </div>
        </div>
        <div className="options flex items-center justify-end gap-4">
          <IconButton
            className="icons shadow-none hover:shadow-none bg-primary-600"
            size="md"
          >
            <IoMdPeople size={18} />
          </IconButton>
          <IconButton
            className="icons shadow-none hover:shadow-none bg-primary-600"
            size="md"
          >
            <HiStatusOnline size={18} />
          </IconButton>
          <IconButton
            className="icons shadow-none hover:shadow-none bg-primary-600"
            size="md"
          >
            <IoMdSettings size={18} />
          </IconButton>
          <IconButton
            className="icons shadow-none hover:shadow-none bg-primary-600"
            size="md"
          >
            <HiMenuAlt4 size={18} />
          </IconButton>
          <Button
            className="compose rounded-xl h-10 px-4 gap-1 bg-white flex items-center inter text-sm font-semibold text-primary-900 shadow-none hover:shadow-none focus:bg-none capitalize"
            onClick={handler}
          >
            <span className="text-primary-900">
              <IoMdAdd size={16} />
            </span>
            <div>Compose</div>
          </Button>
          <div className="image h-8 w-8 rounded-full overflow-hidden">
            <img src="https://picsum.photos/100" alt="avatar" />
          </div>
        </div>
      </div>
      <Modal
        closeButton
        blur
        preventClose
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Send
            <Text b size={18} css={{ marginLeft: "8px" }}>
              Mail
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
            placeholder="Enter receiver walletAddress"
            onChange={(e) => {
              setReceiverData(e.target.value);
            }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Subject"
            onChange={(e) => {
              setMailSubject(e.target.value);
            }}
          />
          <Textarea
            label="Body"
            placeholder="Enter your amazing ideas."
            onChange={(e) => {
              setMailBody(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={sendMailLoading} onClick={closeHandler}>Close</Button>
          <Button disabled={sendMailLoading} onClick={sendMail}>Send</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
