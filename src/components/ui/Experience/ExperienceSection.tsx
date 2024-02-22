interface ExperienceSectionProps {
  children: React.ReactNode;
  shouldHideDivider?: boolean;
}

function ExperienceSection({
  children,
  shouldHideDivider,
}: ExperienceSectionProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5">{children}</div>
      <div
        className={`${shouldHideDivider ? "hidden" : ""} mt-5 w-full border-b-2 border-secondary`}
      ></div>
    </div>
  );
}

export default ExperienceSection;
