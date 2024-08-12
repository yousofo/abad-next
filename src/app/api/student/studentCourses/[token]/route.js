import { fetchWithCheck } from "@/helperFunctions/dataFetching";

export async function GET(request, { params }) {
  try {
    const { token } = params;
    const tempToken = "3a96b4a5-84c9-4a75-92da-82b99dcdafa2"
    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Home/basic/${tempToken}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return new Response(JSON.stringify(data), {
      status: response.ok ? 200 : 400,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.log("error register")
    return new Response(JSON.stringify({ error: error.message }), {
      status: 402,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}