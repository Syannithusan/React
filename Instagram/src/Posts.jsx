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
    <div className='d-flex justify-content-center'>
      {posts.length > 0 ? (
        <div>
          {posts.map((posts) =>
            <div className='my-3' key={posts.id}>
              <div className='d-flex'>
                <img className='dp rounded-circle' src={posts.user.profile_pic} alt="profile-pic" />
                <h5>{posts.user.username}</h5>
              </div>
              <img className='image' src={posts.image} alt="" />
              <div>
                <i className="bi bi-heart"></i>
                <i className="bi bi-chat"></i>
                <i className="bi bi-send"></i>
              </div>
              <div>
                <b>{posts.likes}Likes</b>
              </div>
              <p>{posts.caption}</p>
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
