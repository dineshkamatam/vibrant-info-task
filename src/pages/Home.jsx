import React, {useState, useEffect, Fragment} from "react";
import Axios from "../Axios";
import {Link} from "react-router-dom";
import "../css/home.css";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let fetchData = async () => {
      let postData = await Axios.get("posts");
      setPosts(postData.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  let PostData = posts.map((post) => {
    return (
      <Fragment key={post.id}>
        <div className="card-body">
          <div className="card-data">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <footer>
            <h4>Post no.{post.id}</h4>
            <div className="edit">
              <Link to={`/edit-post/${post.id}`}>
                Edit Post <i className="fas fa-pen"></i>
              </Link>
            </div>
          </footer>
        </div>
      </Fragment>
    );
  });

  return (
    <div className="container">
      <h1>Posts</h1>
      {loading === true ? (
        <div>
          <h3>Loading data...</h3>
        </div>
      ) : (
        <div className="card-container">{PostData}</div>
      )}
    </div>
  );
};

export default Home;
