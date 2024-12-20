import { ComponentProps } from "react";

export function Lock(props: ComponentProps<"svg">) {
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
        d="M7.5 11.63v-4a5 5 0 1110 0v4m-12 0h14a2 2 0 012 2v7a2 2 0 01-2 2h-14a2 2 0 01-2-2v-7a2 2 0 012-2z"
        stroke="#75A5FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
