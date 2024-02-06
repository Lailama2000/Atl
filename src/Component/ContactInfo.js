import { Box, useMediaQuery, Link, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';

export default function ContactInfo() {
  const[about,setAbout]=useState({})
  const lang = localStorage.getItem('lang')
  const matches = useMediaQuery('(min-width:960px)');
  const { t } = useTranslation();
 
  const handleMailClick = () => {
    window.open(`mailto:${about.email}`);
  };
  return (
    <div >
      <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start',marginTop:matches?'90px':'10px'}} gap={3}>
        <Link href="tel:65" style={{textDecoration: 'none'}}>
          <Stack direction='row' gap={2} sx={{cursor:'pointer'}}> 
          <PhoneIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px',padding:'10px','&:hover':{bgcolor:'#FECD2B',transition:'0.3s ease-in'}}}/>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
        <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#018EA2',textDecoration: 'none'}} gap={2}>
          {t('Phone Number')}
        </Typography>
        <Typography sx={{fontSize:'12px',color:'#018EA2',textDecoration: 'none','&:hover':{textDecoration:'underline'}}}>
          65
        </Typography>
        </Stack>
        </Stack>
        </Link>


        <Stack direction='row' gap={2} onClick={handleMailClick} sx={{cursor:'pointer'}}> 
        <a>
        <MailOutlineIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px',padding:'10px','&:hover':{bgcolor:'#FECD2B',transition:'0.3s ease-in'}}}/>
        </a>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
        <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#018EA2'}}>
          {t('Email')}
        </Typography>
        <Typography sx={{fontSize:'12px',color:'#018EA2','&:hover':{textDecoration:'underline'}}}>
        Info@smartedge.com
        </Typography>
        </Stack>
        </Stack>


        <Stack direction='row' gap={2} sx={{cursor:'pointer'}}> 
        <LocationOnIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px',padding:'10px','&:hover':{bgcolor:'#FECD2B',transition:'0.3s ease-in'}}}/>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
        <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#018EA2'}}>
          {t('Location')}
        </Typography>
        <Typography sx={{fontSize:'12px',color:'#018EA2','&:hover':{textDecoration:'underline'}}}>
        {t('Amman, Jordan')}
        </Typography>
        </Stack>
        </Stack>


        <Box sx={{justifyContent:'end',alignItems:'end',display:'flex',flexWrap:'wrap'}}>
         <Stack direction='row' gap={2}> 
       
        <Link href='https://www.google.com'>
        <InstagramIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px','&:hover':{color:'#E9CE6F'}
        ,padding:'10px', cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.google.com'>
        <FacebookIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px','&:hover':{color:'#E9CE6F'}
        ,padding:'10px', cursor:'pointer'}}/>
        </Link>

        <Link href='https://www.google.com'>
        <LinkedInIcon sx={{bgcolor:'#7D4896' , color:'white' ,'&:hover':{color:'#E9CE6F'},
        borderRadius:'30px',padding:'10px', cursor:'pointer',marginBottom:matches?'':'30px'}}/>
        </Link>
        </Stack>
        </Box>
   
      </Stack>
    </div>
  )
}
