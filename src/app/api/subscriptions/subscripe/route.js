export async function POST(request) {
  try {
    const requestData = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Subscriptions/subscribe`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      },
      body: JSON.stringify(requestData)
    });

    const data = await response.text();
    if (response.status > 299) throw new Error(data)

    return new Response(JSON.stringify(data), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Content-Type': 'application/json',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify( error.message ), {
      status: 409,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  }
}