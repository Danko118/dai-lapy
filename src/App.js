import Style from "./assets/styles/app.module.scss"
import UiHeader from "./assets/components/header";
import MainPage from "./assets/pages/main";
import UiAbout from "./assets/components/about";
import UiNeedo from "./assets/components/needo";
import UiRules from "./assets/components/rules";
import UiPricing from "./assets/components/pricing";
import UiMap from "./assets/components/map";
import UiFooter from "./assets/components/footer";

function App() {
  return (
    <div className={Style.app}>
      <UiHeader />
      <MainPage 
        second={false}
      />
      <UiAbout
        second={false}
      />
      <UiNeedo
        second={true}
      />
      <UiRules
        second={false}
      />
      <UiPricing
        second={true}
      />
      <UiMap
        second={false}
      />
      <UiFooter/>
    </div>
  );
}

export default App;
