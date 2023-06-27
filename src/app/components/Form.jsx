"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState(1);
  const [agreement, setAgreement] = useState(false);

  const router = useRouter();

  const sumbitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/meals");
    const meals = await res.json();

    localStorage.setItem("bitropiaMeals", JSON.stringify(meals));
    localStorage.setItem(
      "bitropiaPersData",
      JSON.stringify({
        name,
        email,
        age,
        weight,
        height,
        activityLevel,
        agreement,
      })
    );
    router.push("/results");
  };

  return (
    <form
      className="w-2/5 bg-zinc-900 mx-auto flex flex-col text-xl font-normal px-8 pb-4 text-gray-400 rounded-md"
      onSubmit={sumbitHandler}
    >
      <label className="mt-4">Your name please</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="name"
        name="name"
        placeholder="Name"
        maxLength={100}
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label className="mt-3">We&apos;re gonna need that e-mail too</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="e-mail"
        name="e-mail"
        placeholder="E-mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="mt-3">Keep it coming</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="number"
        name="age"
        min="16"
        max="99"
        placeholder="Age, 16-99 years"
        required
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label className="mt-3">Are You even self aware?</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="number"
        name="weight"
        min="40"
        max="150"
        placeholder="Weight in kilograms"
        required
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <label className="mt-3">Can You reach the top-shelf?</label>
      <input
        className="rounded-md py-1 px-2 text-black font-medium focus:outline-none"
        type="number"
        name="height"
        min="140"
        max="220"
        placeholder="Height, 140-220 cm"
        required
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <label className="mt-3">How tough do You feel?</label>
      <input
        type="range"
        name="activeness"
        min="1"
        max="6"
        step="1"
        required
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
      />
      <label className="mt-3">I hereby wave away all my humanly rights</label>
      <input
        type="checkbox"
        name="agreement"
        required
        className="w-6 h-6 mx-auto mt-2"
        value={agreement}
        onChange={() => setAgreement((agreement) => !agreement)}
      />
      <button className="bg-[#B43A7A] text-black w-3/5 mx-auto rounded-md mt-4 p-1 font-medium">
        Get Control of Your Life
      </button>
    </form>
  );
};

export default Form;
