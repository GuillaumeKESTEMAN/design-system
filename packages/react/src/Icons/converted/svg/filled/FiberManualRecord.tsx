import type { SVGProps } from "react";

const SvgFiberManualRecord = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M24 24H0V0h24z" />
    <circle cx={12} cy={12} r={8} />
  </svg>
);

export { SvgFiberManualRecord };