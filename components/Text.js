import React from 'react';

const Text = ({ content, children, as: As, center = true, padding = 10 }) => {
  As = As || 'p';

  const style = center ? { textAlign: 'center' } : {};

  return <As style={{ ...style, padding }}>{content || children}</As>;
};

export default Text;
