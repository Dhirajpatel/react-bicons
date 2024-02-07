import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BellOff = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...rest}
    >
      <path d="m16.034,21.42c-.725,1.567-2.308,2.58-4.034,2.58-2.3,0-4.198-1.757-4.42-4h-1.529c-1.541,0-2.976-.689-3.939-1.891-.962-1.199-1.324-2.75-.991-4.254l1.323-5.106c.139-.534.683-.855,1.219-.717.535.138.855.684.717,1.219l-1.314,5.071c-.193.875.025,1.812.607,2.536.582.726,1.449,1.142,2.379,1.142h6.949c.552,0,1,.448,1,1s-.448,1-1,1h-3.401c.209,1.136,1.206,2,2.401,2,.949,0,1.82-.557,2.219-1.42.232-.501.829-.718,1.327-.488.501.232.72.826.488,1.328Zm7.673,2.287c-.195.195-.451.293-.707.293s-.512-.098-.707-.293L.293,1.707C-.098,1.316-.098.684.293.293S1.316-.098,1.707.293l3.065,3.065C6.543,1.239,9.178,0,12,0c4.218,0,7.953,2.838,9.082,6.902l1.737,6.714c.42,1.515.112,3.121-.849,4.388-.375.493-.824.903-1.329,1.222l3.066,3.066c.391.391.391,1.023,0,1.414ZM6.194,4.78l12.971,12.971c.474-.205.888-.529,1.211-.954.581-.766.768-1.736.511-2.662l-1.736-6.714c-.885-3.184-3.827-5.42-7.15-5.42-2.286,0-4.413,1.029-5.806,2.78Z" />
    </svg>
  );
});

BellOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BellOff.displayName = 'BellOff';

export default BellOff;