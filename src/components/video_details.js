import React from 'react';

var VideoDetails=({video})=>{

  if(!video)
  {
    return <div>loding....</div>
  }
var videoId=video.id.videoId;
var videoUrl=`https://www.youtube.com/embed/${videoId}`;

return(
<div className='video-detail col-md-8'>
<div className='embed-responsive embed-responsive-16by9'>
<iframe className='embed-responsive-item' src={videoUrl}></iframe>
</div>
<div className='details'>
<div className='video_title'>{video.snippet.title}
</div>
<div className='video_desc'>{video.snippet.description}</div>
</div>
</div>
);

};

export default VideoDetails;
