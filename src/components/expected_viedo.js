import React from 'react';
import VideoListItem from './videolist_item';
var VideoList=(props)=>{
  var itemList=props.videos.map((videos)=>{
    return (<VideoListItem
     key={videos.etag}
     onVideoSelect={props.onVideoSelect}  
      videos={videos} />);
  });
return (
<div>
<ul className='col-md-4 list-group'>
{itemList}
</ul>
</div>
);
};


export default VideoList;
