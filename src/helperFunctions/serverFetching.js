export async function fetchLatestArticles() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/articles/getLatestArticles`)
  return result.json()
}