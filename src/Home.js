import React, {Component} from 'react'
import './index.css'

export default class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <h1 className='header'>Enter a City name</h1>
        <div className='zipcode-container'>
          <input className='form-control' type='text' placeholder="Los Angeles"/>
          <button className="btn btn-success" type="button">Get Weather</button>
        </div>
      </div>
    )
  }
}

