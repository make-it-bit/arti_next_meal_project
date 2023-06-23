"use client";
import { useState } from "react";

const Form = () => {
  return (
    <form className="w-2/5 bg-zinc-900 mx-auto flex flex-col text-xl font-normal px-8 py-4 text-gray-400 rounded-md">
      <label className="mt-3">Name</label>
      <input type="name" name="name" />
      <label className="mt-3">E-mail</label>
      <input type="e-mail" name="e-mail" />
      <label cclassName="mt-3">Age</label>
      <input type="number" name="age" />
      <label className="mt-3">Weight</label>
      <input type="number" name="weight" />
      <label className="mt-3">Height</label>
      <input type="number" name="height" />
      <label className="mt-3">How tough do You feel?</label>
      <input type="range" name="activeness" />
      <label className="mt-3">I hereby wave away all my humanly rights</label>
      <input type="checkbox" name="agreement" />
      <button>Get Control of Your Life</button>
    </form>
  );
};

export default Form;
