import { useRouter } from "next/navigation";

export const metadata = {
  title: "Results - brought to You by Bitropia Co.",
  description: "You can finally find out how done You are.",
};

const Product = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);
  return <h1>Data</h1>;
};

const page = async () => {
  const res = await fetch("http://localhost:3000/api/meals");
  const data = await res.json();
  console.log(data);
  console.log();
  return (
    <div>
      <h1>Text</h1>
    </div>
  );
};

export default page;
