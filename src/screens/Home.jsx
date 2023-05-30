import NewsComponent from "../components/NewsComponent";
import { useEffect, useState } from "react";

function Home() {
  const [news, setNews] = useState([]);

  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2023-05-30&to=2023-05-29&sortBy=popularity&apiKey=c0d787c3b843412eaaca89c28f6fc0ac"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(news);

  return (
    <section>
      <h1>Latest News</h1>
      <div className='d-flex flex-wrap container align-items-center justify-content-center'>
        {news &&
          news.map((newsItem) => (
            <NewsComponent key={newsItem.id} newsItem={newsItem} />
          ))}
      </div>
    </section>
  );
}

export default Home;
