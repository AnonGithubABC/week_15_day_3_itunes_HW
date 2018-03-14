import React from 'react'
import SongDetail from '../components/SongDetail';

class SongsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }

  }

  componentDidMount(){
  const request = new XMLHttpRequest()
  let url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json?";
  request.open('GET', url);

  request.addEventListener('load', () => {
    if (request.status !== 200) return;
    const jsonString = request.responseText;
    const songObjects = JSON.parse(jsonString);
    this.setState({songs: songObjects})
  });
  request.send()
}

  render() {

    const songNames = this.state.songs.map(song => song.name)

    return (
    <div>
      <h2>Song Container</h2>
      <SongDetail songNames={songNames} />
    </div>
    );
  }
}

export default SongsContainer;
