import { ComponentProps } from "react";

export function ChevronDown(props: ComponentProps<"svg">) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9.931l6 6 6-6"
        stroke="#fff"
        strokeOpacity={0.25}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
