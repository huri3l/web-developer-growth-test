import { ComponentProps } from "react";

interface ProgressBarProps extends ComponentProps<"svg"> {
  progressColors: string[];
}

export function ProgressBar({ progressColors, ...props }: ProgressBarProps) {
  const paths = [
    "M0 25v2",
    "M3 24v4",
    "M6 21v10",
    "M9 24v4",
    "M12 22v8",
    "M15 18v16",
    "M18 11v30",
    "M21 16v20",
    "M24 19v14",
    "M27 10v32",
    "M30 19v14",
    "M33 19v14",
    "M36 16v20",
    "M39 23v6",
    "M42 16v20",
    "M45 21v10",
    "M48 20v12",
    "M51 15v22",
    "M54 16v20",
    "M57 18v16",
    "M60 10v32",
    "M63 10v32",
    "M66 22v8",
    "M69 20.5v11",
    "M72 7v38",
    "M75 4v44",
    "M78 10v32",
    "M81 4v44",
    "M84 11v30",
    "M87 22v8",
    "M90 14v24",
    "M93 16v20",
    "M96 16v20",
    "M99 8v36",
    "M102 8v36",
    "M105 9v34",
    "M108 9v34",
    "M111 14v24",
    "M114 14v24",
    "M117 8v36",
    "M120 8v36",
    "M123 21v10",
    "M126 21v10",
    "M129 21v10",
    "M132 21v10",
    "M135 7v38",
    "M138 7v38",
    "M141 9v34",
    "M144 9v34",
    "M147 13v26",
    "M150 13v26",
    "M153 7v38",
    "M156 7v38",
    "M159 19v14",
    "M162 19v14",
    "M165 14v24",
    "M168 14v24",
  ];

  return (
    <svg
      width={169}
      height={52}
      viewBox="0 0 169 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1401_342)">
        {paths.map((d, index) => (
          <path key={index} d={d} stroke={progressColors[index] || "#474747"} />
        ))}
      </g>
      <defs>
        <clipPath id="clip0_1401_342">
          <path fill="#fff" d="M0 0H169V52H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
