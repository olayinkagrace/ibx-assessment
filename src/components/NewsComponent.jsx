import formatDistanceToNow from "date-fns/formatDistanceToNow";
import {Link} from 'react-router-dom'

function NewsComponent({ newsItem }) {
  return (
    <div className='m-auto news-component'>
      <div>
        <img src={newsItem.urlToImage} alt='picture' width='100%' />
        {/* <small>Categories</small> */}
      </div>

      <div>
        <h3 className='news-title'>{newsItem.title}</h3>
        <p className='news-author'>{newsItem.author}</p>
        <p className='news-description'>{newsItem.description}...<a href={newsItem.url}> Read more</a> </p>
        <p className='news-time'>
          {formatDistanceToNow(new Date(newsItem.publishedAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
}

export default NewsComponent;
