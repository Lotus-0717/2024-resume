import IconContainer from "@components/container/IconContainer";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ChangThemeBtn() {
  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "eva01" ? "eva02" : "eva01";
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <IconContainer
        size="middle"
        className="cursor-pointer"
        onClick={toggleTheme}
      >
        <FontAwesomeIcon
          icon={faPalette}
          className="text-light"
          size="xl"
        ></FontAwesomeIcon>
      </IconContainer>
    </>
  );
}

export default ChangThemeBtn;
