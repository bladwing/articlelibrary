import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const Api = "http://localhost:5000";

  useEffect(() => {
    setTimeout(() => {
      return getArticle();
    }, 1000);
  }, []);

  const deleteArticle = async (id) => {
    await axios.delete(Api + `/article/deleteById/${id}`).then(function () {
      getArticle();
    });
  };

  const getArticle = async () => {
    const response = await axios.get(Api + "/article");

    setArticles(response.data);
  };

  const ReversedArticle = [...articles].reverse();

  return (
    <div className="row tm-row">
      {ReversedArticle.map((item) => (
        <div className="col-12 col-md-6 tm-post" key={item._id}>
          <hr className="tm-hr-primary" />
          <div className="effect-lily tm-post-link tm-pt-60">
            <div className="tm-post-link-inner">
              <img src="img/img-01.jpg" alt="mage" className="img-fluid" />
            </div>
            {/* <span className="position-absolute tm-new-badge">New</span> */}
            <Link to={`article/${item._id}`}>
              <h2 className="tm-pt-30 tm-color-primary tm-post-title">
                {item.title}
              </h2>
            </Link>
          </div>
          <p className="tm-pt-30">{item.article}</p>
          <div className="d-flex justify-content-between tm-pt-45">
            <span className="tm-color-primary">Travel . Events</span>
            <span className="tm-color-primary">June 24, 2020</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <span>36 comments</span>
            <span>by Admin Nat</span>
            <span>
              <button
                onClick={() => deleteArticle(item._id)}
                className="mb-2 tm-btn tm-btn-primary tm-prev-next"
              >
                Delete
              </button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
