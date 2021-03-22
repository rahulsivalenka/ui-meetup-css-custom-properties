import React from 'react';
import classes from '../code/css-custom-properties-1.module.css';

const CustomProperties = () => {
  return (
    <div>
      <div className={classes.one}>1:</div>
      <div className={classes.two}>
        2: Text <span className={classes.five}>5 - more text</span>
      </div>
      <input className={classes.three} />
      <textarea className={classes.four}>4: Lorem Ipsum</textarea>
    </div>
  );
};

export default CustomProperties;
