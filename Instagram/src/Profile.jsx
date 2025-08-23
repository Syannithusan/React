import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {
    const [profile,setProfile]=useState(null);
    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then(data => setProfile(data.data))
    })
  return (
    <div className='m-5'>{profile ? (
        <div>
            <img src={profile.profile_pic} className='profile rounded-circle' />
            <h5>{profile.username}</h5>

            <input type="text" 
                    value={profile.username}
                    name="username"
            />
        </div>
    ):(
       <div>loading profile</div> 
    )}
    </div>
  )
}

export default Profile