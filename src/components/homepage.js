import React, { Component } from 'react';
import '../styles/App.css';
import request from 'superagent';

export default class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blocks: [],
      fullDate: null,
      totalNumberOfBlocks: 0
    };
  }

  componentWillMount() {
    let date = Date.now();
    //makes a request to the API for all the blocks for one day.
       request
         .get("https://cors-anywhere.herokuapp.com/https://blockchain.info/blocks/"+date+"?format=json")
         // .get("https://cors-anywhere.herokuapp.com/https://blockchain.info/latestblock")
         .end((err, res) => {
           if (err) {
             console.log("failed to get blocks!");
            //  this.setState({error: res.body.error});
           } else {
            console.log("response received");
            console.log(res);
            console.log("res.body: "+res.body);
            if(res.body !== null){
              console.log("blocks received");
              console.log(res.body.blocks);
              console.log(res.header.date);
              let myDate = Date(res.header.date);
              this.setState({blocks: res.body.blocks, fullDate: myDate});
            }
           }
         })
  }

  render() {
      let fullDate = this.state.fullDate;
      return (
        <div className="containment-for-homepage">
          <section className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card">
                <div className="card-block">
                  <h5>Number: {this.state.blocks.length}</h5>
                  <h5>Today is: {fullDate}</h5>
                  <hr />
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
  }