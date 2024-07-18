export async function POST(request) {
  // try {
  const jsonData = await request.json()
  console.log("=============================================")
  console.log("new Password")
  const response = await fetch(`https://kh.abadnet.com.sa/api/Student/newPassword`, {
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
  let data = await response.json();
  console.log(data)
  return new Response(JSON.stringify(data), {
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