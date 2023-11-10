import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilFolderOpen = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22.78 10.37A1 1 0 0 0 22 10h-2V9a3 3 0 0 0-3-3h-6.28l-.32-1a3 3 0 0 0-2.84-2H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14.4a3 3 0 0 0 2.92-2.35L23 11.22a1 1 0 0 0-.22-.85ZM5.37 18.22a1 1 0 0 1-1 .78H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.56a1 1 0 0 1 1 .68l.54 1.64A1 1 0 0 0 10 8h7a1 1 0 0 1 1 1v1H8a1 1 0 0 0-1 .78Zm14 0a1 1 0 0 1-1 .78H7.21a1.42 1.42 0 0 0 .11-.35L8.8 12h12Z'
  }));
};

export default UilFolderOpen;