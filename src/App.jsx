import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Nav from "./components/nav";
import './App.css';
import { useTranslation } from "react-i18next";
import 'flag-icons'
function App() {

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
        <Route path="/" element={
          <Home
          t={t}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
