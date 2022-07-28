import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Nav from "./components/nav";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import './App.css';
import { useTranslation } from "react-i18next";
;
function App() {
 // multilanguage
  const { t, i18n } = useTranslation()
  function handleclick(lang) {
    i18n.changeLanguage(lang)
  }
  return (
      <div className="App">
      <Nav
      handleclick={handleclick}
      t={t}
      />
      <Routes>
        <Route path="https://MindaugasVilkas1.github.io/portfolio" element={
          <Home
          t={t}
          />}
        />
        <Route path="https://MindaugasVilkas1.github.io/portfolio/*" element={
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
