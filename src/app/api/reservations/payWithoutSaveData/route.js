import { fetchWithCheck } from "@/helperFunctions/dataFetching";

export const fetchCache = "force-no-store";

export async function POST(request) {
  console.log("Pay Without Save Data ==============================");

  const url = new URL(request.url);
  const tokenCourse = url.searchParams.get("tokenCourse");
  const TokenStudent = url.searchParams.get("TokenStudent");
  const IsTamar = url.searchParams.get("IsTamar");

  try {
    const responseData = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/api/Reservations/PayWithoutSaveData?tokenCourse=${tokenCourse}&TokenStudent=${TokenStudent}&IsTamar=${IsTamar}&`,
      {
        method: "POST",
      }
    );

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {
      status: 500, headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  }
}