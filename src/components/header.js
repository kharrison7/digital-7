import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
   
    // This styles the outer header boundary and content positions.
    let entireHeader = {
        "width": "100%",
        "display": "block",
        // "listStyleType": "none",
        "justifyContent": "center",
        // "backgroundColor": "#fafafb",
        // "padding": "20px"
    }

    let topHeader = {
        "width": "100%",
        "display": "inline-block",
        // "listStyleType": "none",
        // "justifyContent": "center",
        "backgroundColor": "#181818",
        // "padding": "20px"
        
    }

    let bottomHeader = {
        "width": "100%",
        "display": "inline-block",
        // "listStyleType": "none",
        // "justifyContent": "center",
        
        "backgroundColor": "#fafafb",
        // "padding": "20px"
    }

    let topheadertext = {
        "font":"Public Sans",
        "float": "left",
        "width": "150px",
        "height": "20px",
        "white-space": "nowrap",
        "overflow": "hidden",
        "color": "#ffffff",
        "backgroundColor": "#181818"
    }

    let bottomheadertext = {
        "font":"Public Sans",
        "float": "left",
        "width": "150px",
        "height": "20px",
        "white-space": "nowrap",
        "overflow": "hidden",
        // "color": "#ffffff",
        // "backgroundColor": "#181818"
    }

    let inputsearch = {
        "font":"Public Sans",
        "float": "right",
        "white-space": "nowrap",
        "overflow": "hidden",
        // "color": "#ffffff",
        // "backgroundColor": "#181818"
    }


      return (
        <div className="totalHeader" style={entireHeader}>
            <div id = 'top-header' style={topHeader}>
                <li>
                   {/* <NavLink activeClassName="selected" to="/"> */}
                     <p className='top-header-text' style={topheadertext}>EN</p>
                     <p className='top-header-text' style={topheadertext}>Safety</p>
                     <p className='top-header-text' style={topheadertext}>Help</p>
                     <p className='top-header-text' style={topheadertext}>Where to Buy/Rent</p>
                     <p className='top-header-text' style={topheadertext}>Sign In</p>
                   {/* </NavLink> */}
                </li>
                
            </div>
            <div id = 'bottom-header' style={bottomHeader}>
                <p className='bottom-header-text' style={bottomheadertext}>Solutions</p>
                {/* <li>
                   <NavLink activeClassName="selected" to="/">
                     <input className='btn btn-outline-primary' type='submit' value='Homepage'/>
                   </NavLink>
                </li> */}
                {/* {rightButton} */}
                <div>
                  <input type='search' className='input-search' style={inputsearch} placeholder='Search' />
                </div>
            </div>
        
      </div>
      )
    }
  }