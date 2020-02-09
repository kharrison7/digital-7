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
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      isLatest: false,
    };
  }
//ideally this would be passed down as a prop to re-render the singleBlock component onClick.
handleButtonClick() {
  this.setState(prevState => ({
      isLatest: !prevState.isLatest
    }));
}

  render() {
   
      return (
        <div>
        {/* <Stylesheet /> */}
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
        </div> 
      )
    }
  }