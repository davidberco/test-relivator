import type { SVGProps } from 'react';

export function CompanyLogoSVG(props: SVGProps<SVGSVGElement>) {
  return (
    // svg for a home button
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   className="feather feather-home"
    //   {...props}
    // >
    //   <path d="M3 9l9-7 9 7v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    //   <polyline points="9 22 9 12 15 12 15 22" />
    // </svg>
    <svg 
      xmlns="http://www.w3.org/2000/svg"   id="Layer_2" data-name="Layer 2" 
      viewBox="0 0 234 335.02"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
    <g id="Layer_4" data-name="Layer 4">
      <g id="Isotype_Inovac_Black" data-name="Isotype Inovac Black">
        <polygon id="letter_I" data-name="letter I" points="130.02 25 156.02 25 156.02 0 130.02 0 104.02 0 78.02 0 78.02 25 104.02 25 104.02 25 104.02 310 104.02 310 78.02 310 78.02 335 104.02 335 130.02 335 156.02 335 156.02 310 130.02 310 130.02 310 130.02 25 130.02 25"/>
        <g id="Parentesis_Right" data-name="Parentesis Right">
          <polygon points="234 .02 234 190.07 208 175.02 208 25.02 182 25.02 182 .02 234 .02"/>
          <polygon points="234 220.07 234 250.07 208 235.07 208 205.07 234 220.07"/>
          <polygon points="234 280.12 234 335.02 182 335.02 182 310.02 208 310.02 208 265.12 234 280.12"/>
        </g>
        <g id="Parentesis_Left" data-name="Parentesis Left">
          <polygon points="26 25.02 26 50.02 26.05 50.02 26.05 69.97 .05 54.97 .05 50.02 0 50.02 0 .02 52 .02 52 25.02 26 25.02"/>
          <polygon points="52.05 310.02 52.05 335.02 .05 335.02 .05 145.02 26.05 160.07 26.05 310.02 52.05 310.02"/>
          <polygon points="26.05 100.02 26.05 130.02 .05 115.02 .05 84.97 26.05 100.02"/>
        </g>
      </g>
    </g>
  </svg>
  );
}