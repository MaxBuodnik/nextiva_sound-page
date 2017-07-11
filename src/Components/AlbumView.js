import React, {Component} from 'react'
import Header from './Header'
import {store} from '../Store/Store';

class ChosenAlbum extends Component {

  render() {
    return (
      <div className='shosenAlbumView'>
        <h4 style={{textAlign: 'center'}}>{this.props.author} - {this.props.album}</h4>
        <img src={this.props.image} alt={this.props.author}/>
        <ul>
          <li>Label: {this.props.label}</li>
          <li>Genre: {this.props.genre}</li>
          <li>Year of manufacture: {this.props.year}</li>
          <li>Format: {this.props.format}</li>
        </ul>
      </div>
    )
  }
}

export default class AlbumView extends Component {
  render() {
    const chosenAlbum = store.getState();
    const showAlbum = (
      chosenAlbum.albumsStore.map(([{Author, Album, Image, Label, Genre, Year, Format, id}]) => (
        <ChosenAlbum key={`item-${id}`} author={Author} album={Album} image={Image} label={Label} genre={Genre}
                     year={Year}
                     format={Format} id={id}/>
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