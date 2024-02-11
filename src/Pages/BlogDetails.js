import React, { useEffect } from 'react'
import pic from '../Media/Rectangle 898.png'
import { useLocation } from 'react-router-dom';
import { Container, Stack, Typography,useMediaQuery } from '@mui/material';
export default function BlogDetails() {
    const location = useLocation()
    const { state } = location;
    const { data } = state; 
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
    const matches = useMediaQuery('(min-width:970px)');
  const lang = localStorage.getItem('lang')
  return (
    <div style={{marginTop:'90px'}}>
        <div style={{backgroundColor:'#7D4896',height:'350px'}}>
        <Typography sx={{fontSize:'20px',color:'white',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:'50px'}}>
            {data.blog_details.title}
        </Typography>
        </div>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:'30px'}}>
        <Typography sx={{fontSize:'20px',color:'white'}}>
            {data.blog_details.description}
        </Typography>
        </div>
      <img src={data.blog_details.image} style={{height:'350px',width:matches?'80vh':'100%',top:'20rem',position:'absolute',
      marginLeft:lang === 'en'&&matches ? '50vh':'0px',objectFit:'fill',marginRight:lang === 'ar'&&matches  ? '50vh':'0px'}}/>
      <Container maxWidth='md' sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
        <Stack>
      <Typography sx={{marginBottom:'50px',color:'#888888',marginTop:matches?'100px':'200px',fontSize:'16px'}}>
        {data.blog_details.description}
      </Typography>

      <Typography sx={{marginBottom:'20px',color:'#7D4896',fontWeight:'bold'}}>
      More Articles
      </Typography>

      <Stack direction='row' gap={2} sx={{display:'flex',flexWrap:'wrap',justifyContent:'start'
      ,alignItems:'start',marginBottom:'10vh'}}>
        {data.blogs.map((b)=>
        <div style={{position:'relative'}}>
        <img style={{width:'200px',height:'200px',borderRadius:'20px',cursor:'pointer'}} src={b.image} />
        <Typography sx={{color:'white',position:'absolute',top:'70%',padding:'10px'}}>
            {b.description}
        </Typography>
        </div>
        )}
      </Stack>
      </Stack>
      </Container>

    </div>
  )
}
