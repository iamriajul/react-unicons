import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilFileContract = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.2 15c-.2.1-.4.1-.6.2-.1-.2-.2-.4-.3-.5-.8-.7-2-.8-3-.2C8.5 15 8 16 8 17c0 .5.5 1 1 .9.5 0 1-.5 1-1 0-.3.1-.5.3-.7.1 0 .2-.1.3-.1-.3.6-.1 1.3.5 1.7.2.1.3.1.5.1.4 0 .8-.2 1.1-.5.1-.1.3-.2.5-.3.1.4.5.8 1 .8h.8c.6 0 1-.4 1-1 0-.5-.4-.9-.9-1-.1-.2-.1-.3-.3-.5-.3-.3-1-.5-1.6-.4zM20 8.9c0-.1 0-.2-.1-.3v-.1c0-.1-.1-.2-.2-.3l-6-6c-.1-.1-.2-.1-.3-.2h-.1c-.1 0-.2 0-.3-.1H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V8.9c0 .1 0 .1 0 0zm-6-3.5L16.6 8H15c-.6 0-1-.4-1-1V5.4zM18 19c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h5v3c0 1.7 1.3 3 3 3h3v9zm-9-9h1c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1s.4 1 1 1z'
  }));
};

export default UilFileContract;