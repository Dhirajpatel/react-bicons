import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Rank = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
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
      <path d="m20.5,16h-3.5v-2.5c0-1.93-1.57-3.5-3.5-3.5h-3c-1.93,0-3.5,1.57-3.5,3.5v.5h-3.5c-1.93,0-3.5,1.57-3.5,3.5v3c0,1.93,1.57,3.5,3.5,3.5h17c1.93,0,3.5-1.57,3.5-3.5v-1c0-1.93-1.57-3.5-3.5-3.5Zm-11.5-2.5c0-.827.673-1.5,1.5-1.5h3c.827,0,1.5.673,1.5,1.5v8.5h-6v-8.5Zm-7,7v-3c0-.827.673-1.5,1.5-1.5h3.5v6h-3.5c-.827,0-1.5-.673-1.5-1.5Zm20,0c0,.827-.673,1.5-1.5,1.5h-3.5v-4h3.5c.827,0,1.5.673,1.5,1.5v1ZM9.034,7.089c.4-1.212,1.577-2.089,2.966-2.089s2.566.878,2.966,2.089c.149.451-.218.911-.709.911h-4.515c-.491,0-.858-.46-.709-.911Zm.966-5.089c0-1.105.895-2,2-2s2,.895,2,2-.895,2-2,2-2-.895-2-2ZM.034,11.089c.4-1.212,1.577-2.089,2.966-2.089s2.566.878,2.966,2.089c.149.451-.218.911-.709.911H.742c-.491,0-.858-.46-.709-.911Zm.966-5.089c0-1.105.895-2,2-2s2,.895,2,2-.895,2-2,2-2-.895-2-2Zm17.034,7.089c.4-1.212,1.577-2.089,2.966-2.089s2.566.878,2.966,2.089c.149.451-.218.911-.709.911h-4.515c-.491,0-.858-.46-.709-.911Zm.966-5.089c0-1.105.895-2,2-2s2,.895,2,2-.895,2-2,2-2-.895-2-2Z" />
    </svg>
  );
});

Rank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rank.displayName = 'Rank';

export default Rank;