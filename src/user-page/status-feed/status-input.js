import React from 'react';

export default function StatusInput(){
  return(
    <div
      className='statusInputContainer'
    >
      <form
        id='status'
      >
        <input
          type='text'
          form='status'
        />
        <button
          form='status'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
