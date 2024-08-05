export const fetchCache = 'force-no-store';

export async function GET(request) {

  const url = new URL(request.url)
  const token = url.searchParams.get('token');
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Reservations/CheckCourse?tokenCourse=${token}&timestamp=${new Date().getTime()}`, {
      method: "GET",
      cache:"no-store",
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
    const data = await response.json();
    console.log("check course ==============================")
    console.log(data)
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
