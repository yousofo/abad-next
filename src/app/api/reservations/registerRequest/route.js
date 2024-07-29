export async function POST(request) {
  try {
    const requestData = await request.json()

    const result = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Reservations/register-request`, {
      method: "POST",
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Content-Type':'application/json',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      },
      body: JSON.stringify(requestData)
    })

    const resultData = await result.json();

    return new Response(JSON.stringify(resultData), {
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