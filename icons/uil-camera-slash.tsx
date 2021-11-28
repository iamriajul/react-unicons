import React from 'react';

type Props = {
    /**
     * The color of the icon
     * @default 'currentColor'
     */
    color?: string;
    /**
     * The size of the icon
     * @default 24
     */
    size?: string | number;
} & React.SVGProps<SVGElement>

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilCameraSlash = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M3.71,2.29A1,1,0,0,0,2.29,3.71L5.09,6.5H5a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H19.08l1.21,1.22a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Zm6.49,9.33,2.68,2.68a2,2,0,0,1-.88.2,2,2,0,0,1-2-2A2,2,0,0,1,10.2,11.62ZM5,18.5a1,1,0,0,1-1-1v-8a1,1,0,0,1,1-1H7.07l1.7,1.69A3.92,3.92,0,0,0,8,12.5a4,4,0,0,0,4,4,3.92,3.92,0,0,0,2.32-.77l2.77,2.77Zm14-12H17.72l-.31-1a3,3,0,0,0-2.85-2h-4.4a1,1,0,0,0,0,2h4.4a1,1,0,0,1,.95.68l.54,1.63A1,1,0,0,0,17,8.5h2a1,1,0,0,1,1,1v5.84a1,1,0,1,0,2,0V9.5A3,3,0,0,0,19,6.5Z'
  }));
};

export default UilCameraSlash;