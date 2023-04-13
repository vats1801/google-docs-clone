import React, { useEffect, useState } from "react";
import { GrAdd } from "react-icons/gr";
import Docbox from "../Docbox/Docbox";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Axios from "axios";

export default function Home() {
  const [docs, setDocs] = useState([]);

  return (
    <>
      <Navbar />
      <div className="w-full h-full  ">
        <div className=" w-full h-full space-y-4 bg-gray-100 px-40 py-5">
          <h4 className="ml-2">Start a new document</h4>

          <div className=" bg-white  w-40 h-52 items-center flex flex-col border border-gray-300 justify-center  hover:border-blue-900 hover:border">
            <GrAdd size={60} />
          </div>
        </div>
        <div className="w-full h-full  px-40 py-5">
          <h4 className="ml-2 mb-5">Recent Documents</h4>
          <div className="w-full h-full py-5 flex flex-wrap gap-5">
            <Docbox />;
            <Docbox />
          </div>
        </div>
      </div>
    </>
  );
}
