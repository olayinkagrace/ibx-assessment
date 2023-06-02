export async function getNews() {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&pageSize=100&apiKey=c0d787c3b843412eaaca89c28f6fc0ac";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch news",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json()
  localStorage.setItem('articles', JSON.stringify(data.articles))
  return data.articles
}


