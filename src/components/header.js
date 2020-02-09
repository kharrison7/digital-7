import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import '../styles/App.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons';
//A simple navigation header.
export default class Header extends Component {
  constructor(props) {
    super(props);
    //for determining the screen width
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


componentWillMount() {
    this.setState({
      block: ""
    });
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}



  render() {
      return (
        <div>
            { console.log("controls menu: "+this.state.width) }
            {this.state.width > 568 &&
      
          <div className="entireHeader" >
            <div id = 'topHeader'>
                <li>
                     <p className='topheadertext' >EN</p>
                     <p className='topheadertext' >Safety</p>
                     <p className='topheadertext' >Help</p>
                     <p className='topheadertext' >Where to Buy/Rent</p>
                     <p className='topheadertext' >Sign In</p>
                </li>
                
            </div>
            <div id = 'bottomHeader' >
                <p className='bottomheadertext' >Solutions</p>
                <div>
                  <input type='search' className="fa fa-search" placeholder='Search' />
                  <i className="fa fa-search"></i>
                </div>
            </div>
          </div>
          } 
          {this.state.width <= 568 &&
              <h1>hamburger menu</h1>
          }
        </div> 
      )
    }
  }