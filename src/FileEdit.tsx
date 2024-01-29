import React, {SVGProps} from "react";

interface BiFileEditProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiFileEdit: React.FC<BiFileEditProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M18.813 10a1 1 0 0 0 .969-1.248 7 7 0 0 0-1.833-3.217L14.464 2.05A6.95 6.95 0 0 0 9.514 0H4.999A5.005 5.005 0 0 0 0 5v14c0 2.757 2.243 5 5 5h3a1 1 0 0 0 0-2H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h4.515q.245 0 .485.023V7c0 1.654 1.346 3 3 3zM12 7V2.659c.379.218.732.488 1.05.806l3.485 3.485c.314.314.583.668.803 1.05H13c-.551 0-1-.449-1-1m11.122 4.879c-1.134-1.134-3.11-1.134-4.243 0l-6.707 6.707A3.98 3.98 0 0 0 11 21.415v1.586a1 1 0 0 0 1 1h1.586a3.97 3.97 0 0 0 2.828-1.172l6.707-6.707c.567-.567.879-1.32.879-2.122s-.312-1.555-.878-2.121m-1.415 2.828-6.708 6.707a1.98 1.98 0 0 1-1.414.586h-.586v-.586c0-.534.208-1.036.586-1.414l6.708-6.707a1.023 1.023 0 0 1 1.414 0c.189.188.293.439.293.707s-.104.518-.293.707" />
  </svg>
);
export default BiFileEdit;