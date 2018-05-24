import React from 'react';
import StatusInput from './status-input';

import './status-feed.css';

export default class StatusFeed extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pastStatuses: [
        {
          status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
          status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        },
        {
          status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        },
      ]
    }
  }
  render(){
    let statuses = this.state.pastStatuses.map((status, index) => {
      return(
        <div
          className='pastStatus'
          id={index}
        >
          <p>{`${status.status}`}</p>
          <div
            className='statusButtons'
          >
            <button
              type='button'
            >
              Like
            </button>
            <button
              type='button'
              //onCLick render comment modal or drop down text field ect.
            >
              Comment
            </button>
            <button
              type='button'
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
    return(
      <div
        className='statusFeedContainer'
      >
        <StatusInput />
        {statuses}
      </div>
    );
  }
}
