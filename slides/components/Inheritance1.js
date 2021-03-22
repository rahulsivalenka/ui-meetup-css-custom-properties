import React from 'react';
import classes from '../code/inheritance-1.module.css';

const Inheritance1 = () => {
  return (
    <div style={{ fontSize: '0.4em' }}>
      Here each is a different size based on overridden value:
      <div className={classes.one}>
        One 28px
        <div className={classes.two}>
          Two 10px
          <div className={classes.three}>Three 20px</div>
          <div className={classes.four}>Four 10px</div>
        </div>
      </div>
    </div>
  );
};

export default Inheritance1;
