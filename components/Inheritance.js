import React from 'react';

import classes from '../code/inheritance.module.css';

const Inheritance = () => {
  return (
    <div style={{ fontSize: '0.4em' }}>
      All of the below text are 28px in size:
      <div className={classes.one}>
        One: Lorem ipsum.
        <div className={classes.two}>
          Two: Lorem ipsum.
          <div className={classes.three}>Three: Lorem ipsum dolor.</div>
          <div className={classes.four}>Four: Lorem ipsum dolor sit.</div>
        </div>
      </div>
    </div>
  );
};

export default Inheritance;
