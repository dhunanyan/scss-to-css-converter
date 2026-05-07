import * as React from 'react';
import { IconPropsType } from './types';

export const Logo = ({ size = 800, color = 'currentColor' }: IconPropsType) => (
  <svg
    height={size}
    width={size}
    id="uuid-e871495f-9743-4599-86a4-cffc259004ba"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    fill={color}
  >
    <g id="uuid-101dcd1f-05ef-42d2-9005-831ed1a52f59">
      <path
        id="uuid-3978f1b6-ab5a-4a5c-855e-88cf5af53a93"
        d="M395.85,170h-195.76c0,52.28,41.29,90.86,93.92,90.86h93.48c71.39,0,130.89,60.8,131.85,131.71l.1,7.43-.1,7.43c-.95,70.91-60.46,131.71-131.85,131.71h-93.48c-52.63,0-93.92,38.58-93.92,90.86h0s195.76,0,195.76,0c126.94,0,229.84-102.23,229.84-228.34v-3.32c0-126.11-102.9-228.34-229.84-228.34Z"
      />
      <circle
        id="uuid-c410741a-8a6e-466b-8120-8a06a228d07a"
        cx="249.31"
        cy="398.86"
        r="75"
      />
    </g>
  </svg>
);
