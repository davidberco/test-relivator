import type { SVGProps } from 'react';

export function CompanyLogoSVG(props: SVGProps<SVGSVGElement>) {
  return (

  <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_2"
      data-name="Layer 2"
      viewBox="0 0 46.8 67"
      
      {...props}
    >
      <g id="Layer_4" data-name="Layer 4">
        <g id="InovacIsotypeColor">
          {/* Red parts (originally .cls-1) */}
          <polygon 
            id="letter_I" 
            data-name="letter I" 
            fill="#AF1510"
            points="26 5 31.2 5 31.2 0 26 0 20.8 0 15.6 0 15.6 5 20.8 5 20.8 5 20.8 62 20.8 62 15.6 62 15.6 67 20.8 67 26 67 31.2 67 31.2 62 26 62 26 62 26 5 26 5"
          />
          
          {/* Gray parts (originally .cls-2) */}
          <g id="Parentesis_Right" data-name="Parentesis Right">
            <polygon fill="#a9a6a6" points="46.8 0 46.8 38.01 41.6 35 41.6 5 36.4 5 36.4 0 46.8 0"/>
            <polygon fill="#a9a6a6" points="46.8 44.01 46.8 50.01 41.6 47.01 41.6 41.01 46.8 44.01"/>
            <polygon fill="#a9a6a6" points="46.8 56.02 46.8 67 36.4 67 36.4 62 41.6 62 41.6 53.02 46.8 56.02"/>
          </g>
          <g id="Parentesis_Left" data-name="Parentesis Left">
            <polygon fill="#a9a6a6" points="5.2 5 5.2 10 5.21 10 5.21 13.99 0 10.99 0 10 0 10 0 0 10.4 0 10.4 5 5.2 5"/>
            <polygon fill="#a9a6a6" points="10.41 62 10.41 67 0 67 0 29 5.21 32.01 5.21 62 10.41 62"/>
            <polygon fill="#a9a6a6" points="5.21 20 5.21 26 0 23 0 16.99 5.21 20"/>
          </g>
        </g>
      </g>
    </svg>
  );
}