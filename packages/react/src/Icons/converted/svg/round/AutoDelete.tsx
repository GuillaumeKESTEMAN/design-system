import type { SVGProps } from "react";

const SvgAutoDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M16 9c-.7 0-1.37.1-2 .29V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7m0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5M14 4c.55 0 1-.45 1-1s-.45-1-1-1h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H5.91c-.26 0-.52.11-.7.29L4.5 2H2c-.55 0-1 .45-1 1s.45 1 1 1z" />
    <path d="M15.75 12c-.41 0-.75.34-.75.75v3.68c0 .36.19.68.5.86l2.52 1.47c.33.19.75.09.96-.22a.72.72 0 0 0-.24-1.02L16.5 16.2v-3.45c0-.41-.34-.75-.75-.75" />
  </svg>
);

export { SvgAutoDelete };