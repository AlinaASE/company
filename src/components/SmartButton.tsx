import Link from "next/link";
import React from "react";

type ButtonAsType = "button" | "a";
interface SmartButtonProps {
  label?: string;
  height?: string;
  width?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  as?: ButtonAsType;
  linkClassName?: string;
}

function SmartButton({
  label,
  children,
  onClick,
  href = "#",
  as = "button",
  height,
  width,
  className = "",
  linkClassName = "",
  type = "button",
  target,
}: SmartButtonProps) {
  const Height = height ?? "py-1";
  const Width = width ?? "px-5";
  const buttonClass = `bg-orange rounded-[20px] ${Height} ${Width} transition duration-300 ${className}`;
  const content = children || label;

  if (as === "a") {
    const isAbsolute =
      href.startsWith("http://") || href.startsWith("https://");

    if (isAbsolute) {
      return (
        <a href={href} target={target} rel="noopener noreferrer">
          {content}
        </a>
      );
    } else {
      return (
        <Link href={href} target={target} className={linkClassName}>
          {content}
        </Link>
      );
    }
  }

  return (
    <Link href={href}>
      <button
        type={type}
        onClick={onClick}
        className={buttonClass}
        aria-label={label}
      >
        {content}
      </button>
    </Link>
  );
}

export default SmartButton;
