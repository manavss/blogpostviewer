/* eslint-disable react/prop-types */

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts &&
        posts.response.map((post) => (
          <div className="blog-post" key={post.id}>
            <h2 className="text-3xl ">{post.title}</h2>
            <p>Author: {post.author}</p>
            <p>Published on: {post.created_date}</p>
            <p>{post.preview_description}</p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
    </div>
  );
}

export default BlogList;
