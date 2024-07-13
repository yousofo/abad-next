export async function POST(request) {
  try {
    const requestData = await request.json();

    const response = await fetch('http://myserverhost-001-site2.dtempurl.com/api/Student/login', {
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

    const data = await response.json();
    console.log(data);

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}