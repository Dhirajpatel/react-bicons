import React, {SVGProps} from "react";

interface BiSendProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiSend: React.FC<BiSendProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M23.119.882a2.97 2.97 0 0 0-2.8-.8l-16 3.37a4.995 4.995 0 0 0-2.853 8.481l1.718 1.717a1 1 0 0 1 .293.708v3.168a3 3 0 0 0 .3 1.285l-.008.007.026.026A3 3 0 0 0 5.157 20.2l.026.026.007-.008a3 3 0 0 0 1.285.3h3.168a1 1 0 0 1 .707.292l1.717 1.717A4.96 4.96 0 0 0 15.587 24a5 5 0 0 0 1.605-.264 4.93 4.93 0 0 0 3.344-3.986l3.375-16.035a2.98 2.98 0 0 0-.792-2.833M4.6 12.238l-1.719-1.717a2.94 2.94 0 0 1-.722-3.074 2.98 2.98 0 0 1 2.5-2.026L20.5 2.086 5.475 17.113v-2.755a2.98 2.98 0 0 0-.875-2.12m13.971 7.17a3 3 0 0 1-5.089 1.712l-1.72-1.72a2.98 2.98 0 0 0-2.119-.878H6.888L21.915 3.5Z" />
  </svg>
);
export default BiSend;