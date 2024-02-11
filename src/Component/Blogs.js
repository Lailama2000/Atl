import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Button from '@mui/material/Button';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from "react-i18next";
import prev from '../Media/Layer 2.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Blogs({News}) {
  const matches = useMediaQuery('(min-width:1113px)');
  const [activeStep, setActiveStep] = useState(0);
  const itemsPerRow = matches?3 : 1 ; 
  const maxSteps = News.length;
  const { t  } = useTranslation();
  const navigate = useNavigate()
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleBlog =(id) =>{
    console.log(id)
    axios.get(`${process.env.REACT_APP_API_URL}blog-details/${id}`).then(
      res =>{
        navigate('/blogDetails',{state : {data : res.data.data}})
      }
    )
  }
  const displayCardsInRows = (cards) => {
    const rows = [];
    const totalRows = Math.ceil(cards.length / itemsPerRow)

    for (let i = 0; i < totalRows; i++) {
      const cardsForRow = cards.slice(i * itemsPerRow, (i + 1) * itemsPerRow);

      const row = (
        <div
          key={i}
          style={{
            display: 'flex',
            flexWrap:'wrap',
            justifyContent: 'center',
            alignItems:'center',
            gap: '50px',
            marginBottom: '30px',
          }}
        >
          {cardsForRow.map((c) => (
            <Card
              key={c.id}
              sx={{ width:'300px', borderRadius: '10px' }}
            >
              <CardContent
                sx={{
                  padding:matches?'30px':'30px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'start',
                  alignItems: 'start',
                  position:'relative'
                }}
              >
                                <Stack>
                <img
                  src={c.image}
                  style={{ borderRadius:'10px',width: '240px', height: '200px', objectFit: 'fill' }}
                />
                <Typography sx={{position:'absolute',top:'150px',left:matches?'6%':'15%',color:'white',fontWeight:'bold',
                fontSize:'16px' }}>
                {c.title}</Typography>
                <Typography sx={{color:'#018EA2',fontSize:'10px',fontWeight:'bold',marginTop:c.date?'10px':'25px' }}>
                {c.date}
                </Typography>
                <Typography sx={{color:'#7D4896',fontSize:'14px',marginTop:'10px' }}>
                {c.description}
                </Typography>
                <Button sx={{bgcolor:'#7D4896',color:'white',marginTop:'30px',borderRadius:'5px',
              '&:hover':{bgcolor:'#7D4896',color:'white'},fontSize:'16px',textTransform:'none'}}
              onClick={()=>{handleBlog(c.id)}}>
                  {t('Read more')}
                </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </div>
      );

      rows.push(row);
    }

    return rows;
  };

  return (
    <div  style={{ backgroundColor: '#F1F1F1', padding: '20px' }}>
       <Typography sx={{ fontWeight:'bold',display:'flex',flexWrap:'wrap',
       justifyContent:'center',alignItems:'center',fontWeight:'bold',fontSize:'30px'
       ,marginTop:'20px',color:"#7D4896",marginBottom:'20px' }}>
       {t('The ATL Blogs')}
      </Typography>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {displayCardsInRows(News)}
      </AutoPlaySwipeableViews>
    {matches ? 
     <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',position:'relative' }}>
      <Button sx={{ height: '30px', color: '#7D4896',position:'absolute',bottom:'220px',left:'50px',cursor:'pointer'}}
              onClick={handleNext}
              disabled={activeStep === maxSteps%3}
          >
              <img src={prev} style={{width:'30px',height:'30px',cursor:'pointer' }} />
          </Button>
          <Button
              sx={{ color: '#7D4896', height: '30px', position:'absolute',bottom:'220px',right:'50px',cursor:'pointer' }}
               onClick={handleBack} disabled={activeStep === 0}>
              <img src={prev} style={{width:'30px',height:'30px',transform:'scaleX(-1)',cursor:'pointer' }} />
              </Button></div> :<></>}
    </div>
  );
}