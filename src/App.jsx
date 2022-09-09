import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Nav from "./components/nav";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import './App.css';
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Paper} from "@mui/material";
import { grey} from "@mui/material/colors";
// react google analytics
const TRACKING_ID = 'UA-240535324-1'
ReactGA.initialize(TRACKING_ID);
 
function App() {
  const [darkMode, setDarkMode] = useState(false)
 // create themes
 const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  
});
const lightTheme = createTheme({
  palette: {
    background: {
      default: "#42a5f5",
      paper: "#42a5f5",
  },
  text: {
    secondary: grey[800],
  },
}});
  // multilanguage
  const { t, i18n } = useTranslation()
  function handleclick(lang) {
    i18n.changeLanguage(lang)
  }
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
      <Paper style={{padding:"20px", textAlign:"center"}}>
        <Nav
          handleclick={handleclick}
          darkMode={darkMode}
          onChange={()=>setDarkMode(!darkMode)}
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
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
