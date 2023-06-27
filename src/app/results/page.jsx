import PersonalData from "./components/PersonalData";
import Meals from "./components/Meals";

export const metadata = {
  title: "Results - brought to You by Bitropia Co.",
  description: "You can finally find out how done You are.",
};

const page = async () => {
  return (
    <main className="text-center m-4">
      <PersonalData />
      <Meals />
    </main>
  );
};

export default page;
