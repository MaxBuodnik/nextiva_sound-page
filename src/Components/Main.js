import React, {Component} from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import {store} from '../Store/Store'

class Albums extends Component {
  render() {
    return (
      <div className='albumView'>
        <div className="upperBlock">
          <Link to="/albumview" onClick={this.props.handleSearch}>
            <h4 style={{textAlign: 'center'}} id={this.props.id}>{this.props.author} - {this.props.album}</h4>
          </Link>
        </div>
        <div className="downBlock">
          <img src={this.props.image} alt={this.props.author}/>
          <ul>
            <li>Label: {this.props.label}</li>
            <li>Genre: {this.props.genre}</li>
            <li>Year of manufacture: {this.props.year}</li>
            <li>Format: {this.props.format}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default class Main extends Component {

  componentDidMount() {
    const {getAlbumsAsync} = this.props;
    getAlbumsAsync();
  }

  render() {
    const {albumsStore} = this.props;

    const showShosenAlbum = (album) => {
      store.dispatch({type: 'SHOW_ALBUM', payload: [album]});
    }

    const handleSearch = (e) => {

      const searchQuery = Number(e.target.id);

      const displayedAlbums = albumsStore.filter((al) => {
        return al.id === searchQuery
      });
      showShosenAlbum(displayedAlbums);
      console.log(searchQuery, 'searchQuery')
    }


    const showAlbums = (
      albumsStore.map(({Author, Album, Image, Label, Genre, Year, Format, id}) => (
        <Albums key={`item-${id}`} author={Author} album={Album} image={Image} label={Label} genre={Genre} year={Year}
                format={Format} id={id} handleSearch={handleSearch}/>
      ))
    );
    return (
      <div className="Main">
        <Header />
        <div className="Albums">
          {showAlbums}
        </div>
      </div>
    )
  }
}

