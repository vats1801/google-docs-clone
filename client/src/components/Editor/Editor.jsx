import React, { useEffect, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./Editor.css";
import { io } from "socket.io-client";
import { CiLock } from "react-icons/ci";
import { useParams } from "react-router-dom";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

export default function Editor() {
  const [socket, setSocket] = useState();
  const [quill, setQuill] = useState();
  const { id } = useParams();

  useEffect(() => {
    const quillServer = new Quill("#container", {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
      },
    });
    quillServer.disable();
    quillServer.setText("Loading the document ...");
    setQuill(quillServer);
  }, []);

  useEffect(() => {
    const socketServer = io("http://localhost:9000");
    setSocket(socketServer);
    return () => {
      socketServer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket === null || quill === null) return;

    const handleChange = (delta, oldData, source) => {
      if (source !== "user") return;

      socket && socket.emit("send-changes", delta);
    };
    quill && quill.on("text-change", handleChange);

    return () => {
      quill && quill.off("text-change", handleChange);
    };
  }, [quill, socket]);

  useEffect(() => {
    if (socket === null || quill === null) return;

    const handleChange = (delta) => {
      quill.updateContents(delta);
    };
    socket && socket.on("recieve-changes", handleChange);

    return () => {
      socket && socket.off("recieve-change", handleChange);
    };
  }, [quill, socket]);

  useEffect(() => {
    if ((socket === null, quill === null)) return;

    const interval = setInterval(() => {
      socket && socket.emit("save-document", quill.getContents());
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [socket, quill]);

  useEffect(() => {
    if (quill === null || socket === null) return;
    socket &&
      socket.once("load-document", (document) => {
        quill && quill.setContents(document);
        quill && quill.enable();
      });
    socket && socket.emit("get-document", id);
  }, [quill, socket, id]);

  return (
    <>
      <div className="w-full h-16 px-10 bg-white flex justify-between items-center sticky top-0 z-10 border-b border-gray-300">
        <div className="flex items-center">
          <img
            src="https://th.bing.com/th/id/R.54eb6ec9a704d6b00def42331813f4ac?rik=W%2feM%2b0YChMVXFQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdtafalonso%2fandroid-lollipop%2f512%2fDocs-icon.png&ehk=c2QdCM7aSkeezNf3whqX22qmgbGwpGO28WHQvhbQ3p8%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="h-10 w-10"
          />
          <div>
            <h1 className="  ml-5">Document 1</h1>
            <div className=" flex justify-evenly ml-5 space-x-4 text-xs">
              <p className="hover:text-blue-600">Download</p>
              <p className="hover:text-blue-600">Delete</p>
              <p className="hover:text-blue-600"></p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="  h-10 w-28 bg-blue-600 rounded-full flex pl-3 items-center hover:bg-blue-700 text-white ">
            <CiLock size={20} className=" mr-3" /> Share
          </button>

          <button className=" ml-3 h-10 w-28 bg-blue-600 rounded-full hover:bg-blue-700 text-white ">
            Log out
          </button>
          <img
            src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-10 ml-5 h-10 rounded-full object-contain"
          />
        </div>
      </div>
      <div className="container" id="container"></div>;
    </>
  );
}
