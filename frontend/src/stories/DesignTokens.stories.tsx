import "../tokens.css";

export default {
  title: "Design/Design Tokens",
};

const colorTokens = [
  "white",
  "primary",
  "primary-hover",
  "secondary",
  "secondary-hover",
  "danger",
  "danger-hover",
  "text",
  "border",
  "bg",
];

export const Colors = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
    {colorTokens.map((token) => (
      <div
        key={token}
        style={{
          backgroundColor: `var(--color-${token})`,
          fontSize: "var(--font-size-md)",
          width: 150,
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ccc",
          borderRadius: 6,
          color:
            token === "white" || token === "bg" || token === "border"
              ? "#000"
              : "#fff",
        }}
      >
        --color-{token}
      </div>
    ))}
  </div>
);

const fontSizeTokens = ["xs", "sm", "md", "lg", "xl", "xxl"];

export const FontSizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    {fontSizeTokens.map((size) => (
      <div
        key={size}
        style={{
          fontSize: `var(--font-size-${size})`,
          color: "var(--color-text)",
        }}
      >
        --font-size-{size} → This is size {size}
      </div>
    ))}
  </div>
);

const spacingTokens = ["xs", "sm", "md", "lg", "xl"];

export const Spacing = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    {spacingTokens.map((space) => (
      <div key={space}>
        <div
          style={{
            backgroundColor: "var(--color-primary)",
            width: `var(--space-${space})`,
            height: `var(--space-${space})`,
            borderRadius: 4,
          }}
        />
        <span style={{ fontSize: 12 }}>--space-{space}</span>
      </div>
    ))}
  </div>
);
