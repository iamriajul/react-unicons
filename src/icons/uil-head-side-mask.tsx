import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilHeadSideMask = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.23 2.003a7.367 7.367 0 0 0-5.453 2.114A7.441 7.441 0 0 0 5.5 9.465l-1.844 2.998a.995.995 0 0 0-.156.52v.04a1 1 0 0 0 .07.347l1.44 3.873c.012.034.027.067.043.099A2.984 2.984 0 0 0 7.736 19H8.5v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 .321-.053l3.7-1.256a.999.999 0 0 0 .018.12l1 3.466A1.001 1.001 0 0 0 18.5 22a1.018 1.018 0 0 0 .277-.04 1 1 0 0 0 .684-1.237l-.924-3.2 1.93-7.267A1.031 1.031 0 0 0 20.5 10v-.228a7.698 7.698 0 0 0-7.27-7.769ZM11.5 17H7.736a.995.995 0 0 1-.874-.513L5.938 14H11.5Zm5.523-1.591L13.5 16.605V13.72l4.345-1.448Zm1.412-5.389a.973.973 0 0 0-.251.031L12.337 12H6.29l1.074-1.747a1 1 0 0 0 .148-.562L7.5 9.5a5.455 5.455 0 0 1 1.67-3.947 5.522 5.522 0 0 1 4-1.55 5.685 5.685 0 0 1 5.33 5.77Z'
  }));
};

export default UilHeadSideMask;