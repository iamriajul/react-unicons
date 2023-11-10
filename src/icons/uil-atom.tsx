import React from 'react';
import { Props } from '../index';

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilAtom = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,11a1,1,0,1,0,1,1A1,1,0,0,0,12,11Zm7.62,1,.11-.14C21.08,10,21.4,8.29,20.66,7S18.26,5.14,16,5.37l-.18,0C14.91,3.3,13.56,2,12,2S9.09,3.3,8.19,5.4L8,5.37C5.74,5.14,4.08,5.71,3.34,7s-.42,3,.93,4.86l.11.14-.11.14C2.92,14,2.6,15.71,3.34,17,4,18.1,5.27,18.68,7,18.68c.31,0,.63,0,1-.05l.18,0C9.09,20.7,10.44,22,12,22s2.91-1.3,3.81-3.4l.18,0c.34,0,.66.05,1,.05,1.77,0,3.07-.58,3.7-1.68.74-1.29.42-3-.93-4.86ZM5.07,8c.25-.44,1-.68,2-.68l.49,0a14.78,14.78,0,0,0-.35,1.87,15,15,0,0,0-1.45,1.25C5,9.44,4.78,8.5,5.07,8Zm0,8c-.29-.5,0-1.44.67-2.47a15,15,0,0,0,1.45,1.25,14.94,14.94,0,0,0,.35,1.88C6.3,16.74,5.36,16.5,5.07,16ZM12,4c.56,0,1.23.66,1.8,1.83a17.6,17.6,0,0,0-1.8.63,17.6,17.6,0,0,0-1.8-.63C10.77,4.66,11.44,4,12,4Zm0,16c-.56,0-1.23-.66-1.8-1.83a17.6,17.6,0,0,0,1.8-.63,17.6,17.6,0,0,0,1.8.63C13.23,19.34,12.56,20,12,20Zm2.93-6.31c-.46.32-.93.62-1.43.91s-1,.55-1.5.78q-.75-.35-1.5-.78c-.5-.29-1-.59-1.43-.91C9,13.15,9,12.59,9,12s0-1.15.07-1.69c.46-.32.93-.62,1.43-.91s1-.55,1.5-.78q.75.35,1.5.78c.5.29,1,.59,1.43.91,0,.54.07,1.1.07,1.69S15,13.15,14.93,13.69Zm4,2.31c-.29.5-1.23.75-2.47.66a14.94,14.94,0,0,0,.35-1.88,15,15,0,0,0,1.45-1.25C19,14.56,19.22,15.5,18.93,16Zm-.67-5.53a15,15,0,0,0-1.45-1.25,14.78,14.78,0,0,0-.35-1.87l.49,0c1,0,1.73.24,2,.68S19,9.44,18.26,10.47Z'
  }));
};

export default UilAtom;