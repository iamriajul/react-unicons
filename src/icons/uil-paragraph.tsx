import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilParagraph = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13,13.5H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

export default UilParagraph;