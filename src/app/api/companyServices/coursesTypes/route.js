import { fetchWithCheck } from "@/helperFunctions/dataFetching";

export const fetchCache = 'force-no-store';

export async function GET(request, { params }) {
  console.log("CompanySerives - courses types")
  try {
    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/CompanySerives/courses-types`)
    return new Response(JSON.stringify(data), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  }
}
