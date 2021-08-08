import React, {useState} from "react";
import Axios from "../Axios";
import {withRouter} from "react-router-dom";
import {toast} from "react-toastify";
import "../css/post.css";
const AddPost = ({history}) => {
  let [posts, setPosts] = useState({
    title: "",
    body: "",
    loading: false,
  });
  let {title, body, loading} = posts;

  let handleChange = (e) => {
    let {name, value} = e.target;
    setPosts({...posts, [name]: value});
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {title, body};
      setPosts({loading: true});
      await Axios.post("posts/", data);
      history.push("/");
      toast.success(`successfully post created`);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
    setPosts({loading: false, title: "", details: ""});
  };

  return (
    <section>
      <article>
        <h2>Create Post</h2>
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
            <button>{loading === true ? "loading..." : "Create Post"}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default withRouter(AddPost);
