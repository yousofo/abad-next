export async function POST(request) {
  try {
    const url = new URL(request.url)
    const tokenStudent = url.searchParams.get("tokenStudent")
    const tokenCourse = url.searchParams.get("tokenCourse")

    const result = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Reservations/AddToBasket?tokenCourse=${tokenCourse}&tokenStudent=${tokenStudent}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      },
    });

    const resultData = await result.json()

    return new Response(JSON.stringify(resultData), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Content-Type': 'application/json',
        'Surrogate-Control': 'no-store'
      }
    });

  } catch (error) {
    console.log("error adding to basket")

    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}