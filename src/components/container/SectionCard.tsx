import FlexContainer from "./FlexContainer";
interface SectionCardProps {
  children: React.ReactNode;
}
function SectionCard({ children }: SectionCardProps) {
  return (
    <FlexContainer className="flex flex-col items-center gap-5 rounded-2xl bg-primary p-8 text-light">
      {children}
    </FlexContainer>
  );
}

export default SectionCard;
