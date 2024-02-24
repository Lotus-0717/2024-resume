import SectionCard from "@components/container/SectionCard";
import ExperienceInfo from "@components/ui/Experience/ExperienceInfo";
import ExperienceList from "@components/ui/Experience/ExperienceList";
import ExperienceListContainer from "@components/ui/Experience/ExperienceListContainer";
import ExperienceSection from "@components/ui/Experience/ExperienceSection";
import SecTit from "@components/ui/SecTit";
import { useTranslation } from "react-i18next";

function ExperienceCard() {
  const { t } = useTranslation();
  return (
    <div>
      <SecTit>Experience</SecTit>
      <SectionCard>
        <ExperienceSection>
          <ExperienceInfo
            companyName="禾意數位創意"
            companyNameSub="Catch design"
            tenureStart="2021-04"
            tenureEnd="2023-12"
          ></ExperienceInfo>
          <ExperienceListContainer>
            <ExperienceList>
              <strong>{t("catchd-1-tit")}</strong>: {t("catchd-1-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("catchd-2-tit")}</strong>: {t("catchd-2-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("catchd-3-tit")}</strong>: {t("catchd-3-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("catchd-4-tit")}</strong>: {t("catchd-4-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("catchd-5-tit")}</strong>: {t("catchd-5-content")}
            </ExperienceList>
          </ExperienceListContainer>
        </ExperienceSection>
        <ExperienceSection>
          <ExperienceInfo
            companyName="全職接案"
            companyNameSub="Freelancer"
            tenureStart="2019-10"
            tenureEnd="2021-04"
          ></ExperienceInfo>
          <ExperienceListContainer>
            <ExperienceList>
              <strong>{t("freelancer-1-tit")}</strong>:{" "}
              {t("freelancer-1-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("freelancer-2-tit")}</strong>:{" "}
              {t("freelancer-2-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("freelancer-3-tit")}</strong>:{" "}
              {t("freelancer-3-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("freelancer-4-tit")}</strong>:{" "}
              {t("freelancer-4-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("freelancer-5-tit")}</strong>:{" "}
              {t("freelancer-5-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("freelancer-6-tit")}</strong>:{" "}
              {t("freelancer-4-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("freelancer-7-tit")}</strong>:{" "}
              {t("freelancer-5-content")}
            </ExperienceList>
          </ExperienceListContainer>
        </ExperienceSection>
        <ExperienceSection>
          <ExperienceInfo
            companyName="法樂數位創意"
            companyNameSub="FLA digital creative"
            tenureStart="2017-03"
            tenureEnd="2019-09"
          ></ExperienceInfo>
          <ExperienceListContainer>
            <ExperienceList>
              <strong>{t("fla-1-tit")}</strong>: {t("fla-1-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("fla-2-tit")}</strong>: {t("fla-2-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("fla-3-tit")}</strong>: {t("fla-3-content")}
            </ExperienceList>
            <ExperienceList>
              <strong>{t("fla-4-tit")}</strong>: {t("fla-4-content")}
            </ExperienceList>
          </ExperienceListContainer>
        </ExperienceSection>
        <ExperienceSection shouldHideDivider={true}>
          <ExperienceInfo
            companyName="淡江大學 歷史系"
            companyNameSub="Department of History, Tamkang University."
            tenureStart="2011-07"
            tenureEnd="2016-03"
          ></ExperienceInfo>
        </ExperienceSection>
      </SectionCard>
    </div>
  );
}

export default ExperienceCard;
