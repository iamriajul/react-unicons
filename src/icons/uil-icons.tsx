import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilIcons = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.6 10.9c.1.1.2.1.4.1h7c.6 0 1-.4 1-1 0-.2 0-.3-.1-.4l-3.5-7c-.3-.5-.9-.7-1.4-.4-.1.1-.3.2-.4.4l-3.5 7c-.2.4 0 1 .5 1.3zm3.9-5.7L19.4 9h-3.8l1.9-3.8zM6.5 2C4 2 2 4 2 6.5S4 11 6.5 11 11 9 11 6.5 9 2 6.5 2zm0 7C5.1 9 4 7.9 4 6.5S5.1 4 6.5 4 9 5.1 9 6.5 7.9 9 6.5 9zm4.2 4.3c-.4-.4-1-.4-1.4 0l-2.8 2.8-2.8-2.8c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l2.8 2.8-2.8 2.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.8-2.8 2.8 2.8c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-2.8-2.8 2.8-2.8c.4-.4.4-1 0-1.4zM21 13h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1zm-1 7h-5v-5h5v5z'
  }));
};

export default UilIcons;