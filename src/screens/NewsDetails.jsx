// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import pic from "../assets/pic.jpg";
import { useParams } from "react-router-dom";

function NewsDetails() {
  const params = useParams();
  const { title } = params;

  const [theNews, setTheNews] = useState("");
  const [comment, setComment] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [input, setInput] = useState("");
  const [error, seterror] = useState(null);

  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?qsearchIn=title=${title}}&apiKey=c0d787c3b843412eaaca89c28f6fc0ac`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTheNews(data.articles);
      });
  };

  useEffect(() => {
    fetchNews();
  }, [title]);

  const handleClick = () => {
    setComment(true);
  };

  const handleChange = (e) => {
    e.preventDefault()
  };
  console.log(theNews);
  return (
    <section className='align-items-center container new-details pt-3'>
      {title}
      <h3 className='fw-bold'>{title}</h3>
      <p>
        Published 14 hours ago on May 30, 2023{" "}
        <p>
          By <strong>Lorem, ipsum.</strong>
        </p>
      </p>

      <div>
        <img src={pic} alt='picture' width='100%' className='new-details-img' />
      </div>
      <div className='py-3'>
        <p className='fw-semi-bold fs-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora,
          explicabo amet rem, aperiam in blanditiis minima ducimus dolor aut,
          est accusamus vero. Voluptate, optio. Cupiditate quae voluptatibus
          odit eligendi, sint recusandae quibusdam quos sit earum sapiente
          pariatur, suscipit nesciunt reprehenderit culpa odio iste ipsam
          reiciendis quaerat in perferendis maxime hic obcaecati! Ex a sapiente
          optio dicta? Saepe sunt consequuntur veniam ut aliquam accusamus
          molestiae minus numquam ab vel? Laudantium, praesentium! Nihil sint
          numquam labore earum! Veniam similique cumque vel doloribus
          repudiandae ipsa nesciunt at architecto tenetur. Aspernatur quas
          commodi fugit ex modi sint doloribus accusantium voluptates natus?
          Ullam, possimus ipsa!
        </p>
      </div>
      {!comment && (
        <div
          className=' d-flex justify-content-center align-items-center'
          onClick={handleClick}
        >
          <button className='comment-btn mb-3 align'>
            Click here to comment
          </button>
        </div>
      )}
      {comment && (
        <div>
          <p className="fw-semibold">Your email address wii not be published.</p>
          <form className='my-3 text-secondary'>
        <label htmlFor='Name'>Comment</label>
        <textarea
          className='form-control'
          name='Comment'
          id=''
          cols='70'
          rows='6'
        />
        <label htmlFor='Name'>Name</label>
        <input
          className='form-control'
          id='name'
          type='text'
          value={name}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          className='form-control'
          type='email'
          value={email}
          onChange={handleChange}
        />
        <label htmlFor=''>Website</label>
        <input
          className='form-control'
          type='email'
          value={email}
          onChange={handleChange}
        />
        <div>
        <input type='checkbox' />
        <label className="ms-2 mt-2">
          Save my name, email and website in this broweser for the next time I
          comment
        </label>
        </div>
        <div>
        <input type='checkbox' />
        <label className="ms-2 mb-2">
          Yes, add me to your mailing list
        </label>
        </div>
        <button className="margin-auto">Post a comment</button>
      </form>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
        </div>
      )}
    </section>
  );
}

export default NewsDetails;
