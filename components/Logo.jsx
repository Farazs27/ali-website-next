export default function Logo({ size = 38, className = "logo" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 8c-7 0-12 3-17 3-6 0-9 4-9 11 0 9 4 16 8 22 3 4 4 12 7 12 4 0 4-9 8-9s4 9 8 9c3 0 4-8 7-12 4-6 8-13 8-22 0-7-3-11-9-11-5 0-10-3-17-3z"
        fill="none"
        stroke="#3A352C"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
