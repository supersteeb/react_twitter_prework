import React, { Component } from 'react';
import logo from './logo.svg';
import Tweetbox from './Tweetbox';
import Tweet from './Tweet';
import './App.css';
import { Icon, Button } from 'reactbulma';

class App extends Component {

  constructor(props) {
    super(props);

    this.state= {
      tweets: [
      {
      text: 'Hello World!',
      liked: true
      },
      { text: 'Coderschool is the best!',
        liked: false
      }
      ]
    }
  }

  handleTweet(tweet) {
    let tweetObj = {
      text: tweet,
      liked: false
    }

    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text == tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        } 
      }
      return t;
    });

    this.setState({
      tweets
    })
    
  }


  // deleteTweet(tweet) {
       // do something this will probably be rendered
  //}

    deleteTweet(tweet) {
      let tweets = this.state.tweets;
      let index = tweets.indexOf(tweet);
            if (index > -1) {
          tweets.splice(index, 1);
      }

      this.setState([
          tweets
        ])
    }

  render() {
    return (
      <div class="container">
      <div className="App">

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">CoderSchool React Prework</h1>
            </header>
            <div>
              <Tweetbox prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
            </div>

          <div class="box">
            <div class="box is-centered">
              { this.state.tweets.map( (tweet) =>
                  (<Tweet tweet={tweet} 
                    handleLike={this.handleLike.bind(this)} 
                    onDelete={this.deleteTweet.bind(this)} />)
                )}
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
