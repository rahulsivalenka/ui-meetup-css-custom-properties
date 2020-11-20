import React from 'react';

import classes from '../code/plain-old-css.module.css';

const PlainOldCss = () => {
  return (
    <div>
      <div class={classes.one}>1:</div>
      <div class={classes.two}>
        2: Text <span class={classes.five}>5 - more text</span>
      </div>
      <input class={classes.three} />
      <textarea class={classes.four}>4: Lorem Ipsum</textarea>
    </div>
  );
};

export default PlainOldCss;
