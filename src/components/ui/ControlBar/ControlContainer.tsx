import FlexContainer from "@components/container/FlexContainer";
import ChangThemeBtn from "./ChangThemeBtn";
import ChangLangBtn from "./ChangLangBtn";

function ControlContainer() {
  return (
    <FlexContainer className="w-full justify-end p-2">
      <ChangThemeBtn></ChangThemeBtn>
      <ChangLangBtn></ChangLangBtn>
    </FlexContainer>
  );
}

export default ControlContainer;
