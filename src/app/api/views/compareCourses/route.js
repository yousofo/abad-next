import { fetchWithCheck, noCacheHeaders } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function GET(request) {
  console.log("CompareCourses");
  
  const requestURL = new URL(request.url);

  const courseNumber= requestURL.searchParams.get("courseNumber");

  try {
    const data =
      await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/ViewsNow/CompareCourses?courseNumber=${courseNumber}
    `);


    return new Response(JSON.stringify(data), {
      headers: {
        ...noCacheHeaders,
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        ...noCacheHeaders,
      },
    });
  }
}