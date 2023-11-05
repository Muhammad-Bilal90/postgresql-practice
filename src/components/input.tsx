"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

const Input = ({ userObj }: any) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [_id, setId] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSumbit = async () => {
    await fetch("http://localhost:3000/api/add-user", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setFormData({
      name: "",
      email: "",
    });
  };

  const handleUpdate = async () => {
    const { name, email } = formData;
    await fetch("http://localhost:3000/api/add-user", {
      method: "PATCH",
      body: JSON.stringify({ name, email, _id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    setFormData({
      name: "",
      email: "",
    });
    setId("");
  };

  useEffect(() => {
    setFormData({
      name: userObj.name,
      email: userObj.email,
    });
    setId(userObj._id);
  }, [userObj]);

  return (
    <div className="flex flex-col gap-4  py-10">
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter Name..."
        onChange={handleChange}
        className="p-3 border-2 border-solid border-black"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter Email..."
        onChange={handleChange}
        className="p-3 border-2 border-solid border-black"
      />
      {!_id && (
        <button
          className="py-2 px-8 bg-purple-400 text-white"
          onClick={onSumbit}
        >
          Add User
        </button>
      )}

      {_id && (
        <button
          className="py-2 px-8 bg-purple-400 text-white"
          onClick={handleUpdate}
        >
          Update User
        </button>
      )}
    </div>
  );
};

export default Input;
