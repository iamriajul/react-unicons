import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilX = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2Zm7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0ZM16 3a1 1 0 0 0 0 2 3 3 0 0 1 3 3v8a3 3 0 0 1-3 3 1 1 0 0 0 0 2 5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z'
  }));
};

export default UilX;