export default function Sparkle({ size = 22, color = '#E7ACAD', style, duration = 7 }) {
  return (
    <svg
      className="sparkle"
      style={{ ...style, animationDuration: `${duration}s` }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
    </svg>
  );
}