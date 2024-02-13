import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from './Media/Group 9656.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useMediaQuery } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import axios from 'axios';
import {  Link } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [contact, setContact] = React.useState({});
  const matches = useMediaQuery('(min-width:1200px)');
  const [langMenu,setLangMenu]=React.useState(null)
  const { t , i18n } = useTranslation();
  const dir = i18n.dir();
  document.body.dir = i18n.dir();
  const pages = [t('Home'), t('Why ATL?'), t('Our Services'), t('Become a Tutor'), t('FAQs')];
  const lang = localStorage.getItem('lang')

  React.useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}home-page`, {
      headers: {
        lang : lang
      },
    }).then(res=>{
      setContact(res.data.data.general)
    })
  },[])
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const navigate = useNavigate()
  const handleCloseNavMenu = (page) => {
    const mainPagePath = '/';
    const isMainPage = window.location.pathname === mainPagePath;
    setAnchorElNav(null);
    if (!isMainPage) {
      navigate('/');
    } else {
      const sectionElement = document.getElementById(page);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const sectionElement = document.getElementById(page);
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }, 5000);
      }
    }
  };
  const handleTouch =() =>{
    const sectionElement = document.getElementById('contact');
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
  const handleClose = () => {
    setAnchorElNav(null);
  };
  const handleCloseLangMenu =() =>{
    setLangMenu(null)
  }
  const handleEn =() =>{
    i18next.changeLanguage('en')
    handleCloseLangMenu()
    window.location.reload(true)
    localStorage.setItem('lang','en')
  }
  const handleAr =() =>{
    i18next.changeLanguage('ar')
    handleCloseLangMenu()
    window.location.reload(true)
    localStorage.setItem('lang','ar')
  }

  const handleQuote = () => {
    handleClose();
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: 'white', padding: '10px' ,position:'fixed',height:'90px'}}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="...loading" style={{ width: '60px', height: '60px',objectFit:'contain' }} />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },flexDirection:'row',flexWrap: 'wrap', alignItems: 'center',justifyContent:'center'}}>
              <Box>
                <img src={logo} alt="...loading" style={{ width: '40px' }} onClick={()=>{navigate('/')}}/>
              </Box>

              <div  style={{
                  display: 'flex',
                  flexDirection:'column',
                  flexWrap:'wrap',
                  alignItems:'end',
                  flexGrow: 1,
                  justifyContent: 'end',
                  color:'black'
                }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{
                  display: 'flex',
                  flexWrap:'wrap',
                  alignItems:'end',
                  flexGrow: 1,
                  justifyContent: 'end',
                  color:'black'
                }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleClose}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexWrap:'wrap',
                  justifyContent:'center',
                  alignItems:'center',
                }}
              >
                
                <Link href={contact.facebook} target="_blank">
                <FacebookIcon 
                sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
                </Link>
                {contact.instagram ?<Link href={contact.instagram} target="_blank">
                <InstagramIcon sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
                </Link> : null}
                {contact.linkedin ?
        <Link href={contact.linkedin} target="_blank">
        <LinkedInIcon sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
        </Link> : null }
                {contact.whatsapp ?<Link href={`https://wa.me/${contact.whatsapp}`}  target="_blank">
                <WhatsAppIcon sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
                </Link> : null}
                <a onClick={()=>{setLangMenu(!langMenu)}}>
                <LanguageIcon sx={{ cursor: 'pointer', color: '#606060', m:'0px' }} /> 
                </a>
                <Menu sx={{ mt: '10px',marginLeft:lang==='en'?'-40px':'-255px' ,
                                  display: { xs: 'block', md: 'none' },
}}
              anchorEl={langMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(langMenu)}
              onClose={handleCloseLangMenu}>
            <MenuItem>
              <Button sx={{ color:'black' }}
               onClick={() =>{ handleEn() }}>{t('English')}</Button>
              </MenuItem>
              <MenuItem>
              <Button sx={{ color:'black' }}
              onClick={() =>{ handleAr() }}>{t('Arabic')}</Button>
              </MenuItem>
        </Menu>
                {pages.map((page) => (
                  <MenuItem key={page} sx={{textTransform:'none'}} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              </div>


            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: matches && lang =='en' ? '35px' :matches && lang === 'ar'?'50px': '0px', 
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu(page);
                    }}
                    sx={{
                      my: 2,
                      color: '#606060',
                      display: 'block',
                      fontSize: '15px',
                      position: 'relative',
                      overflow: 'hidden',textTransform:'none'
                    }}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  sx={{
                    bgcolor: '#018EA2',
                    color: 'white',
                    borderRadius: '20px',
                    paddingLeft:'20px',paddingRight:'20px',
                    marginLeft: '40px',textTransform:'none',
                    '&:hover':{bgcolor: '#018EA2',
                    color: 'white',}
                  }}
                  onClick={handleTouch}
                >
                  {t('Get In Touch!')}
                </Button>
                <Link href={contact.facebook} target="_blank">
                <FacebookIcon 
                sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
                </Link>
                {contact.instagram ?<Link href={contact.instagram} target="_blank">
                <InstagramIcon sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
                </Link> : null}
                {contact.linkedin ?
        <Link href={contact.linkedin} target="_blank">
        <LinkedInIcon sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
        </Link> : null }
                {contact.whatsapp ?<Link href={`https://wa.me/${contact.whatsapp}`}  target="_blank">
                <WhatsAppIcon sx={{ cursor: 'pointer', color: '#018EA2', m:'0px' }} /> 
                </Link> : null}


      <div style={{display: { xs: 'none', md: 'block' },flexWrap:'wrap',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <a onClick={()=>{setLangMenu(!langMenu)}}>
                <LanguageIcon sx={{ cursor: 'pointer', color: '#606060', m:'0px' }} /> 
                </a>
                <Menu
              anchorEl={langMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              sx={{display: { xs: 'none', md: 'block' },marginLeft:matches && lang === 'en'?'-20vh':'-170vh',marginTop:'-2%'}}
              open={Boolean(langMenu)}
              onClose={handleCloseLangMenu}>
            <MenuItem>
              <Button sx={{ color:'black' }}
               onClick={() =>{ handleEn() }}>{t('English')}</Button>
              </MenuItem>
              <MenuItem>
              <Button sx={{ color:'black' }}
              onClick={() =>{ handleAr() }}>{t('Arabic')}</Button>
              </MenuItem>
        </Menu>
        </div>

              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;