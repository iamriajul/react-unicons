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
const Uil500px = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M7,15.14a1.41,1.41,0,0,0,.17.44,6.28,6.28,0,0,0,1.39,2.08,6.67,6.67,0,0,0,2.09,1.4,6.21,6.21,0,0,0,2.54.52,6.29,6.29,0,0,0,2.55-.52,6.63,6.63,0,0,0,2.08-1.4,6.39,6.39,0,0,0,1.41-2.08A6.55,6.55,0,0,0,19.69,13a6.76,6.76,0,0,0-.51-2.56,6.35,6.35,0,0,0-1.41-2.07,6.46,6.46,0,0,0-4.63-1.92A6.63,6.63,0,0,0,10.56,7a7.09,7.09,0,0,0-1.2.68,7.14,7.14,0,0,0-1.14.94h0V3.23h9.05c.22,0,.34-.21.34-.62S17.48,2,17.26,2H7.47a.37.37,0,0,0-.3.13.4.4,0,0,0-.12.29V10a.39.39,0,0,0,.17.3,1.09,1.09,0,0,0,.41.18.73.73,0,0,0,.43,0,.92.92,0,0,0,.24-.11,1,1,0,0,0,.14-.17l0,0a6.9,6.9,0,0,1,.86-1,5.15,5.15,0,0,1,3.79-1.56A5.15,5.15,0,0,1,16.9,9.25,5.17,5.17,0,0,1,18.48,13a5.31,5.31,0,0,1-.41,2A5.36,5.36,0,0,1,15.17,18a5.4,5.4,0,0,1-2.06.4,5.09,5.09,0,0,1-2.7-.75V13a2.66,2.66,0,0,1,.71-1.79,2.53,2.53,0,0,1,2-.89,2.65,2.65,0,0,1,2,.79A2.55,2.55,0,0,1,15.87,13a2.73,2.73,0,0,1-2.77,2.74l-.34,0-.37-.07-.15,0c-.21-.06-.37.1-.49.48s-.07.6.14.68a4.34,4.34,0,0,0,1.25.18,3.84,3.84,0,0,0,2.8-1.16A3.81,3.81,0,0,0,17.1,13a3.73,3.73,0,0,0-1.16-2.78,3.8,3.8,0,0,0-2.8-1.15,3.86,3.86,0,0,0-2.82,1.15,3.57,3.57,0,0,0-1.14,2.59v3.8h0a5.63,5.63,0,0,1-1.08-1.86c-.08-.21-.3-.25-.67-.13s-.55.29-.48.49Zm6.25-11a8.16,8.16,0,0,0-3.34.64A.25.25,0,0,0,9.68,5a1.26,1.26,0,0,0,.09.43c.14.35.3.48.5.41a8.09,8.09,0,0,1,2.93-.55,7.54,7.54,0,0,1,3.08.63A8.67,8.67,0,0,1,18.59,7.4a.25.25,0,0,0,.18.08c.09,0,.24-.1.43-.29L19.39,7a.37.37,0,0,0,.06-.21.3.3,0,0,0-.1-.2,8.62,8.62,0,0,0-2.62-1.69A9,9,0,0,0,13.2,4.14Zm-1.61,9.91a.46.46,0,0,0,.2.33l0,0a.52.52,0,0,0,.35.18.24.24,0,0,0,.17-.06l.73-.73.7.68a.28.28,0,0,0,.21.11.58.58,0,0,0,.36-.19c.2-.21.23-.39.07-.55l-.7-.7.74-.74c.12-.12.08-.29-.13-.49s-.4-.27-.53-.14l-.73.72-.72-.74a.3.3,0,0,0-.15-.05.56.56,0,0,0-.34.2c-.23.22-.28.38-.16.5l.74.74-.74.72A.35.35,0,0,0,11.59,14.05Zm7.93,4.57a1.24,1.24,0,0,0-.37-.25.28.28,0,0,0-.28.07l-.07.07a8,8,0,0,1-2.51,1.69,7.94,7.94,0,0,1-8.68-1.69A7.48,7.48,0,0,1,5.91,16a9.33,9.33,0,0,1-.51-1.77.1.1,0,0,0,0,0c0-.21-.25-.29-.63-.23s-.56.2-.53.4a8.52,8.52,0,0,0,.6,2.11,8.84,8.84,0,0,0,2,2.88,9,9,0,0,0,2.89,2,9.13,9.13,0,0,0,3.54.71,9.28,9.28,0,0,0,3.54-.71,9,9,0,0,0,2.89-2l.06-.06C19.85,19.11,19.78,18.89,19.52,18.62Z'
  }));
};

export default Uil500px;