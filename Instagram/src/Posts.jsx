import React, { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div>
      {posts.length > 0 ? ( 
        <div>
          {posts.map((posts) =>
            <div key={posts.id}>
              {/* Display the post image */}
              <img src={posts.image} alt="post" />

              {/* Optional: display user profile picture */}
              {/* <img src={posts.user.profile_pic} alt={posts.user.username} /> */}
            </div>
          )}
        </div>
      ) : (
        <div>
          Loading Posts
        </div>
      )}
    </div>
  );
}

export default Posts;
