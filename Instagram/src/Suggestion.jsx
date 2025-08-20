import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Fetch profile
    fetch('http://localhost:3000/profile')
      .then(data => data.json())
      .then(data => setProfile(data))
      .catch(err => console.log(err));

    // Fetch suggestions
    fetch('http://localhost:3000/suggestion')
      .then(data => data.json())
      .then(data => setSuggestions(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/* Profile Section */}
      <div className='suggestion w-75'>
        {profile ? (
          <div className='d-flex align-items-center'>
            <img
              className='dp rounded-circle'
              src={profile.profile_pic}
              alt="profile-pic"
              width="50"
              height="50"
            />
            <h5 className='ms-2'>{profile.username}</h5>
            <p className='ms-auto text-primary'>Switch</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Suggestion Header */}
      <div className='d-flex mt-3'>
        <p className='mb-0'>Suggestions for you</p>
        <b className='ms-auto'>See All</b>
      </div>

      {/* Suggestion List */}
      {suggestions.length > 0 ? (
        <div>
          {suggestions.map((suggestion) => (
            <div className='my-1' key={suggestion.id}>
              <div className='d-flex align-items-center'>
                <img className='dp rounded-circle' src={suggestion.profile_pic} alt="suggestion-pic" width="40" height="40"
                />
                <h6 className='ms-2 mb-0'>{suggestion.username}</h6>
                <p className='text-primary'>Follow</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading suggestions...</div>
      )}
    </div>
  )
}

export default Suggestions
