import MainConatiner from "@components/MainContainer";
import "./App.css";
import "./i18n";
import ControlContainer from "@components/ui/ControlBar/ControlContainer";
function App() {
  return (
    <div className="w-full bg-dark">
      <ControlContainer></ControlContainer>
      <MainConatiner></MainConatiner>
    </div>
  );
}

export default App;
