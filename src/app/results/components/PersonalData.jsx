"use client";
import { useState, useEffect } from "react";

const PersonalData = () => {
  const [persData, setPersData] = useState({});
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bitropiaPersData"));
    setPersData(data);
  }, []);

  return (
    <section className="bg-[#B43A7A] rounded-md my-8 p-4">
      <div className="w-4/5 mx-auto">
        <h2 className="text-3xl font-semibold">Hello {persData.name},</h2>
        <p className="text-xl mt-4">
          You weigh {persData.weight}kg, are {persData.age} years old and{" "}
          {persData.height}cm tall. By the way You definately aren&apos;t that
          tough. We hereby own all of Your humanly rights, expect junk e-mails
          to get sent to You daily at {persData.email}.
        </p>
      </div>
    </section>
  );
};

export default PersonalData;
