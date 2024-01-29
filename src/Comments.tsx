import React, {SVGProps} from "react";

interface BiCommentsProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiComments: React.FC<BiCommentsProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M24 16v5a3 3 0 0 1-3 3h-5a8 8 0 0 1-6.92-4 11 11 0 0 0 2.242-.248A5.99 5.99 0 0 0 16 22h5a1 1 0 0 0 1-1v-5a5.99 5.99 0 0 0-2.252-4.678A11 11 0 0 0 20 9.08 8 8 0 0 1 24 16m-6.023-6.349A9 9 0 0 0 8.349.023 9.42 9.42 0 0 0 0 9.294v5.04C0 16.866 1.507 18 3 18h5.7a9.42 9.42 0 0 0 9.277-8.349m-4.027-5.6a7.02 7.02 0 0 1 2.032 5.46A7.364 7.364 0 0 1 8.7 16H3c-.928 0-1-1.275-1-1.666v-5.04a7.36 7.36 0 0 1 6.49-7.276Q8.739 2 8.988 2a7 7 0 0 1 4.962 2.051" />
  </svg>
);
export default BiComments;