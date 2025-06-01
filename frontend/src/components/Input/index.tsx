import "./index.css";

type InputProps = {
  className?: string;
  variant?: "default" | "danger";
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  className = "",
  variant = "default",

  ...rest
}: InputProps) => (
  <input {...rest} className={`input input-${variant} ${className}`} />
);
