// import { useEffect, useState } from "react";
import pic from "../assets/pic.jpg";
import { useParams } from "react-router-dom";

function NewsDetails() {
  const params = useParams();
  const { title } = params;

  // const [theNews, setTheNews] = useState('');

  // const fetchNews = () => {
  //   fetch(
  //     `https://newsapi.org/v2/everything?q=apple&title=${title}&apiKey=c0d787c3b843412eaaca89c28f6fc0ac`
  //   )
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setTheNews(data.articles);
  //     });
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, []);
  // console.log(theNews);
  return (
    <section className="align-items-center container new-details pt-3">
      {title}
      <h3 className="fw-bold">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
        nostrum reprehenderit in consequuntur illum neque incidunt quo nemo,
        dolorum maxime!
      </h3>
      <p>Published 14 hours ago on May 30, 2023 <p>By <strong>Lorem, ipsum.</strong></p></p>
      
      <div>
        <img src={pic} alt='picture' width='100%' className="new-details-img" />
      </div>
      <div className="py-3">
        <p className="fw-semi-bold fs-5">
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
      <button className="comment-btn mb-3">Click here to comment</button>
    </section>
  );
}

export default NewsDetails;
