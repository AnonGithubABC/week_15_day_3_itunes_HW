import React from 'react';

const SongDetail = (props) => {

  if(!props.song) return null;

  return (
    <h3>
      <p>Song: {props.song.name} </p>
    </h3>
  )
}

export default SongDetail;
