import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilProcessor = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M14,9H10a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,14,9Zm-1,4H11V11h2Zm8,0a1,1,0,0,0,0-2H19V9h2a1,1,0,0,0,0-2H18.82A3,3,0,0,0,17,5.18V3a1,1,0,0,0-2,0V5H13V3a1,1,0,0,0-2,0V5H9V3A1,1,0,0,0,7,3V5.18A3,3,0,0,0,5.18,7H3A1,1,0,0,0,3,9H5v2H3a1,1,0,0,0,0,2H5v2H3a1,1,0,0,0,0,2H5.18A3,3,0,0,0,7,18.82V21a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V18.82A3,3,0,0,0,18.82,17H21a1,1,0,0,0,0-2H19V13Zm-4,3a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8A1,1,0,0,1,8,7h8a1,1,0,0,1,1,1Z'
  }));
};

export default UilProcessor;