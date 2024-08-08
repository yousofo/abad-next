import { fetchWithCheck } from "@/helperFunctions/serverFetching";

export async function POST(request) {
  console.log("student login==============================")
  try {
    const requestData = await request.json();

    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Student/login`, null, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData)
    });

    return new Response(JSON.stringify(data), {
      status: 200,
    });
    // if (response.headers.get('Content-Type').includes('application/json')) {
    //   data = await response.json();
    //   return new Response(JSON.stringify(data), {
    //     status: response.ok ? 200 : 400,
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    // } else {
    //   data = await response.text()
    //   return new Response(data, {
    //     status: response.ok ? 200 : 400,
    //     headers: { 'Content-Type': response.headers.get('Content-Type') },
    //   });
    // }
  } catch (error) {
    console.log("error login")
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
}