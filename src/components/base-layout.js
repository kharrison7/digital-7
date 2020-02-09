import React, { Component } from 'react';
import '../styles/App.css';
import Header from './header.js';
//A simple component used to pass props.
export default class BaseLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

render() {
    return (
      <div className='pageContents'>
        <Header/>
        <div >
          {this.props.children}
        </div>
      </div>
    )
  }
}