"use client";

import React, { useState } from "react";
import Input from "./input";

const Main = ({ users }: any) => {
  const [userObj, setUserObj] = useState({});

  return (
    <div>
      <Input userObj={userObj} />
      <div className="pt-3">
        {users.map((item: any, index: number) => (
          <div key={index} className="w-[300px] flex justify-between py-2">
            <div>
              <h1 className="font-semibold text-xl">{item.name}</h1>
              <h3 className="font-medium text-lg">{item.email}</h3>
            </div>
            <button
              className="px-5 bg-purple-400 text-white"
              onClick={() => setUserObj(item)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
