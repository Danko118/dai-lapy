import Style from "./assets/styles/app.module.scss"
import UiHeader from "./assets/components/header";
import MainPage from "./assets/pages/main";
import UiAbout from "./assets/components/about";
import UiNeedo from "./assets/components/needo";
import UiRules from "./assets/components/rules";
import UiPricing from "./assets/components/pricing";
import UiMap from "./assets/components/map";
import UiFooter from "./assets/components/footer";
import UiChoose from "./assets/components/choose";
import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10); // Adjust delay if needed
  }, [location]);

  return (
    <div className={Style.app}>
      <UiHeader
        location={location}
      />
      <MainPage 
        second={false}
      />
      <Routes>
        <Route path="/dai-lapy/" index element={
          <>
            <UiAbout
              styles={["primary"]}
            />
            <UiChoose />
          </>
        }/>
        <Route path="/hostel" element={
          <>
            <UiNeedo
              styles={["secondary" , "green"]}
            />
            <UiRules
              styles={["primary"]}
            />
            <UiPricing
              styles={["secondary" , "green"]}
            />
          </>
        }/>
      </Routes>
      <UiMap
        second={false}
      />
      <UiFooter/>
    </div>
  );
}

export default App;
