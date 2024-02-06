import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from '../Media/portrait-gorgeous-hispanic-preschool-teacher-teaching-her-students-classroom.png';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';

export default function Sliders() {
  const matches = useMediaQuery('(min-width:375px)');
  const lang = localStorage.getItem('lang')
  const items = [
    {
      image: image,
      title: "Make the best out of education\nthrough our Learning Approaches!",
      description: "Whether you’re a student looking to get tutored, or a parent who’s looking to hone their kid’s skills in learning;\nyou’re in the right place! We’ll provide you with the best tutors while also teaching you how to properly learn!",
    },
    {
      image: image,
      title: "Another Slide",
      description: "This is another slide in the carousel. You can add as many slides as you want.",
    },
    {
      image: image,
      title: "Make the best out of education\nthrough our Learning Approaches!",
      description: "Whether you’re a student looking to get tutored, or a parent who’s looking to hone their kid’s skills in learning;\nyou’re in the right place! We’ll provide you with the best tutors while also teaching you how to properly learn!",
    },
  ];

  return (
    <Carousel
      onClickThumb={false}
      showStatus={false}
      autoPlay={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => (
        <button
          type="button"
          style={{
            border: 'none',
            width: '20px',
            height: '3px',
            background: isSelected ? '#018EA2' : '#018EA278',
            margin: '0 5px',
            cursor: 'pointer',
            transform: lang === 'ar' ? 'scaleX(-1)':'', 
          }}
          onClick={onClickHandler}
        />
      )}
    >
      {items.map((item, index) => (
        <div key={index}>
          <Stack
            direction="row"
            gap={7}
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
          >
            <Stack sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start' }}>
              <Typography
                sx={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#333134',
                  whiteSpace: 'pre-line',
                }}
              >
                {item.title.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
              <Typography
                sx={{ color: '#333134', fontSize: '15px', whiteSpace: 'pre-line' }}
              >
                {item.description.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
              <Button
                sx={{
                  bgcolor: '#018EA2',
                  color: 'white',
                  width: '200px',
                  marginTop: '20px',
                  '&:hover': { bgcolor: '#018EA2', color: 'white' },
                }}
              >
                Yes, I want better learning!
              </Button>
            </Stack>
            <img src={item.image} style={{ objectFit: 'fill', width: matches ? '350px' : '300px', height: '350px' }} />
          </Stack>
        </div>
      ))}
    </Carousel>
  );
}