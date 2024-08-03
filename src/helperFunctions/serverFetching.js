export async function fetchLatestArticles() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/getLatestArticles`)
  return result.json()
}

const noCacheHeaders = {
  // 'Content-Type': 'application/json',
  'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
  'Pragma': 'no-cache',
  'Expires': '0',
  'Surrogate-Control': 'no-store'
}

export async function fetchWithCheck(url, json = true, options = {}, fallBack) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...noCacheHeaders,
        ...options?.headers
      }
    });

    if (!response.ok) {
      throw await response.json();
    }

    if (json) {
      return response.json();
    } else {
      return response.text();
    }
  } catch (error) {
    console.error('Fetch error:', error);
    if (fallBack) return fallBack
    throw error;
  }
}