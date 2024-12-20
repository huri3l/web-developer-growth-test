import { ComponentProps } from "react";

export function Close(props: ComponentProps<"svg">) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.886.22a.75.75 0 011.06 0L7.25 5.523 12.553.22a.75.75 0 011.06 1.06L8.312 6.584l5.303 5.303a.75.75 0 01-1.06 1.06L7.25 7.645l-5.304 5.304a.75.75 0 11-1.06-1.061l5.303-5.304L.886 1.28a.75.75 0 010-1.06z"
        fill="#fff"
      />
    </svg>
  );
}
