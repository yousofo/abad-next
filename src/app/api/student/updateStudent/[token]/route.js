export async function POST(request, { params }) {
  // try {
  const { token } = params;
  const requestData = await request.json()
  console.log("===============================================================")
  console.log(requestData)
  const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Student/update/${token}`, {
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
      status: response.ok ? 200 : 400,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    data = await response.text()
    return new Response(data, {
      status: response.ok ? 200 : 400,
      headers: { 'Content-Type': response.headers.get('Content-Type') },
    });
  }
  // } catch (error) {
  //   console.log("error register")
  //   return new Response(JSON.stringify({ error: error.message }), {
  //     status: 402,
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
}