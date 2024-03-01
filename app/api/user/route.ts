import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await fetch("https://dummyjson.com/user");
    const products = await data.json();
    return NextResponse.json(products); 
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
