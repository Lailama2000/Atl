import { HelmetProvider } from 'react-helmet-async';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Button, createTheme , ThemeProvider} from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import MainPage from './Pages/MainPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import { useEffect } from 'react';
import FormPage from './Pages/FormPage';
import BlogDetails from './Pages/BlogDetails';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '',
    },
    Button:{
      fontFamily: '',
    }
  });
  const lang = localStorage.getItem('lang')
  useEffect(()=>{
    if(!lang){
      localStorage.setItem('lang','en')
    }
  },[])
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
        <Route path="/form" element= {<FormPage navbarHeight={navbarHeight}/>}/>
        <Route path="/blogdetails" element= {<BlogDetails navbarHeight={navbarHeight}/>}/>
        </Routes>
          <Footer />
        </ThemeProvider>
        </HashRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
