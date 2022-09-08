import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from './pages/Home'
import Nav from "./components/nav";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import './App.css';
import { useTranslation } from "react-i18next";
import ReactGa from "react-ga"
;
function App() {
 // multilanguage
  const { t, i18n } = useTranslation()
  function handleclick(lang) {
    i18n.changeLanguage(lang)
  }

  useEffect(()=>{
ReactGa.initialize('G-E3GG1WH6S9')
ReactGa.pageview('/')
  }, [])
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
