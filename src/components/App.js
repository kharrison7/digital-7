import React, { Component } from 'react';
import '../styles/App.css';
// import '../styles/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BaseLayout from './base-layout';
import Homepage from './homepage.js';
// import SingleBlock from './singleBlock.js'
// import SingleTransaction from './singleTransaction.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      block: "",
      width: 0, 
      height: 0
    };
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
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" render={(props) => ( <Homepage /> )} />
            {/* <Route path="/product/:value" render={(props) => ( <Product {...props}/> )} /> */}
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;