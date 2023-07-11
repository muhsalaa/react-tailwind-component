import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import React from "react";

const cButton = cva(
  [
    "inline-block",
    "text-sm",
    "font-bold",
    "rounded-xl",
    "flex",
    "justify-center",
    "items-center",
    "transition-colors",
    "ease-in-out",
    "duration-200",
  ],
  {
    variants: {
      color: {
        primary: ["bg-indigo-600", "hover:bg-indigo-700", "text-slate-100"],
        warning: ["bg-amber-600", "hover:bg-amber-700", "text-slate-100"],
        error: ["bg-red-600", "hover:bg-red-700", "text-slate-100"],
        success: ["bg-emerald-600", "hover:bg-emerald-700", "text-slate-100"],
        disabled: ["bg-neutral-400", "text-neutral-100", "cursor-not-allowed"],
      },
      block: {
        true: "w-full block",
      },
      variant: {
        big: ["px-12", "py-6"],
        default: ["px-8", "py-4"],
        small: ["px-6", "py-3"],
        mini: ["px-4", "py-2.5", "text-xs"],
        square: ["p-2"],
      },
      outline: {
        true: "",
      },
    },
    compoundVariants: [
      {
        outline: true,
        color: "primary",
        className:
          "!text-indigo-600 border-indigo-600 hover:!text-slate-100 bg-transparent border-2",
      },
      {
        outline: true,
        color: "warning",
        className:
          "!text-amber-600 border-amber-600 hover:!text-slate-100 bg-transparent border-2",
      },
      {
        outline: true,
        color: "error",
        className:
          "!text-red-600 border-red-600 hover:!text-slate-100 bg-transparent border-2",
      },
      {
        outline: true,
        color: "success",
        className:
          "!text-emerald-600 border-emerald-600 hover:!text-slate-100 bg-transparent border-2",
      },
    ],
    defaultVariants: {
      color: "primary",
      block: false,
      variant: "default",
      outline: false,
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof cButton> & { activated?: boolean };

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  color,
  block,
  disabled,
  activated,
  outline,
  variant,
  ...props
}) => {
  return (
    <button
      disabled={Boolean(disabled)}
      className={cButton({
        color: disabled ? "disabled" : color,
        block,
        variant,
        outline,
        className,
      })}
      {...props}
    >
      {activated && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-100 border-t-transparent" />
      )}
      {children}
    </button>
  );
};

export default Button;
