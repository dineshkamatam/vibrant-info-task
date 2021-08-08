import React, {useEffect, useState} from "react";
import Axios from "../Axios";
import {withRouter, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import "../css/post.css";
const EditPost = ({history}) => {
  console.log(history);
  let [posts, setPosts] = useState({
    title: "",
    body: "",
    loading: false,
  });
  let {title, body, loading} = posts;
  let {id} = useParams();
  useEffect(() => {
    let fetchData = async () => {
      let data = await Axios.get(`posts/${id}`);
      let existingData = data.data;
      setPosts(existingData);
    };
    fetchData();
  }, [id]);

  let handleChange = (e) => {
    let {name, value} = e.target;
    setPosts({...posts, [name]: value});
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {title, body};
      setPosts({loading: true});
      await Axios.put(`posts/${id}`, data);
      history.push("/");
      toast.success(`successfully post Updated`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    setPosts({loading: false, title: "", details: ""});
  };

  return (
    <section>
      <article>
        <h2>Update Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="enter title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              value={body}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button>{loading === true ? "loading..." : "Update Post"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default withRouter(EditPost);
