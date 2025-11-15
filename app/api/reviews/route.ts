import { NextResponse } from "next/server";

export async function GET() {
  const placeId = process.env.PLACE_ID!;
  const key = process.env.GOOGLE_PLACES_API_KEY!;
  const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,googleMapsUri,rating,userRatingCount&key=${key}`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return NextResponse.json({ ok:false }, { status: 500 });

  const data = await res.json();
  // Return at most 5 reviews per policy
  const reviews = (data.reviews || []).slice(0, 5);
  return NextResponse.json({
    rating: data.rating,
    count: data.userRatingCount,
    mapsUrl: data.googleMapsUri,
    reviews,
  });
}
