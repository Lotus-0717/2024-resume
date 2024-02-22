interface ExperienceListContainerProps {
  children: React.ReactNode;
}

function ExperienceListContainer({ children }: ExperienceListContainerProps) {
  return (
    <ul className="flex list-disc flex-col flex-wrap gap-2 pl-5">{children}</ul>
  );
}

export default ExperienceListContainer;
