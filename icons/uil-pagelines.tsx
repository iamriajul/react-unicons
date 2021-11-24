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
const UilPagelines = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M18.88513,13.9928c1.75031-.90125,2.28143-3.34961,2.28143-3.34961s-2.30407-.99011-4.05438-.08557a4.20627,4.20627,0,0,0-1.6983,1.82245,8.96489,8.96489,0,0,0,.05957-.99012A6.99283,6.99283,0,0,0,17.056,6.66437C16.71191,3.90131,13.70972,2,13.70972,2s-2.44165,2.58258-2.0943,5.34906a6.81877,6.81877,0,0,0,2.51721,4.03168,9.32236,9.32236,0,0,1-.0755,1.0094,4.39594,4.39594,0,0,0-1.90051-2.05823c-1.77375-.85248-4.04847.20306-4.04847.20306s.60328,2.43164,2.37623,3.28412a4.72048,4.72048,0,0,0,3.25811.0755,9.43336,9.43336,0,0,1-1.45831,2.90064,4.39341,4.39341,0,0,0-2.01209-1.98017c-1.81323-.76355-4.02838.40357-4.02838.40357s.72077,2.40222,2.53656,3.16241a3.744,3.744,0,0,0,1.73432.2425,9.41862,9.41862,0,0,1-5.84412,2.03222.67212.67212,0,0,0,0,1.34424,10.78608,10.78608,0,0,0,7.96777-3.52661,4.9541,4.9541,0,0,0,3.33613,1.19317c1.96008-.20648,3.34033-2.29821,3.34033-2.29821s-1.793-1.75287-3.74976-1.54309a3.53922,3.53922,0,0,0-1.36011.45562,10.74367,10.74367,0,0,0,.89441-2.27472A5.15338,5.15338,0,0,0,18.88513,13.9928Z'
  }));
};

export default UilPagelines;