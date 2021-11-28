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
const UilFileExport = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20.92,15.62a1.15,1.15,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L17.59,15H12a1,1,0,0,0,0,2h5.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a.93.93,0,0,0,.21-.33A1,1,0,0,0,20.92,15.62ZM14,20H6a1,1,0,0,1-1-1V5A1,1,0,0,1,6,4h5V7a3,3,0,0,0,3,3h4a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.09,0L12.06,2H6A3,3,0,0,0,3,5V19a3,3,0,0,0,3,3h8a1,1,0,0,0,0-2ZM13,5.41,15.59,8H14a1,1,0,0,1-1-1Z'
  }));
};

export default UilFileExport;