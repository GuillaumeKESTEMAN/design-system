import type { SVGProps } from "react";

const SvgRvHookup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M20 17V9H7V7l-3 3 3 3v-2h4v3H4v5h4c0 1.66 1.34 3 3 3s3-1.34 3-3h8v-2zm-9 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m7-6h-4v-3h4zM17 2v2H9v2h8v2l3-3z" />
  </svg>
);

export { SvgRvHookup };