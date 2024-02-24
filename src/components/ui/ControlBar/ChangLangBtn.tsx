import IconContainer from "@components/container/IconContainer";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import ControlBtn from "./ControlBtn";

function ChangLangBtn() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const toggleLang = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "zh" ? "en" : "zh";
    i18n.changeLanguage(newLang);
  };
  return (
    <ControlBtn
      label={t("langLabel")}
      onClick={toggleLang}
      className="cursor-pointer"
    >
      <IconContainer size="middle">
        <FontAwesomeIcon
          icon={faLanguage}
          className="text-light"
          size="xl"
        ></FontAwesomeIcon>
      </IconContainer>
    </ControlBtn>
  );
}

export default ChangLangBtn;
