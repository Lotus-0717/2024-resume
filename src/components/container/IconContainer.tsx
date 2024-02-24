interface IconContainerProps {
  children: React.ReactNode;
  size?: string;
  className?: string;
  onClick?: () => void;
}

function IconContainer({
  children,
  size,
  className,
  onClick,
}: IconContainerProps) {
  let IconSize;
  switch (size) {
    case "large":
      IconSize = "w-16 h-16";
      break;
    case "middle":
      IconSize = "w-10 h-10";
      break;
    case "small":
    default:
      IconSize = "w-5 h-5";
  }
  return (
    <div
      className={`${IconSize} flex flex-shrink-0 items-center justify-center ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default IconContainer;
