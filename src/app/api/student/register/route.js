export async function POST(request) {
  try {

    const requestData = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Student/register`, {
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

    if (response.headers.get('Content-Type').includes('application/json')) {
      let data = await response.json();
      return new Response(JSON.stringify(data), {
        status: response.ok ? 200 : 400,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      let data = await response.text()
      return new Response(data, {
        status: response.ok ? 200 : 400,
        headers: { 'Content-Type': response.headers.get('Content-Type') },
      });
    }

  } catch (error) {
    console.log("error register")
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}