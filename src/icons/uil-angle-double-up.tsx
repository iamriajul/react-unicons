import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilAngleDoubleUp = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12.71,12.54a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,17L12,14.66,14.29,17a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm-3-1.08L12,9.16l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Z'
  }));
};

export default UilAngleDoubleUp;