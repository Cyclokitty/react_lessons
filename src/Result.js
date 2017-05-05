import React from 'react';
import './Result.css';

const Result = (props) => {
  return (
    <div className='Result'>
      {props.counter} clicks!
    </div>
  )
}

export default Result;
