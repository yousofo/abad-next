import { fetchWithCheck } from "@/helperFunctions/dataFetching";

export const fetchCache = 'force-no-store';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const token = url.searchParams.get('token');
    const data = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Articles/GetArticleDetails?token=${token}`)

    // const response = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Articles/GetArticleDetails?token=${token}`, {
    //   method: "GET",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    //     'Pragma': 'no-cache',
    //     'Expires': '0',
    //     'Surrogate-Control': 'no-store'
    //   }
    // });
    // let data;
    return new Response(JSON.stringify(data));

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
    console.log("error register")
    return new Response(JSON.stringify({ error: error.message }), {
      status: 402,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}