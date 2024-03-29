import type { SVGProps } from "react";

const SvgSportsHandball = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M14.27 6c-.55.95-.22 2.18.73 2.73s2.18.22 2.73-.73.22-2.18-.73-2.73-2.18-.22-2.73.73" />
    <path d="m15.84 10.41-2.6-1.5c-2.38-1.38-3.2-4.44-1.82-6.82l-1.73-1C8.1 3.83 8.6 7.21 10.66 9.4l-5.15 8.92 1.73 1 1.5-2.6 1.73 1-3 5.2 1.73 1 6.29-10.89a5 5 0 0 1 .31 5.46l1.73 1c1.6-2.75 1.28-6.58-1.69-9.08M12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05a1.501 1.501 0 0 0-1.5 2.6" />
  </svg>
);

export { SvgSportsHandball };