import React from 'react';
import { connect } from 'react-redux';
import CreateReaction from './CreateReaction';

const MessageBoard = ({ messages }) => {
  return (
    <div>
      {
        messages.items.map(messageItem => {
          const { id, text, timestamp, username } = messageItem;

          return (
            <div key={id}>
              <h4>{new Date(timestamp).toLocaleString()}</h4>
              <p>{text}</p>
              <h4>- {username}</h4>
              <CreateReaction />
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default connect(
  ({ messages }) => ({ messages })
)(MessageBoard);