import React, {Component} from 'react'
import Header from './Header'
import {store} from '../Store/Store';

class ChosenAlbum extends Component {

  render() {
    console.log(this.props.tracks, 'props')
    return (
      <div className='shosenAlbumView'>
        <h2 style={{textAlign: 'center'}}>{this.props.author} - {this.props.album}</h2>
        <img src={this.props.image} alt={this.props.author}/>
        <ul>
          <li>Label: {this.props.label}</li>
          <li>Genre: {this.props.genre}</li>
          <li>Year of manufacture: {this.props.year}</li>
          <li>Format: {this.props.format}</li>
          <p>Tracks list:</p>
          <ul>
            {this.props.tracks.map((track) => {
              return <li key={track}>{track}</li>
            })}
          </ul>
        </ul>
        <a href={this.props.video}>Video on youtube</a>
      </div>
    )
  }
}

export default class AlbumView extends Component {
  render() {
    const chosenAlbum = store.getState();
    const showAlbum = (
      chosenAlbum.albumsStore.map(([{Author, Album, Image, Label, Genre, Year, Format, id, Tracks, Video}]) => (
        <ChosenAlbum key={`item-${id}`} author={Author} album={Album} image={Image} label={Label} genre={Genre}
                     year={Year}
                     format={Format} id={id} tracks={Tracks} video={Video} />
      ))
    );
    return (
      <div className="shosenAlbum">
        <Header/>
        {showAlbum}
      </div>
    )
  }
}