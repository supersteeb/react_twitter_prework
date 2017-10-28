 import React, { Component } from 'react';
 import { Icon, Button } from 'reactbulma'

class TweetBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: "",
			charsRemaining: 140
		};
	}

	handleChange(text) {
		this.setState(
			{
				text: text,
				charsRemaining: 140 - text.length
			});
	}



  render() {
    return (
    	<div>
	      <input type="text" 
	      	placeholder={this.props.prompt}
	      	onChange={e => this.handleChange(e.target.value	)} />
	      <p>
	      	{this.state.charsRemaining}
	      </p>
	      <Button light onClick={() => this.props.onTweet(this.state.text)}
	      	disabled={this.state.charsRemaining < 0}> 

	      Tweet{" "} </Button>
      	</div>
    );
  }
}

export default TweetBox;
