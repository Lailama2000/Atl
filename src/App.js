import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Button, createTheme , ThemeProvider} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import MainPage from './Pages/MainPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Helvetica Neue',
    },
    Button:{
      fontFamily: 'Helvetica Neue',
    }
  });
  const navbarHeight = 60;
  return (
    <div>
      <HelmetProvider>
        <HashRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
        <Route path="/" element= {<MainPage navbarHeight={navbarHeight}/>}/>
        <Route path="/privacypolicy" element= {<PrivacyPolicy navbarHeight={navbarHeight}/>}/>
        <Route path="/terms" element= {<Terms navbarHeight={navbarHeight}/>}/>
        </Routes>
          <Footer />
        </ThemeProvider>
        </HashRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
