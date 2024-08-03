import fetch from 'node-fetch';

export const fetchCache = 'force-no-store';

export async function POST(request) {
  console.log("company services - create request")
  const formData = await request.formData()

  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/CompanySerives/create-company-request`, {
      method: "POST",
      body: formData
    })
    const result = await data.json()
    if (!data.ok) return new Response(JSON.stringify(result), { status: data.status })
    return new Response(JSON.stringify(result));

  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  }
}
