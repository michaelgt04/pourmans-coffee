import React from 'react';

const PhotoTile = props => {
  return(
    <img src={`${props.photo.images.low_resolution.url}`} className="instagram-photo small-6 medium-2 columns end"/>
  )
}

export default PhotoTile;
