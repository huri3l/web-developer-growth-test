import { ComponentProps } from "react";

export function CircleGradient(props: ComponentProps<"svg">) {
  return (
    <svg
      width={430}
      height={859}
      viewBox="0 0 430 859"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        opacity={0.2}
        cx={190}
        cy={478.63}
        r={536}
        fill="url(#paint0_radial_210_802)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_210_802"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 536 -536 0 190 478.63)"
        >
          <stop stopColor="#1040FF" />
          <stop offset={1} stopColor="#010101" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}
