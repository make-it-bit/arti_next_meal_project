"use client";
import { useState } from "react";

const Form = () => {
  return (
    <form className="w-2/5 bg-zinc-900 mx-auto flex flex-col text-xl font-normal px-8 pb-4 text-gray-400 rounded-md">
      <label className="mt-4">Name</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="name"
        name="name"
      />
      <label className="mt-3">E-mail</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="e-mail"
        name="e-mail"
      />
      <label className="mt-3">Age</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="number"
        name="age"
      />
      <label className="mt-3">Weight</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="number"
        name="weight"
      />
      <label className="mt-3">Height</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="number"
        name="height"
      />
      <label className="mt-3">How tough do You feel?</label>
      <input type="range" name="activeness" />
      <label className="mt-3">I hereby wave away all my humanly rights</label>
      <input type="checkbox" name="agreement" />
      <button className="bg-[#B43A7A] text-black w-3/5 mx-auto rounded-md mt-4 p-1 font-medium">
        Get Control of Your Life
      </button>
    </form>
  );
};

export default Form;
