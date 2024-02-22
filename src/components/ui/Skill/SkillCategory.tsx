import FlexContainer from "@components/container/FlexContainer";

interface SkillCategoryProps {
  children: React.ReactNode;
  categoryName: string;
}

function SkillCategory({ children, categoryName }: SkillCategoryProps) {
  return (
    <div className="flex w-full flex-col items-start gap-2">
      <p className="inline-block bg-secondary px-2 py-1 text-dark">
        {categoryName}
      </p>
      <FlexContainer className="flex-wrap gap-2">{children}</FlexContainer>
    </div>
  );
}

export default SkillCategory;
