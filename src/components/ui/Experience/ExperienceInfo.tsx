import dateFormat, { masks } from "dateformat";

interface ExperienceInfoProps {
  companyName: string;
  companyNameSub: string;
  tenureStart: string;
  tenureEnd: string;
}

function ExperienceInfo({
  companyName,
  companyNameSub,
  tenureStart,
  tenureEnd,
}: ExperienceInfoProps) {
  const startDate = new Date(tenureStart);
  const endDate = new Date(tenureEnd);
  masks.tenure = "mmm yyyy";
  return (
    <div>
      <p className="text-4xl font-bold">{companyName}</p>
      <p className="text-light-300 text-2xl font-bold italic opacity-50">
        {companyNameSub}
      </p>
      <p className="text-right text-xl">
        {dateFormat(startDate, "tenure")} - {dateFormat(endDate, "tenure")}
      </p>
    </div>
  );
}

export default ExperienceInfo;
