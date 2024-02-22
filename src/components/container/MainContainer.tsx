import ExperienceCard from "@components/layout/ExperienceCard";
import ProfileCard from "@components/layout/ProfileCard";
import SkillCard from "@components/layout/SkillCard";

function Container() {
  return (
    <main className=" mx-auto flex min-h-dvh min-w-[375px] max-w-5xl flex-col gap-5 p-5">
      <ProfileCard></ProfileCard>
      <SkillCard></SkillCard>
      <ExperienceCard></ExperienceCard>
    </main>
  );
}

export default Container;
