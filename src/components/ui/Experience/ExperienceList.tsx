interface ExperienceListProps {
  children: React.ReactNode;
}

function ExperienceList({ children }: ExperienceListProps) {
  return <li>{children}</li>;
}

export default ExperienceList;
