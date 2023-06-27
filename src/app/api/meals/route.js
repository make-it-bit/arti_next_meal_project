import { NextResponse } from "next/server";

//keeping the req in there so it wouldnt be a static endpoint
export const GET = async (req) => {
  try {
    const res = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.EDAMAM_ID}&app_key=${process.env.EDAMAM_KEY}&cuisineType=American`
    );
    const data = await res.json();
    const recipes = data.hits.splice(0, 3);
    return NextResponse.json(recipes);
  } catch (e) {
    return NextResponse.json({ error: "An error occured fetching the meal." });
  }
};
