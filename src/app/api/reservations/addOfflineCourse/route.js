export async function POST(request) {
  try {
    const requestData = await request.json();

    const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Reservations/add-offline-course?TokenCourse=${requestData.courseToken}&TokenStudent=${requestData.userToken}`, {
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

    let data;

    if (response.headers.get('Content-Type').includes('application/json')) {
      data = await response.json();
      return new Response(JSON.stringify(data), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      data = await response.text()
      return new Response(data, {
        status: response.status,
        headers: { 'Content-Type': response.headers.get('Content-Type') },
      });
    }
  } catch (error) {
    console.log("error register")
    return new Response(JSON.stringify({ error: error.message }), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}