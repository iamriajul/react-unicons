import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilDataSharing = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.52,3.87A5,5,0,0,0,11.44,4H7A3,3,0,0,0,4,7v4a1,1,0,0,0,2,0V7A1,1,0,0,1,7,6H9.78A3,3,0,0,0,9,8a3,3,0,0,0,3,3h7.33a3.66,3.66,0,0,0,1.19-7.13ZM19.33,9H12a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,5.84-1,1,1,0,0,0,.78.67A1.65,1.65,0,0,1,21,7.33,1.67,1.67,0,0,1,19.33,9ZM19,13a1,1,0,0,0-1,1v3a1,1,0,0,1-1,1H14.74a3.66,3.66,0,0,0-2.22-2.13,5,5,0,0,0-9.45,1.28A3,3,0,0,0,4,23h7.33a3.66,3.66,0,0,0,3.6-3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13Zm-7.67,8H4a1,1,0,0,1,0-2,1,1,0,0,0,1-1,3,3,0,0,1,5.84-1,1,1,0,0,0,.78.67A1.65,1.65,0,0,1,13,19.33,1.67,1.67,0,0,1,11.33,21Z'
  }));
};

export default UilDataSharing;