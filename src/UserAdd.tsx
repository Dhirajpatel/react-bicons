import React, {SVGProps} from "react";

interface BiUserAddProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiUserAdd: React.FC<BiUserAddProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M23 11h-2V9a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2M9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6M9 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4M9 14a9.01 9.01 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 14 0 1 1 0 0 0 2 0 9.01 9.01 0 0 0-9-9" />
  </svg>
);
export default BiUserAdd;