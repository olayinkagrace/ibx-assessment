import formatDistanceToNow from "date-fns/formatDistanceToNow";
import pics from "../assets/news.png";
import TextTruncate from "react-text-truncate";
import { FaClock, FaEllipsisV } from "react-icons/fa";

function NewsComponent({ newsItem }) {
  return (
    <div className='news-component m-4'>
      <div className='h-50'>
        <img
          src={newsItem.urlToImage ? newsItem.urlToImage : pics}
          alt='picture'
          width='100%'
          className='mb-2 news-img'
        />
      </div>
      <div>
        <TextTruncate
          className='news-title text-decoration-none fs-4'
          line={2}
          element='h6'
          truncateText='…'
          text={newsItem.title}
        />
        <TextTruncate
        className='fs-5'
          line={2}
          element='p'
          truncateText='…'
          text={newsItem.description}
          textTruncateChild={
            <small className='text-primary text-decoration-underline fs-5'>
              Read more
            </small>
          }
        />
        <p className='news-author fw-semibold fs-6'>Authour: {newsItem.author}</p>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex '>
            <FaClock className='clock' color='orangered' />
            <small className='news-time'>
              {formatDistanceToNow(new Date(newsItem.publishedAt), {
                addSuffix: true,
              })}
            </small>
          </div>
          <FaEllipsisV />
        </div>
      </div>
    </div>
  );
}

export default NewsComponent;
