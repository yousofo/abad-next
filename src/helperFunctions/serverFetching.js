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

/**
 * Fetches a URL with optional caching and error handling.
 *
 * @param {string} url - The URL to fetch.
 * @param {object} [options={}] - Additional options to pass to the fetch request.
 * @param {any} [fallBack] - A fallback value to return if the fetch fails.
 * @return {Promise<any>} - A promise that resolves to the parsed JSON response or the response text.
 * @throws {Error} - If the fetch fails and no fallback value is provided.
 */
export async function fetchWithCheck(url, json, options = {}, fallBack) {
  try {
    const response = await fetch(url, {
      cache: "no-cache",
      ...options,
      headers: {
        ...noCacheHeaders,
        ...options?.headers
      }
    });

    console.log("response.ok")
    console.log(response.ok)

    if (!response.ok) {
      try {
        throw await response.json();
      } catch {
        throw await response.text()
      }
    }

    console.log("fetching ok")

    try {
      return await response.json();
    } catch {
      return await response.text();
    }


  } catch (error) {
    console.error(error);
    if (fallBack) return fallBack
    throw error;
  }
}
