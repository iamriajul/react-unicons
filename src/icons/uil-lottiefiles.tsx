import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilLottiefiles = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17 6c-2.8 0-4.4 2.8-5.9 5.5C9.9 13.8 8.7 16 7 16c-.6 0-1 .4-1 1s.4 1 1 1c2.8 0 4.4-2.8 5.9-5.5C14.1 10.2 15.3 8 17 8c.6 0 1-.4 1-1s-.4-1-1-1zm2-4H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3zm1 17c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v14z'
  }));
};

export default UilLottiefiles;