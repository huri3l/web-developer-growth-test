import { ComponentProps } from "react";

export function Flash(props: ComponentProps<"svg">) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.5 2.63l-10 12h9l-1 8 10-12h-9l1-8z"
        stroke="#75A5FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
