"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bitropiaMeals"));
    setMeals(data);
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-semibold">
        Now here&apos;s some crappy recipes to help You cheer up.
      </h2>
      <ul className="my-6 border-solid border-x-4 border-[#B43A7A] w-2/3 mx-auto rounded">
        {meals.map((meal, id) => (
          <li key={id} className="mb-4">
            <h3 className="text-xl font-medium my-2">{meal.recipe.label}</h3>
            <img
              src={meal.recipe.images.LARGE.url}
              alt={meal.recipe.label}
              loading="lazy"
              className="mx-auto rounded-md w-3/5"
            />
            <button className="bg-[#B43A7A] text-black w-52 mx-auto rounded-md mt-2 p-1 font-medium text-xl h-10">
              Find out more!
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Meals;
