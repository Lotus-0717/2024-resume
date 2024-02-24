import FlexContainer from "@components/container/FlexContainer";

interface ControlBtnProps {
  children: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

function ControlBtn({ children, label, onClick, className }: ControlBtnProps) {
  return (
    <FlexContainer
      className={`items-center gap-1 rounded-full border-2 px-2 sm:pr-4 ${className || ""}`}
      onClick={onClick}
    >
      {children}
      <p className="hidden text-light sm:block">{label}</p>
    </FlexContainer>
  );
}

export default ControlBtn;
