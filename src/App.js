import React, { Component } from 'react';
import logo from './logo.svg';
import Tweetbox from './Tweetbox';
import './App.css';
import { Icon, Button } from 'reactbulma'

class App extends Component {

  constructor(props) {
    super(props);

    this.state= {
      tweets: ['Hello World!', 'Coderschool is the best!']
    }
  }

  handleTweet(tweet) {
    this.setState({
      tweets: this.state.tweets.concat(tweet)
    });
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }

      likeTweet(e) {
        if(e.innerHTML== "like")
          e.innerHTML="unlike";
        else
          e.innerHTML="like";
      }

      deleteTweet(e) {
        const tweets = Object.assign({}, this.state.tweets);
    const id = e.currentTarget.dataset.id;
    delete tweets[id];
    this.setState({ tweets });
      }

  // deleteTweet(tweet) {
       // do something this will probably be rendered
  //}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CoderSchool React Prework</h1>
        

        </header>
        <div>
          <Tweetbox prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
        </div>
        <div>
          { this.state.tweets.map( tweet =>
              (<p> {tweet} <a onClick={this.deleteTweet}>Like</a> | <a onClick={this.deleteTweet}>Delete</a></p> )
               //put delete button here?
            )}
        </div>
      </div>
    );
  }
}

export default App;
