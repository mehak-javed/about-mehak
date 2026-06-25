// Vector recreation of the "MEHAK J.</>" logo — white wordmark with a maroon
// code-bracket. Transparent, theme-independent and crisp at any size.
export default function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: '"Arial Black", "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 900,
        letterSpacing: "-0.02em",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
      aria-hidden="true"
    >
      <span style={{ color: "#ffffff" }}>MEHAK&nbsp;J.</span>
      <span style={{ color: "#b11e2f" }}>&lt;</span>
      <span style={{ color: "#ffffff" }}>/</span>
      <span style={{ color: "#b11e2f" }}>&gt;</span>
    </span>
  );
}
