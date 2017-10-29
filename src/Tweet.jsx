import React, { Component } from 'react';

class Tweet extends Component {


    render() {
    	let tweet = this.props.tweet;

        return (
            <div class="box">
                {tweet.text}
                <br/>
                <a onClick={() => this.props.handleLike(tweet)}>
                	{tweet.liked ? 'Like' : 'Unlike'} Post
                </a>  | <a onClick={() => this.props.onDelete(tweet)}>Delete</a>
            </div>
        )
    }
}

export default Tweet;