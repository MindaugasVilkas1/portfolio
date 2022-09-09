import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Nav from "./components/nav";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import './App.css';
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga"
;
import { useEffect } from "react";
const TRACKING_ID ='UA-240535324-1'
ReactGA.initialize(TRACKING_ID);
function App() {
 // multilanguage
  const { t, i18n } = useTranslation()
  function handleclick(lang) {
    i18n.changeLanguage(lang)
  }
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
      <div className="App">
      <Nav
      handleclick={handleclick}
      t={t}
      />
      <Routes>
        <Route path="/portfolio" element={
          <Home
          t={t}
          />}
        />
        <Route path="/portfolio/*" element={
          <NotFound
          t={t}
          />
        } />
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
