import { fetchWithCheck } from "@/helperFunctions/dataFetching";

export const fetchCache = 'force-no-store';

export async function GET(request, { params }) {
  try {
    const { token } = params;
    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Home/getByToken?token=${token}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return new Response(JSON.stringify(data));

  } catch (error) {
    console.log("error register")
    return new Response(JSON.stringify({ error: error.message }), {
      status: 402,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}