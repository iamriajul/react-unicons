import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilTachometerFastAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12 5a10 10 0 0 0-8.66 15 1 1 0 0 0 1.74-1A7.92 7.92 0 0 1 4 15a8 8 0 1 1 14.93 4 1 1 0 0 0 .37 1.37 1 1 0 0 0 1.36-.37A10 10 0 0 0 12 5Zm2.84 5.76-1.55 1.54A2.91 2.91 0 0 0 12 12a3 3 0 1 0 3 3 2.9 2.9 0 0 0-.3-1.28l1.55-1.54a1 1 0 0 0 0-1.42 1 1 0 0 0-1.41 0ZM12 16a1 1 0 0 1 0-2 1 1 0 0 1 .7.28 1 1 0 0 1 .3.72 1 1 0 0 1-1 1Z'
  }));
};

export default UilTachometerFastAlt;