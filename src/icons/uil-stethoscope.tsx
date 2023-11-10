import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilStethoscope = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M19 8a2.993 2.993 0 0 0-1 5.816V15.5a4.5 4.5 0 0 1-9 0v-.59A6.004 6.004 0 0 0 14 9V3a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h1v5a4 4 0 0 1-8 0V4h1a1 1 0 0 0 0-2H3a1 1 0 0 0-1 1v6a6.004 6.004 0 0 0 5 5.91v.59a6.5 6.5 0 0 0 13 0v-1.684A2.993 2.993 0 0 0 19 8Zm0 4a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1Z'
  }));
};

export default UilStethoscope;