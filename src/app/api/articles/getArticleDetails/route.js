import { fetchWithCheck } from "@/helperFunctions/dataFetching";

export const fetchCache = 'force-no-store';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Articles/GetArticleDetails?token=${token}`)

    return new Response(JSON.stringify(data));


  } catch (error) {
    console.log("error register")
    return new Response(JSON.stringify({ error: error.message }), {
      status: 402,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}