// app/api/proxy.js

export async function GET(request) {
  try {
    const response = await fetch('http://myserverhost-001-site2.dtempurl.com/api/Home/latest');
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}