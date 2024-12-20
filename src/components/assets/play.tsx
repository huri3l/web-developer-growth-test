import { ComponentProps } from "react";

export function Play(props: ComponentProps<"svg">) {
  return (
    <svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.009 7.186a.92.92 0 010 1.628L2.223 15.33c-.655.362-1.473-.09-1.473-.815V1.486C.75.762 1.568.309 2.223.67L14.01 7.186z"
        fill="#000"
      />
    </svg>
  );
}
