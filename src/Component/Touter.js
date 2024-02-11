import { Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import pic from '../Media/woman-white-blouse-standing-with-books.png'
import pic2 from '../Media/Group 9678.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Touter() {
    const matches = useMediaQuery('(min-width:654px)');
    const lang = localStorage.getItem('lang')
    const navigate = useNavigate()
    const { t } = useTranslation();

  return (
    <div id={t('Become a Tutor')} style={{backgroundColor:'#018EA2',position:'relative',marginTop:'120px'}}>
      <Stack direction='row' gap={1}
      sx={{padding:'60px',isplay: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      <Container maxWidth='sm'>
        <Stack sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start'}}>
        <Typography sx={{fontSize:'45px',fontWeight:'bold',color:'#F5C660'}}>
        {t('Become a Tutor')}
        </Typography>
        <Typography sx={{color:'white',marginTop:'10px',fontSize:'20px'}}>
        {t('Ready to share your expertise and inspire students? Become a tutor with ATL Education today! Fill out our simple form to join our team of dedicated educators and help shape the future of learning.')}
        </Typography>
        <Button onClick={()=>{navigate('/form')}}
        sx={{bgcolor:'#7D4896',color:'white',marginTop:'50px','&:hover':{bgcolor:'#7D4896',color:'white'},
            padding:'10px',width:matches?'250px':'150px',fontWeight:'bold',textTransform:'none',fontSize:'16px'}}>
        {t('Fill the form in seconds!')}
        </Button>
        <img src={pic2} style={{width:'200px',height:'120px',position:'relative',
        left:matches && lang === 'en' ?'300px':matches&&lang==='ar'?'':'0px',bottom:'50px',
        right:matches&&lang==='ar'?'300px':'0px',
        top:!matches ?'4px':''}}/>

      </Stack>
      </Container>
    <img src={pic} style={{height:'320px',width:'320px',objectFit:'fill'}}/>
      </Stack>
    </div>
  )
}
