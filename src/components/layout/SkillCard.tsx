import SectionCard from "@components/container/SectionCard";
import SecTit from "@components/ui/SecTit";
import SkillCategory from "@components/ui/Skill/SkillCategory";
import SkillItem from "@components/ui/Skill/SkillItem";

function SkillCard() {
  return (
    <div>
      <SecTit>Skill</SecTit>
      <SectionCard>
        <SkillCategory categoryName="Languages">
          <SkillItem skillName="HTML"></SkillItem>
          <SkillItem skillName="CSS"></SkillItem>
          <SkillItem skillName="SASS/SCSS"></SkillItem>
          <SkillItem skillName="JavaScript"></SkillItem>
          <SkillItem skillName="TypeScript"></SkillItem>
        </SkillCategory>
        <SkillCategory categoryName="Frameworks">
          <SkillItem skillName="React"></SkillItem>
        </SkillCategory>
        <SkillCategory categoryName="Libraies">
          <SkillItem skillName="jQuery"></SkillItem>
          <SkillItem skillName="Three.js"></SkillItem>
          <SkillItem skillName="PIXI.js"></SkillItem>
        </SkillCategory>
        <SkillCategory categoryName="Tools">
          <SkillItem skillName="Git"></SkillItem>
          <SkillItem skillName="Webpack"></SkillItem>
          <SkillItem skillName="Vite"></SkillItem>
        </SkillCategory>
      </SectionCard>
    </div>
  );
}

export default SkillCard;
