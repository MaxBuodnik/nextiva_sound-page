import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
  render() {
    const logo = require('../image/nextiva.png');
    return (
      <div className='header'>
        <Link to='/'><img src={logo} alt='Nextiva-logo' /></Link>
        <h1>Sound page</h1>
      </div>
    )
  }
}