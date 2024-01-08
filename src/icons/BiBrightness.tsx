import * as React from "react";
import {IconProps} from "./types";
export const BiBrightness = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3m1-5V1c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1m0 19v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1M5 12c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1m19 0c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1M6.71 6.71a.996.996 0 0 0 0-1.41l-2-2A.996.996 0 1 0 3.3 4.71l2 2c.2.2.45.29.71.29s.51-.1.71-.29Zm14 14a.996.996 0 0 0 0-1.41l-2-2a.996.996 0 1 0-1.41 1.41l2 2c.2.2.45.29.71.29s.51-.1.71-.29Zm-16 0 2-2A.996.996 0 1 0 5.3 17.3l-2 2a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29Zm14-14 2-2A.996.996 0 1 0 19.3 3.3l-2 2a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29Z" />
    </svg>
  );
});
export default BiBrightness;