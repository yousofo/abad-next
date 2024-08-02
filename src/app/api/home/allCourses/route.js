import { fetchWithCheck } from "@/helperFunctions/serverFetching";

export const fetchCache = 'force-no-store';
export async function GET(request) {
  try {
    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Home/getAll`)

    // const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Home/getAll`, {
    //   method: "GET",
    //   headers: {
    //     'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    //     'Pragma': 'no-cache',
    //     'Expires': '0',
    //     'Surrogate-Control': 'no-store'
    //   }
    // });
    // const data = await response.json();
    console.log("proxy==========================================")    
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
