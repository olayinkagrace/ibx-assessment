import formatDistanceToNow from "date-fns/formatDistanceToNow";
import pics from "../assets/pic.jpg";
import TextTruncate from "react-text-truncate";
import { FaClock, FaEllipsisV } from "react-icons/fa";

function NewsComponent({newsItem}) {
  return (
    <div className='m-auto news-component my-4 h-auto'>
      <div className="h-50">
        <img src={newsItem.urlToImage} alt='picture' width='100%' className='mb-2'  />
      </div>
      <div>
        <TextTruncate
          className='news-title text-decoration-none'
          line={2}
          element='h6'
          truncateText='…'
          text={newsItem.title}
        />
        <TextTruncate
          line={2}
          element='p'
          truncateText='…'
          text={newsItem.description}
          textTruncateChild={<a href='#'>Read on</a>}
        />
        <p className='news-author fw-semibold'>{newsItem.author}</p>
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
