import Link from "next/link";

const getMealData = async (mealId) => {
  const res = await fetch(`http://localhost:3000/api/meal?mealId=${mealId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.recipe;
};

const page = async ({ params: { mealId } }) => {
  const mealData = await getMealData(mealId);

  return (
    <div className="text-center backdrop-blur-md bg-white/20 my-12 w-4/5 mx-auto p-8 rounded-md">
      <header>
        <h1 className="text-4xl font-semibold">{mealData?.label}</h1>
      </header>
      <main>
        <img
          src={mealData.image}
          alt={mealData.label}
          className="mx-auto rounded-md my-4"
        />
        <ul className="my-6 border-solid border-x-4 border-[#B43A7A] w-2/3 mx-auto rounded">
          {mealData?.ingredients.map((ingredient, i) => (
            <li key={i}>
              <p>{ingredient.text}</p>
            </li>
          ))}
        </ul>
        <Link
          href={mealData.url}
          target="_blank"
          rel="noopener norefferer"
          className="block bg-[#B43A7A] text-black w-52 mx-auto rounded-md p-1 mt-2 font-medium text-2xl h-10"
        >
          More
        </Link>
      </main>
    </div>
  );
};

export default page;
