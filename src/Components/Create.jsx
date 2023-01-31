import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState([]);
  const [article, setArticle] = useState([]);
  const Api = "http://localhost:5000";
  const Submit = async (e) => {
    e.preventDefault();
    const inputs = {
      title,
      article,
    };

    await axios.post(Api + "/article", inputs).then(function () {});
  };

  return (
    <div
      style={{
        margin: "5% auto",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        width: "300px",
      }}
    >
      <form onSubmit={Submit}>
        <h4 className="tm-pt-30 tm-color-primary tm-post-title"> Article title</h4>

        <input type="text" onChange={(e) => setTitle(e.target.value)} />

        <h4 className="tm-pt-30 tm-color-primary tm-post-title">Article</h4>

        <textarea
          type="text"
          onChange={(e) => setArticle(e.target.value)}
          style={{
            margin: "5% auto",
            textAlign: "center",
            maxWidth: "300px",
            maxHeight: "250px",
            height: "300px",
            width: "300px",
          }}
        />

        <button className="mb-2 tm-btn tm-btn-primary tm-prev-next">
          Create
        </button>
        <Link to="/" className="mb-2 tm-btn tm-btn-primary tm-prev-next">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default Create;
