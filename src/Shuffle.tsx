import React, {SVGProps} from "react";

interface BiShuffleProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiShuffle: React.FC<BiShuffleProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="m23.421 16.583-3.291-3.291a1 1 0 1 0-1.413 1.414L21.007 17a9.33 9.33 0 0 1-6.686-2.8.98.98 0 0 0-1.408.08l-.013.02a1 1 0 0 0 .075 1.382A11.18 11.18 0 0 0 21.01 19l-2.293 2.293A1 1 0 1 0 20.13 22.7l3.291-3.291a2 2 0 0 0 0-2.826" />
    <path d="m21.007 7-2.29 2.29a1 1 0 0 0-.054.082.992.992 0 0 0 1.467 1.332L21.836 9l1.586-1.585a2 2 0 0 0 .457-2.1 2 2 0 0 0-.458-.728L20.13 1.3a1 1 0 1 0-1.413 1.413l2.293 2.292c-4.933.012-7.637 2.674-10.089 5.474C8.669 7.937 6 5.4 1.487 5.046L1.006 5a1 1 0 0 0-1 1 1.02 1.02 0 0 0 1 1c.072 0 .287.033.287.033C5.189 7.328 7.425 9.522 9.6 12c-2.162 2.466-4.383 4.7-8.247 4.96l-.4.021a.994.994 0 1 0 .124 1.985c.156-.007.41-.013.535-.023 5.02-.387 7.743-3.6 10.171-6.409C14.235 9.7 16.551 7.018 21.007 7" />
  </svg>
);
export default BiShuffle;