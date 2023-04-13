import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function Docbox() {
  const [show, setShow] = useState(false);
  return (
    <div
      className=" w-52 h-60 relative  flex flex-col items-center py-5 border border-gray-300 hover:border hover:border-blue-900"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <div
        className={`absolute top-2 right-2 rounded-lg ${
          !show && "hidden"
        } hover:bg-blue-300 p-2`}
      >
        <AiOutlineDelete size={24} />
      </div>

      <img
        src="https://th.bing.com/th/id/R.54eb6ec9a704d6b00def42331813f4ac?rik=W%2feM%2b0YChMVXFQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdtafalonso%2fandroid-lollipop%2f512%2fDocs-icon.png&ehk=c2QdCM7aSkeezNf3whqX22qmgbGwpGO28WHQvhbQ3p8%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className=" w-3/4 object-contain p-5 "
      />

      <h4 className="mt-5">Document 1</h4>
    </div>
  );
}
