import IconContainer from "@components/container/IconContainer";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ControlBtn from "./ControlBtn";
import { useTranslation } from "react-i18next";
function ChangThemeBtn() {
  const { t } = useTranslation();
  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "eva01" ? "eva02" : "eva01";
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <ControlBtn
      label={t("themeLabel")}
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      <IconContainer size="middle" className="cursor-pointer">
        <FontAwesomeIcon
          icon={faPalette}
          className="text-light"
          size="xl"
        ></FontAwesomeIcon>
      </IconContainer>
    </ControlBtn>
  );
}

export default ChangThemeBtn;
