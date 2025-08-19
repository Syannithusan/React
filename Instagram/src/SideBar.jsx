import React from 'react'

function SideBar() {
  return (
    <>
    <div>
      <img className='logo-text' src="src\assets\intagram text.png" alt="" />
      <div><i class="bi bi-house"></i>Home</div>
      <div><i class="bi bi-search-heart"></i>Searh</div>
      <div><i class="bi bi-compass"></i>Explore</div>
      <div><i class="bi bi-play-btn"></i>Reels</div>
      <div><i class="bi bi-chat-dots"></i>Messages</div>
      <div><i class="bi bi-heart"></i>Notification</div>
      <div><i class="bi bi-bag-plus"></i>Create</div>
      <div><i class="bi bi-person-circle"></i>Profile</div>
    </div>
    <div>
      <div><i class="bi bi-threads"></i>Threats</div>
      <div><i class="bi bi-list"></i>More</div>
    </div>
    </>
  )
}

export default SideBar