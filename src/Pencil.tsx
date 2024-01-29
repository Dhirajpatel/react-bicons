import React, {SVGProps} from "react";

interface BiPencilProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiPencil: React.FC<BiPencilProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M22.853 1.148a3.626 3.626 0 0 0-5.124 0L1.465 17.412A4.97 4.97 0 0 0 0 20.947V23a1 1 0 0 0 1 1h2.053a4.97 4.97 0 0 0 3.535-1.464L22.853 6.271a3.626 3.626 0 0 0 0-5.123M5.174 21.122A3.02 3.02 0 0 1 3.053 22H2v-1.053a2.98 2.98 0 0 1 .879-2.121L15.222 6.483l2.3 2.3ZM21.438 4.857l-2.506 2.507-2.3-2.295 2.507-2.507a1.623 1.623 0 1 1 2.295 2.3Z" />
  </svg>
);
export default BiPencil;