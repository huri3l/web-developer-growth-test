import { ComponentProps } from "react";

export function PlayOnRepeat(props: ComponentProps<"svg">) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_209_673)">
        <path
          d="M17.25 6.63h.25a6 6 0 110 12h-5.25m-4.66 0H7.5a6 6 0 010-12H13m-3.5-4l4 4-4 4m6 12l-4-4 4-4"
          stroke="#75A5FF"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_209_673">
          <path fill="#fff" transform="translate(.5 .63)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
