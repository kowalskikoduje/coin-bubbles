import React, { forwardRef, ButtonHTMLAttributes } from "react";
import Loader from "./loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    active,
    loading = false,
    disabled = false,
    ...rest
  } = props;

  return (
    <button
      aria-pressed={active}
      disabled={disabled}
      ref={ref}
      className={
        className ??
        "h-11 md:h-12 px-5 bg-b;acl text-white py-2 transform-none border-0 border-transparent normal-case"
      }
      {...rest}
    >
      {children}
      {loading && <Loader />}
    </button>
  );
});

export default Button;
