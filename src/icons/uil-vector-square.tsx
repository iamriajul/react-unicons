import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilVectorSquare = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20,16.18V7.82A3,3,0,1,0,16.18,4H7.82A3,3,0,1,0,4,7.82v8.36A3,3,0,1,0,7.82,20h8.36A3,3,0,1,0,20,16.18ZM19,4a1,1,0,1,1-1,1A1,1,0,0,1,19,4ZM5,4A1,1,0,1,1,4,5,1,1,0,0,1,5,4ZM5,20a1,1,0,1,1,1-1A1,1,0,0,1,5,20Zm11.18-2H7.82A3,3,0,0,0,6,16.18V7.82A3,3,0,0,0,7.82,6h8.36A3,3,0,0,0,18,7.82v8.36A3,3,0,0,0,16.18,18ZM19,20a1,1,0,1,1,1-1A1,1,0,0,1,19,20Z'
  }));
};

export default UilVectorSquare;