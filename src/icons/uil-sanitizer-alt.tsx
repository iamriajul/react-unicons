import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilSanitizerAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14 15h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm2-7V5a1 1 0 0 0-1-1h-1V3h1a1 1 0 0 0 0-2h-4.764a4.593 4.593 0 0 0-4.13 2.553 1 1 0 0 0 1.789.894A2.603 2.603 0 0 1 10.235 3H12v1h-1a1 1 0 0 0-1 1v3a3.003 3.003 0 0 0-3 3v9a3.003 3.003 0 0 0 3 3h6a3.003 3.003 0 0 0 3-3v-9a3.003 3.003 0 0 0-3-3Zm-4-2h2v2h-2Zm5 14a1.001 1.001 0 0 1-1 1h-6a1.001 1.001 0 0 1-1-1v-9a1.001 1.001 0 0 1 1-1h6a1.001 1.001 0 0 1 1 1Z'
  }));
};

export default UilSanitizerAlt;