import axios from "axios";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Spinner from "./Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://autoicare.in/websiteUser/getBlog"
      )
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, []);
  console.log(posts);
  return (
    <div className="App">
      {loading ? (
        <Spinner />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <BlogList posts={posts} />
      )}
    </div>
  );
}

export default App;
