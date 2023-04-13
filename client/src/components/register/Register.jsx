import React from "react";
import { BsGoogle } from "react-icons/bs";

export default function Register() {
  return (
    <div className="flex">
      <div className="w-1/2 h-screen flex flex-col items-center justify-center bg-blue-600">
        <div className="flex flex-col space-y-4 p-5 bg-white w-1/2 ">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            className="w-full h-10 border border-blue-600 p-2"
          />
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="Password"
            className="w-full h-10 border border-blue-600 p-2"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="text"
            placeholder="Confirm Password"
            className="w-full h-10 border border-blue-600 p-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 h-10  text-white hover:bg-blue-900"
          >
            Log in
          </button>
          <p className=" self-center">
            Already have an account ?{" "}
            <span className="text-blue-600">Sign up</span>
          </p>
          <p className="self-center">Or</p>
          <button
            type="submit"
            className="w-full bg-blue-600 h-10 text-white hover:bg-blue-900"
          >
            <BsGoogle size={24} className="!ml-auto !mr-auto" />
          </button>
        </div>
      </div>
      <div className="w-1/2 h-screen flex items-center justify-center ">
        <img
          src="https://th.bing.com/th/id/R.54eb6ec9a704d6b00def42331813f4ac?rik=W%2feM%2b0YChMVXFQ&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdtafalonso%2fandroid-lollipop%2f512%2fDocs-icon.png&ehk=c2QdCM7aSkeezNf3whqX22qmgbGwpGO28WHQvhbQ3p8%3d&risl=&pid=ImgRaw&r=0"
          alt=""
          className=" w-1/2 h-1/2"
        />
      </div>
    </div>
  );
}
