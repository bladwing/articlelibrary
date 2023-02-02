import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Api } from "../../utils/api";
import "./create.scss";

const Create = () => {
  const [title, setTitle] = useState([]);
  const [article, setArticle] = useState([]);
  const [category, setCategory] = useState([]);

  const Submit = async (e) => {
    e.preventDefault();
    const inputs = {
      title,
      article,
      category,
    };

    await axios.post(Api + "/article", inputs).then(function () {
      console.log(inputs);
    });
  };

  return (
    <form onSubmit={Submit}>
      <table>
        <thead>
          <tr>
            <td>
              <h4 className="tm-pt-30 tm-color-primary tm-post-title">Title</h4>
            </td>
            <td>
              <input type="text" onChange={(e) => setTitle(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>Select Category</td>
            <td>
              <select
                name=""
                id=""
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">---</option>
                <option value="programing">Programing</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="tm-pt-30 tm-color-primary tm-post-title">
                Article
              </h4>
            </td>
            <td>
              <textarea
                type="text"
                onChange={(e) => setArticle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </thead>
      </table>
      <section>
        <button className="mb-2 tm-btn tm-btn-primary tm-prev-next">
          Create
        </button>

        <Link to="/" className="mb-2 tm-btn tm-btn-primary tm-prev-next">
          Cancel
        </Link>
      </section>
    </form>
  );
};

export default Create;
