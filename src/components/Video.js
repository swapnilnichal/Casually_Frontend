import React from "react"

const Video = () => {
  return (
    <div className="video-wrapper">
    <video className="video" controls>
      <source src={process.env.PUBLIC_URL + '/brand-video.mp4'} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
};

export default Video;