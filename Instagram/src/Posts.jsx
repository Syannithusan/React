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

    </div>
  );
}

export default Posts;
