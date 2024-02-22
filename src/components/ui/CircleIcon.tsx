interface CircleIconProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

function CircleIcon({ children, className, href }: CircleIconProps) {
  const defaultClassName =
    "rounded-full bg-light w-10 h-10 items-center justify-center flex";
  const combinedClassName = `${defaultClassName} ${className || ""}`.trim();
  const Tag = href ? "a" : "div";
  const props = href
    ? { href, className: combinedClassName }
    : { className: combinedClassName };

  return <Tag {...props}>{children}</Tag>;
}

export default CircleIcon;
