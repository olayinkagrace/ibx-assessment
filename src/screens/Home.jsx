// import { Link } from "react-router-dom";
import {
  Link,
  useSearchParams,
  useLoaderData
} from "react-router-dom";
import NewsComponent from "../components/NewsComponent";
import {useState } from "react";
import ReactPaginate from "react-paginate";
import { getNews } from "../api";
import BodyComponent from "../components/BodyComponent";

export function loader() {
  return  getNews() 
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(0);

  const data = useLoaderData();


  const categoryFilter = searchParams.get("source.name");
  const displayNews = categoryFilter
    ? data.filter((char) => char.source.name.toLowerCase() === categoryFilter)
    : data;

  const newsPerPage = 10;
  const pagesVisited = pageNumber * newsPerPage;

  const showNews = displayNews
    .slice(pagesVisited, pagesVisited + newsPerPage)
    .map((newsItem) => {
      return (
        <Link
          className='text-decoration-none'
          to={`news/${newsItem.title}`}
          key={newsItem.title}
        >
          <div className='text-decoration-none'>
            <NewsComponent newsItem={newsItem} />
          </div>
        </Link>
      );
    });

  const pageCount = Math.ceil(data.length / newsPerPage);

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
      <div className='category mt-2'>
        <button
          className='category-btn'
          onClick={() => handleFilterChange("source.name", null)}
        >
          All News
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

      {data && (
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
      <BodyComponent />
    </section>
  );
}

export default Home;
