import React, { useState,useEffect } from 'react'

function Posts() {
const [posts, setPosts]=useState([]);
useEffect(() => {
  fetch('http://localhost:3000/posts')
    .then((data) => data.json())
    .then((data) => setPosts(data))
    .catch(err => console.log(err))
}, []);

  return (
    <div>
        {posts.length> 0 ? ( 
            <div>
                {posts.map((posts)=>
                <div key={posts.id}>
                  <img className=' dp rounded-circle' src={posts.user.profile_pic} alt="" />
                </div>
                )}
            </div>
        ):(
            <div>
                Loading Posts
            </div>
        )}
    </div>
  )
}

export default Posts