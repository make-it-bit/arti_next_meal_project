const getMeals = async () => {
  const res = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&app_id=cccf4bab&app_key=0697729895b68a38aee3a528944a33b2&cuisineType=American`
  );
  const data = await res.json();
  console.log(data);
};

export default getMeals;
