import { Button, IconButton } from "@material-tailwind/react";
import React from "react";
import { IoMdAdd, IoMdPeople, IoMdSettings } from "react-icons/io";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiMenuAlt4, HiStatusOnline } from "react-icons/hi";

const Navbar = () => {
  return (
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
        <IconButton className="icons shadow-none hover:shadow-none bg-primary-600" size="md">
          <IoMdPeople size={18} />
        </IconButton>
        <IconButton className="icons shadow-none hover:shadow-none bg-primary-600" size="md">
          <HiStatusOnline size={18} />
        </IconButton>
        <IconButton className="icons shadow-none hover:shadow-none bg-primary-600" size="md">
          <IoMdSettings size={18} />
        </IconButton>
        <IconButton className="icons shadow-none hover:shadow-none bg-primary-600" size="md">
          <HiMenuAlt4 size={18} />
        </IconButton>
        <Button className="compose rounded-xl h-10 px-4 gap-1 bg-white flex items-center inter text-sm font-semibold text-primary-900 shadow-none hover:shadow-none focus:bg-none capitalize">
          <span className="text-primary-900">
            <IoMdAdd size={16} />
          </span>
          <span>Compose</span>
        </Button>
        <div className="image h-8 w-8 rounded-full overflow-hidden">
          <img src="https://picsum.photos/100" alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
