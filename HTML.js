import React, { Component } from "react";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    rightLabel: "Ship",
    image: "http://zamfi.net/img/me.jpg",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    rightLabel: "97C",
    leftPage: "death",
    rightPage: "life"
  },
   ontheship: {
    text:
      "Why are you taking this sh8ip?Take the train!",
    leftLabel: "ok, I wilk take the train.",
    rightLabel: "This is my Ship!",
    leftPage: "onthetrain",
    rightPage: "ontheship"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
    
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
    
  }

  render() {
    var pageData = pages[this.state.page];
   
    return (
      <div className="App">
        <p>{pageData.text}</p>
       <img src={pageData.image} width="200" alt="page-specific i.mage." />
        <p>
          <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
        </p>
      </div>
    );
  }
}

export default App;
