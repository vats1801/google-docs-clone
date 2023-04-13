import React from "react";

export default function Navbar() {
  return (
    <div className=" w-full h-16 bg-white flex justify-between items-center px-10 sticky top-0">
      <div className="flex items-center">
        <img
          src="https://th.bing.com/th/id/R.54eb6ec9a704d6b00def42331813f4ac?rik=W%2feM%2b0YChMVXFQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdtafalonso%2fandroid-lollipop%2f512%2fDocs-icon.png&ehk=c2QdCM7aSkeezNf3whqX22qmgbGwpGO28WHQvhbQ3p8%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="h-12 w-12"
        />
        <h1 className=" text-2xl ml-3">Airdocs</h1>
      </div>
      <div className="w-1/2 h-10 bg-gray-200 px-5 ">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full bg-inherit rounded-full mr-5 outline-none"
        />
      </div>
      <div className="flex items-center">
        <img
          src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=Ql6UUNosrWAY0w&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-icons-logos-emojis-users-2400.png&ehk=8agkVrs8bo9zafVF9Qk4%2bFqv5IwaEZrb8DwX%2ftfJtNc%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className="w-10 h-10 rounded-full object-contain"
        />
        <button className=" ml-3 h-10 w-28 bg-blue-600 rounded-full hover:bg-blue-700 text-white ">
          Log out
        </button>
      </div>
    </div>
  );
}
