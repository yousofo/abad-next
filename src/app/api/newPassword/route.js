export async function POST(request) {
  // try {
  const jsonData = request.json()
  console.log("=============================================")
  console.log("new Password")
  const response = await fetch(`http://myserverhost-001-site2.dtempurl.com/api/Student/newPassword`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Surrogate-Control': 'no-store'
    },
    body: JSON.stringify(jsonData)
  });
  // data = await response.json();
  console.log(response)
  return new Response(JSON.stringify(response), {
    headers: { 'Content-Type': 'application/json' },
  });

  // } catch (error) {
  //   console.log("error register")
  //   return new Response(JSON.stringify({ error: error.message }), {
  //     status: 402,
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
}