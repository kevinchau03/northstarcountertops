import { NextResponse } from "next/server";

export async function GET() {
  const placeId = process.env.PLACE_ID!;
  const key = process.env.GOOGLE_PLACES_API_KEY!;

  if (!placeId || !key) {
    return NextResponse.json(
      { ok: false, error: "Missing PLACE_ID or GOOGLE_PLACES_API_KEY" },
      { status: 500 }
    );
  }

  // Use URLSearchParams to avoid manual encoding issues
  const params = new URLSearchParams({
    place_id: placeId,
    key,
    // no trailing comma; include the fields we actually need
    fields: "name,rating,user_ratings_total,reviews,url",
  });

  const url = `https://maps.googleapis.com/maps/api/place/details/json?${params.toString()}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    console.error("Google Places API non-OK response:", text);
    return NextResponse.json({ ok: false, error: "Places API error" }, { status: 502 });
  }

  const data = await res.json();

  if (data.status !== "OK") {
    console.error("Places API returned non-OK status:", data.status, data.error_message);
    return NextResponse.json(
      { ok: false, error: data.error_message || data.status },
      { status: 502 }
    );
  }

  const result = data.result || {};
  const allReviews = result.reviews || [];
  const reviews = allReviews.slice(0, 5); // Google only ever returns up to 5 anyway

  return NextResponse.json({
    ok: true,
    name: result.name || null,
    rating: result.rating ?? null,
    count: result.user_ratings_total ?? 0,
    mapsUrl: result.url || null,
    reviews,
  });
}
