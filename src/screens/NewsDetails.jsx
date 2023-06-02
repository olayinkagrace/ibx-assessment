// import { useEffect, useState } from "react";
import { useState } from "react";
import pics from "../assets/news.png";
import { useParams } from "react-router-dom";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { format } from "date-fns";

function NewsDetails() {
  const params = useParams();
  const { title } = params;
  const [comment, setComment] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [website, setWebsite] = useState("");

  const slice = title.slice(1);

  const allNews = JSON.parse(localStorage.getItem("articles"));
  const theNews = allNews.find((obj) => {
    return obj.title === slice;
  });

  const handleClick = () => {
    setComment(true);
  };

  return (
    <section className='align-items-center container new-details pt-3'>
      <h3 className='fw-bold mt-3'>{theNews.title}</h3>
      <p className='news-time fs-5 mt-3'>
        Published
        {formatDistanceToNow(new Date(theNews.publishedAt), {
          addSuffix: true,
        })}{" "}
        {format(new Date(theNews.publishedAt), "do MMM Y")}
        <br />
        By <strong>{theNews.author}</strong>{" "}
      </p>

      <div>
        <img
          src={theNews.urlToImage ? theNews.urlToImage : pics}
          alt='picture'
          width='100%'
          className='new-details-img'
        />
      </div>
      <div className='py-3'>
        <p className='fw-semi-bold fs-5'>{theNews.description}</p>
      </div>
      <a className="fw-bold fs-6" href={theNews.url}>Read more here...</a>
      {!comment && (
        <div
          className=' d-flex justify-content-center align-items-center'
          onClick={handleClick}
        >
          <button className='comment-btn my-3 align'>
            Click here to comment
          </button>
        </div>
      )}
      {comment && (
        <div>
          <p className='fw-semibold mt-3'>
            Your email address will not be published.
          </p>
          <form className='my-3 text-secondary'>
            <label htmlFor='Name'>Comment</label>
            <textarea
              className='form-control'
              name='Comment'
              id=''
              required={true}
              value={input}
              cols='70'
              rows='6'
              onChange={(e) => setInput(e.target.value)}
            />
            <label htmlFor='Name'>Name</label>
            <input
              className='form-control'
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              type='email'
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor=''>Website</label>
            <input
              className='form-control'
              type='text'
              required={true}
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <div>
              <input type='checkbox' />
              <label className='ms-2 mt-2'>
                Save my details in this broweser for the next time I comment
              </label>
            </div>
            <div>
              <input type='checkbox' />
              <label className='ms-2 mb-2'>
                Yes, add me to your mailing list
              </label>
            </div>
            <div className='text-center justify-content-center align-items-center'>
              <button className='margin-auto mt-3'>Post a comment</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}

export default NewsDetails;
