import FlexContainer from "@components/container/FlexContainer";
import ChangThemeBtn from "./ChangThemeBtn";
import ChangLangBtn from "./ChangLangBtn";

function ControlContainer() {
  return (
    <FlexContainer className="w-full justify-end gap-2 p-2 px-5">
      <ChangThemeBtn></ChangThemeBtn>
      <ChangLangBtn></ChangLangBtn>
    </FlexContainer>
  );
}

export default ControlContainer;
