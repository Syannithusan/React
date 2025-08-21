import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function ViewStory() {

  const { id } = useParams();
  const [story, setStory] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then(data => data.json())
      .then(data => setStory(data))
      .catch(err => console.log(err))

  }, []);
  return (
    <div>
    {story? <div>{story.user.username}</div> : <div>loading</div>}
    </div>
  )
}

export default ViewStory