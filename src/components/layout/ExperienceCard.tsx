import SectionCard from "@components/container/SectionCard";
import ExperienceInfo from "@components/ui/Experience/ExperienceInfo";
import ExperienceList from "@components/ui/Experience/ExperienceList";
import ExperienceListContainer from "@components/ui/Experience/ExperienceListContainer";
import ExperienceSection from "@components/ui/Experience/ExperienceSection";
import SecTit from "@components/ui/SecTit";

function ExperienceCard() {
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
              <strong>Provided UI/UX design suggestions</strong>: Proactively
              proposed improvement plans to optimize the user interface and
              experience, enhancing user satisfaction and interaction rates.
            </ExperienceList>
            <ExperienceList>
              <strong>Developed a mini-game event website</strong>: Responsible
              for the entire development process, focusing not only on the
              interactivity of the game itself but also on optimizing the gaming
              scenario for a better experience.
            </ExperienceList>
            <ExperienceList>
              <strong>Built a brand image official website</strong>: Worked
              closely with designers to ensure visual style consistency and
              collaborated with the backend team to develop API interfaces.
            </ExperienceList>
            <ExperienceList>
              <strong>Created Landing Pages</strong>: Utilized creative design
              and technology to produce Landing Pages that met client
              expectations.
            </ExperienceList>
            <ExperienceList>
              <strong>
                Maintained and optimized the Vue.js official website
              </strong>
              : Took over and improved existing Vue.js projects, making
              customized modifications according to client needs, which enhanced
              page performance and user experience.
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
              <strong>Leading Projects from a Brand Perspective</strong>:
              Actively participating in decision-making processes as a business
              perspective, deepening understanding of commercial strategies and
              management thinking, effectively bridging technical implementation
              and business goals.
            </ExperienceList>
            <ExperienceList>
              <strong>Customer Communication and Design Participation</strong>:
              Going beyond traditional engineering roles by actively engaging in
              early design and concept phases, ensuring high alignment between
              technological realization and customer needs.
            </ExperienceList>
            <ExperienceList>
              <strong>Nonprofit Organization Website Development</strong>:
              Leading teams through full-cycle nonprofit organization website
              building, including design, space rental, and development,
              boosting organizational impact.
            </ExperienceList>
            <ExperienceList>
              <strong>Automotive Brand Online Preorder Website</strong>:
              Independently responsible for layout and API integration,
              realizing smooth user shopping experiences, promoting sales
              growth.
            </ExperienceList>
            <ExperienceList>
              <strong>Household Product Brand Comic Book Game Website</strong>:
              Utilizing CSS3 to implement comic book flippage effects,
              developing JS mini-games (drag & sort, maze etc.), enriching user
              interactions, increasing user stay time.
            </ExperienceList>
            <ExperienceList>
              <strong>Bank Event Landing Page</strong>: Contributing to multiple
              bank event landing pages' creation, achieving enhanced conversion
              rates through creative design and technical execution.
            </ExperienceList>
            <ExperienceList>
              <strong>
                Digital Marketing Agency Portfolio Website Development
              </strong>
              : Implementing WordPress to realize intuitive back-office
              management interfaces, granting clients without programming
              knowledge the ability to self-manage and edit portfolios,
              strengthening clients' autonomous management and content update
              convenience.
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
              <strong>Cross-Department Collaboration</strong>: Actively
              communicating and coordinating with planning and design teams to
              ensure consistency between design and technology, improving
              project efficiency and quality.
            </ExperienceList>
            <ExperienceList>
              <strong>Backend Collaboration and API Integration</strong>:
              Working closely with backend development teams to achieve API
              integration, ensuring accurate data transmission and dynamic
              functionality application.
            </ExperienceList>
            <ExperienceList>
              <strong>Media Tracking and Analysis</strong>: Embedding media
              tracking codes according to market demand, supporting data
              analysis and user behavior tracking, assisting in the formulation
              of precise marketing strategies.
            </ExperienceList>
            <ExperienceList>
              <strong>Social Media Platform Integration</strong>: Achieving
              social media platform API integration, strengthening the
              interaction link between the website and social media, expanding
              brand influence and user engagement.
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
