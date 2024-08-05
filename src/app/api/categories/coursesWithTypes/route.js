import { fetchWithCheck } from "@/helperFunctions/serverFetching";

export const fetchCache = 'force-no-store';

export async function GET(request) {
  try {
    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Category/GetAllCoursesWithType`)

    console.log("GetAllCoursesWithType ==========================================")
    
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
    });
  }
}
