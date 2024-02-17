import React, { useEffect } from 'react'
import pic from '../Media/Rectangle 898.png'
import { useLocation } from 'react-router-dom';
import { Container, Stack, Typography,useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

export default function BlogDetails() {
    const location = useLocation()
    const { state } = location;
    const { data } = state; 
    const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const handleBlog =(id) =>{
    window.scrollTo(0,0)
    axios.get(`${process.env.REACT_APP_API_URL}blog-details/${id}`).then(
      res =>{
        navigate('/blogDetails',{state : {data : res.data.data}})
      }
    )
  }
  const { t } = useTranslation();
  const matches = useMediaQuery('(min-width:970px)');
  const lang = localStorage.getItem('lang')
  return (
    <div style={{marginTop:'90px'}}>
        <div style={{backgroundColor:'#7D4896',height:'450px'}}>
        <Typography sx={{fontSize:'30px',color:'white',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',padding:'30px'}}>
            {data.blog_details.title}
        </Typography>
        <Typography sx={{fontSize:'15px',color:'#F5C660',display:'flex',flexWrap:'wrap',
        justifyContent:'center',alignItems:'center'}}>
            {data.blog_details.date}
        </Typography>
        </div>
      <img src={data.blog_details.image} style={{height:'420px',width:matches?'150vh':'100%',top:matches?'40vh':'50vh',position:'absolute',
      marginLeft:lang === 'en'&&matches ? '30vh':'0px',objectFit:'cover',marginRight:lang === 'ar'&&matches  ? '30vh':'0px'}}/>
      <Container maxWidth='lg' sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start',}}>
        <Stack sx={{paddingLeft:lang==='en'?'40px':'',paddingRight:lang==='ar'?'40px':''}}>
      <Typography sx={{marginBottom:'50px',color:'#888888',marginTop:matches?'210px':'300px',fontSize:'16px'}}
      dangerouslySetInnerHTML={{ __html: data.blog_details.description }}>
      </Typography>

      <Typography sx={{marginBottom:'20px',color:'#7D4896',fontWeight:'bold'}}>
      {t('More Articles')}
      </Typography>

      <Stack direction='row' gap={2} sx={{display:'flex',flexWrap:'wrap',justifyContent:'start'
      ,alignItems:'start',marginBottom:'13vh',position:'relative'}}>
        {data.blogs.map((b)=>
        <div style={{position:'relative'}}>
        <img style={{width:'250px',height:'250px',borderRadius:'20px',cursor:'pointer'}} src={b.image}
         onClick={()=>{handleBlog(b.id)}}/>
           <div
  style={{
    position: 'absolute',
    bottom: '2px',
    width: '230px',
    height: '40px',
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0))',
    padding: '10px',
    borderRadius: '20px',
  }}
></div>
        <Typography sx={{color:'white',position:'absolute',bottom:'0%',padding:'10px'}}>
            {b.title}
        </Typography>
        </div>
        )}
      </Stack>
      </Stack>
      </Container>

    </div>
  )
}
