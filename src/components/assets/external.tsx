import { ComponentProps } from "react";

export function External(props: ComponentProps<"svg">) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.95 9.665V1.18H2.464m7.779.707L1.05 11.079"
        stroke="#75A5FF"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
