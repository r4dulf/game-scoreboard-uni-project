import "./index.css";

type ButtonProps = {
  className?: string;
  kind?: "flat" | "solid";
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  kind = "solid",
  variant = "primary",
  size = "medium",
  className = "",

  ...rest
}: ButtonProps) => (
  <button
    {...rest}
    className={`btn btn-${variant} btn-${size} ${className} btn-${kind}`}
  >
    {children}
  </button>
);
