import React, { Component } from 'react';
import PubSub from '../pubsub';
import { newMessage } from '../actions/messages';

const pubsub = new PubSub();

class PublishMessage extends Component {
  state = { text: '' };

  updateText = event => this.setState({ text: event.target.value });

  publishMessage = () => {
    pubsub.publish(newMessage(this.state.text));
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') this.publishMessage();
  }

  render() {
    return (
      <div>
        <h3>Got something to say?</h3>
        <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
        {' '}
        <button onClick={this.publishMessage}>Publish it!</button>
      </div>
    )
  }
}

export default PublishMessage;
