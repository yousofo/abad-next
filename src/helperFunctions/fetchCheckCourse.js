export default async function fetchCheckCourse(courseToken) {
  try {
    const request = await fetch(
      `/api/reservations/checkCourse?token=${courseToken}`,
      {
        method: "GET",
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "Surrogate-Control": "no-store",
        },
      }
    );
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}