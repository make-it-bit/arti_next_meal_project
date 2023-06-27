import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const query = new URLSearchParams(req.url);
    const mealId = query.get("http://localhost:3000/api/meal?mealId");

    const res = await fetch(
      `https://api.edamam.com/api/recipes/v2/${mealId}?type=public&app_id=${process.env.EDAMAM_ID}&app_key=${process.env.EDAMAM_KEY}`
    );
    const data = await res.json();

    return NextResponse.json(data);
  } catch (e) {
    return NextResponse.json({ error: "An error occured fetching the meal." });
  }
};
