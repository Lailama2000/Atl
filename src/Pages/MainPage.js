import React from 'react'
import ContactInfo from '../Component/ContactInfo'
import Form from '../Component/Form'
import { Stack,useMediaQuery } from '@mui/material';
import Sliders from '../Component/Sliders';
import WhyUs from '../Component/WhyUs';
import Approches from '../Component/Approches';
import Touter from '../Component/Touter';

export default function MainPage({navbarHeight}) {
    const matches = useMediaQuery('(min-width:800px)');

  return (
    <div style={{marginTop:`150px`}}>
      <Sliders />
      <WhyUs />
      <Approches />
      <Touter />
       <Stack sx={{backgroundColor:'white'}} id='Contact Us'>
        <Stack direction={matches ? 'row' : 'column'} gap={10} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <Form />
      <ContactInfo />
      </Stack>
      </Stack>
    </div>
  )
}
