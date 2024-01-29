import React, {SVGProps} from "react";

interface BiBallotProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiBallot: React.FC<BiBallotProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M17 24H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5v14c0 2.757-2.243 5-5 5M7 2C5.346 2 4 3.346 4 5v14c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3zm11 4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1m0 6a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1m0 6a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1M10 7V5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0 6v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0 6v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1" />
  </svg>
);
export default BiBallot;