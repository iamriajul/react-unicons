import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilHeartBreak = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.46a1 1 0 0 0 1.42 0l7.45-7.46a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 0 1 5.54-6.45l-1.71 4a1 1 0 0 0 0 .83 1 1 0 0 0 .65.53l2.77.7-1.4 2.89a1 1 0 0 0 .46 1.34 1 1 0 0 0 .44.1 1 1 0 0 0 .9-.56l2-4a1 1 0 0 0 0-.86 1.05 1.05 0 0 0-.67-.55l-2.83-.71 1.45-3.39a4.26 4.26 0 0 1 5.92 6.13Z'
  }));
};

export default UilHeartBreak;