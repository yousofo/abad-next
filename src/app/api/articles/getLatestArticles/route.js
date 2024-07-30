export const fetchCache = 'force-no-store';

export async function GET(request) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Articles/GetLatestArticles`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });


    const data = await response.json();
    console.log("proxy==========================================")
    console.log(data)
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
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
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  }
}