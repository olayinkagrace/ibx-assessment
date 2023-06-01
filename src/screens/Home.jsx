// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import NewsComponent from "../components/NewsComponent";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [news, setNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const fetchData = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=c0d787c3b843412eaaca89c28f6fc0ac"
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

  const categoryFilter = searchParams.get("source.name");
  const displayNews = categoryFilter
    ? news.filter((char) => char.source.name.toLowerCase() === categoryFilter)
    : news;

  const newsPerPage = 10;
  const pagesVisited = pageNumber * newsPerPage;

  const showNews = displayNews
    .slice(pagesVisited, pagesVisited + newsPerPage)
    .map((newsItem) => {
      return (
        <Link
          className='text-decoration-none'
          to={`${newsItem.title}`}
          key={newsItem.title}
        >
          <div className='text-decoration-none'>
            <NewsComponent newsItem={newsItem} />
          </div>
        </Link>
      );
    });

  const pageCount = Math.ceil(news.length / newsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <section>
      <Link to='news'>New</Link>
      <div className='category'>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", null)}
        >
          All News
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "nbc news")}
        >
          NBC News
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "bbc news")}
        >
          BBC News
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "cnn")}
        >
          CNN
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "cbs news")}
        >
          CBS News
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "usa today")}
        >
          USA Today
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "the guardian")}
        >
          The Guardian
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "espn")}
        >
          ESPN
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "cnbc")}
        >
          CNBC
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "spacenews")}
        >
          Space News
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "the verge")}
        >
          The Verge
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "al.com")}
        >
          AL.com
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "associated press")}
        >
          Associated Press
        </button>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", "politico")}
        >
          Politico
        </button>
      </div>
      <div className='d-flex flex-wrap justify-content-between container'>
        <div>
          <h6 className='text-secondary font-italic mt-3 fw-bolder'>
            {categoryFilter ? categoryFilter.toUpperCase() : "All News"}
          </h6>
        </div>
        <div className='dropdown mt-3'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Filter
          </button>
          <ul className='dropdown-menu dropdown-container'>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", null)}
            >
              All News
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "nbc news")}
            >
              NBC News
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "bbc news")}
            >
              BBC News
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "cnn")}
            >
              CNN
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "cbs news")}
            >
              CBS News
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "usa today")}
            >
              USA Today
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "the guardian")}
            >
              The Guardian
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "espn")}
            >
              ESPN
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "cnbc")}
            >
              CNBC
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "spacenews")}
            >
              Space News
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "the verge")}
            >
              The Verge
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "al.com")}
            >
              AL.com
            </button>
            <button
              className='dropdown-btn'
              onClick={() =>
                handleFilterChange("source.name", "associated press")
              }
            >
              Associated Press
            </button>
            <button
              className='dropdown-btn'
              onClick={() => handleFilterChange("source.name", "politico")}
            >
              Politico
            </button>
          </ul>
        </div>
      </div>

      {news && (
        <div className='align-content-center'>
          <div className='d-flex flex-wrap container justify-content-center'>
            {showNews}
          </div>
          <div className='ms-5'>
            <ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName='paginationButtons'
              previousLinkClassName='prevButton'
              nextLinkClassName='nextButton'
              disabledClassName='paginationDisabled'
              activeClassName='paginationActive'
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
