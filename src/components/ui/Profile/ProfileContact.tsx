import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import FlexContainer from "@components/container/FlexContainer";
import IconContainer from "@components/container/IconContainer";
function ProfileContact() {
  return (
    <div className="flex-grow">
      <FlexContainer className="min-h-full flex-col items-start gap-1">
        <FlexContainer className="items-center justify-center gap-3">
          <IconContainer>
            <FontAwesomeIcon icon={faEnvelope} />
          </IconContainer>
          <p className="text-xl">lian82717pro@gmail.com</p>
        </FlexContainer>
        <FlexContainer className="items-center justify-center gap-3">
          <IconContainer>
            <FontAwesomeIcon icon={faLocationDot} />
          </IconContainer>
          <p className="text-xl">New Taipei City, Taiwan (R.O.C.).</p>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
}

export default ProfileContact;
