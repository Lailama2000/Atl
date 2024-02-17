import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import prev from '../Media/Layer 2.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSwiper } from 'swiper/react';
import '../App.css'
export default function Blogs({ News }) {
  const swiper = useSwiper();
  const { t } = useTranslation();
  const matches = useMediaQuery('(min-width:1000px)');
  const navigate = useNavigate();
  const handleBlog = (id) => {
    axios.get(`${process.env.REACT_APP_API_URL}blog-details/${id}`).then((res) => {
      navigate('/blogDetails', { state: { data: res.data.data } });
    });
  };

  return (
    <div style={{ backgroundColor: '#F1F1F1',position:'relative'}} id={t('Blog')}>
      <Typography
        sx={{
          fontWeight: 'bold',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingTop: '50px',
          color: '#7D4896',
          marginBottom: '50px',
        }}
      >
        {t('The ATL Blog')}
      </Typography>
        <Container >
      <Swiper
        loop={true}
        modules={[Autoplay,Navigation]}
        spaceBetween={100}
        slidesPerView={matches?3:1}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
          navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{paddingRight:matches?'20px':'',paddingLeft:matches?'20px':''}}
      >
        <div>
          {News.map((c) => (
            <SwiperSlide style={{ backgroundColor: '#F1F1F1',position:'relative', padding: matches?'0px':'5px' }}>
              <Card
                key={c.id}
                sx={{ width: matches?'320px':'300px', borderRadius: '10px', minHeight: '450px', marginBottom: '50px' }}
              >
                <CardContent
                  sx={{
                    padding: matches ? '30px' : '30px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'start',
                    alignItems: 'start',
                    position: 'relative',
                  }}
                >
                  <Stack>
                    <img
                      src={c.image}
                      style={{
                        borderRadius: '10px',
                        width: matches?'260px':'240px',
                        height: '200px',
                        objectFit: 'fill',
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#018EA2',
                        fontSize: '13px',
                        fontWeight: 'bold',
                        marginTop: c.date ? '10px' : '25px',
                      }}
                    >
                      {c.date}
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: '10px',
                        color: 'black',
                        fontSize: '16px',
                        padding: '5px',
                        minHeight: '100px',
                      }}
                    >
                      {c.title}
                    </Typography>
                    <Button
                      sx={{
                        bgcolor: '#7D4896',
                        color: 'white',
                        borderRadius: '5px',
                        '&:hover': {
                          bgcolor: '#7D4896',
                          color: 'white',
                        },
                        fontSize: '16px',
                        textTransform: 'none',
                      }}
                      onClick={() => {
                        handleBlog(c.id);
                      }}
                    >
                      {t('Read more')}
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </div>
      
      </Swiper>
      </Container>

        {matches && <><div className="swiper-button-prev" 
        style={{ backgroundImage: `url(${prev})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'
        ,width:'65px',height:'60px',position:'absolute',top:'50%',zIndex:1 ,left:'30px',cursor:'pointer'}}>
        </div>
        <div className="swiper-button-next" style={{  backgroundImage: `url(${prev})`
        ,backgroundSize:'cover',backgroundRepeat:'no-repeat',
      transform:'scaleX(-1)',width:'65px',height:'60px',cursor:'pointer'
      ,position:'absolute',top:'50%',zIndex:1 ,right:'30px'}}>
      </div></>}
    </div>
  );
}