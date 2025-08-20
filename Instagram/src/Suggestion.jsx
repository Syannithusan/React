import React, { useEffect, useState } from 'react'

function Suggestion() {
  const [profile,setProfile]=useState();
  const [suggestion,setSuggestion]=useState();
  
  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then(data => data.json())
    .then(data => setProfile(data))
    .catch(err => console.log(err))

    fetch('http://localhost:3000/suggestion')
    .then(data => data.json())
    .then(data => setSuggestion(data))
    .catch(err => console.log(err))
  },[]);

  return (
    <div>
      {profile ?
      <div className='d-flex'>
        <img className='dp rounded-circle' src={profile.profile_pic} alt="profile-pic" />
        <h5>{profile.username}</h5>
      </div>
      : <p>Loading</p> }
    </div>
  )
}

export default Suggestion