import React, {SVGProps} from "react";

interface BiComputerProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiComputer: React.FC<BiComputerProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M19 1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5M5 3h14a3 3 0 0 1 3 3v7H2V6a3 3 0 0 1 3-3m14 14H5a3 3 0 0 1-2.816-2h19.632A3 3 0 0 1 19 17" />
  </svg>
);
export default BiComputer;