import { fetchWithCheck } from "@/helperFunctions/dataFetching";

export async function POST(request) {
  console.log("Reservations / add-offline-course");

  try {
    const requestData = await request.json();
    console.log(await requestData)
    const data = await fetchWithCheck(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/api/Reservations/add-offline-course?TokenCourse=${requestData.courseToken}&TokenStudent=${requestData.userToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    return new Response(JSON.stringify(data), {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
