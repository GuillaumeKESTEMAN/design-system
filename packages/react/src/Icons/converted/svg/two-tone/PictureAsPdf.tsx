import type { SVGProps } from "react";

const SvgPictureAsPdf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4z" />
    <path
      d="M10 9h1v1h-1zm4 0h1v3h-1zm-6 7h12V4H8zm9-8h2v1h-1v1h1v1h-1v2h-1zm-4 0h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2zM9 8h2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1h-1v2H9z"
      opacity={0.3}
    />
    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-4-4V9c0-.55-.45-1-1-1h-2v5h2c.55 0 1-.45 1-1m-2-3h1v3h-1zm4 2h1v-1h-1V9h1V8h-2v5h1zm-8 0h1c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1H9v5h1zm0-2h1v1h-1z" />
  </svg>
);

export { SvgPictureAsPdf };