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

export default function ContactInfo({contact}) {
  const[about,setAbout]=useState({})
  const lang = localStorage.getItem('lang')
  const matches = useMediaQuery('(min-width:960px)');
  const { t } = useTranslation();
 
  const handleMailClick = () => {
    window.open(`mailto:${contact.email}`);
  };
  return (
    <div id='contact'>
      <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start',marginTop:matches?'90px':'10px'}} gap={3}>
        <Link href={`tel:${contact.phone_number}`} style={{textDecoration: 'none'}}>
          <Stack direction='row' gap={2} sx={{cursor:'pointer'}}> 
          <PhoneIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px',padding:'10px','&:hover':{bgcolor:'#FECD2B',transition:'0.3s ease-in'}}}/>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
        <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#018EA2',textDecoration: 'none'}} gap={2}>
          {t('Phone Number')}
        </Typography>
        <Typography sx={{fontSize:'12px',color:'#018EA2',textDecoration: 'none','&:hover':{textDecoration:'underline'}}}>
          {contact.phone_number}
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
        {contact.email}
        </Typography>
        </Stack>
        </Stack>

        {contact.location ?
        <Stack direction='row' gap={2} sx={{cursor:'pointer'}}> 
        <LocationOnIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px',padding:'10px','&:hover':{bgcolor:'#FECD2B',transition:'0.3s ease-in'}}}/>
        <Stack sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
        <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#018EA2'}}>
          {t('Location')}
        </Typography>
        <Typography sx={{fontSize:'12px',color:'#018EA2','&:hover':{textDecoration:'underline'}}}>
        {contact.location}
        </Typography>
        </Stack>
        </Stack>
: null}

        <Box sx={{justifyContent:'end',alignItems:'end',display:'flex',flexWrap:'wrap',marginBottom:matches?'':'50px'}}>
         <Stack direction='row' gap={2}> 
       
        {contact.instagram ?<Link href={contact.instagram} target="_blank">
        <InstagramIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px','&:hover':{color:'#E9CE6F'}
        ,padding:'10px', cursor:'pointer'}}/>
        </Link> :null }

        <Link href={contact.facebook} target="_blank">
        <FacebookIcon sx={{bgcolor:'#7D4896' , color:'white' , borderRadius:'30px','&:hover':{color:'#E9CE6F'}
        ,padding:'10px', cursor:'pointer'}}/>
        </Link>
        {contact.linkedin ?
        <Link href={contact.linkedin} target="_blank">
        <LinkedInIcon sx={{bgcolor:'#7D4896' , color:'white' ,'&:hover':{color:'#E9CE6F'},
        borderRadius:'30px',padding:'10px', cursor:'pointer'}}/>
        </Link> : null
      }
        </Stack>
        </Box>
   
      </Stack>
    </div>
  )
}
