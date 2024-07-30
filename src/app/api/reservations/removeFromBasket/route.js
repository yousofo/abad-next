export async function DELETE(request) {
  try {
    const url = new URL(request.url)
    const tokenBasket = url.searchParams.get("tokenBasket")
    
    const result = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/Reservations/RemoveFromBasket?tokenBasket=${tokenBasket}`, {
      method: "DELETE",
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Content-Type': 'application/json',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    })

    const resultData = await result.json()

    return new Response(JSON.stringify(resultData), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify(error), {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    })
  }
}