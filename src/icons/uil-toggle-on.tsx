import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilToggleOn = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M16,8.5A3.5,3.5,0,1,0,19.5,12,3.5,3.5,0,0,0,16,8.5Zm0,5A1.5,1.5,0,1,1,17.5,12,1.5,1.5,0,0,1,16,13.5ZM16,5H8A7,7,0,0,0,8,19h8A7,7,0,0,0,16,5Zm0,12H8A5,5,0,0,1,8,7h8a5,5,0,0,1,0,10Z'
  }));
};

export default UilToggleOn;