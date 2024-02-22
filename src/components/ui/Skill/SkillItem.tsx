import FlexContainer from "@components/container/FlexContainer";

interface SkillItemProps {
  skillName: string;
}

function SkillItem({ skillName }: SkillItemProps) {
  return (
    <FlexContainer className="items-center gap-1">
      <p className="text-x1 border-2 border-secondary px-2 py-1">{skillName}</p>
    </FlexContainer>
  );
}

export default SkillItem;
