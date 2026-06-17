/** Geometric mark for NUMCARE-RCM brand */
export default function CaplineLogoMark({ className = 'h-12 w-12' }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M12 10h18L22 28l8 18H12V10z" fill="#0088c3" />
      <path d="M30 10h14v12l-10-6 10-6V10z" fill="#003057" />
      <path d="M12 28h16l-6 10 6 10H12V28z" fill="#3dbdee" />
      <path d="M30 34h14v12l-10-6 10-6V34z" fill="#0070a8" />
      <path d="M18 18h22l-5 10 5 10H18l5-10-5-10z" fill="#005a87" opacity="0.85" />
    </svg>
  )
}
