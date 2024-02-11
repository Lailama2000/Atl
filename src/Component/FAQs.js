import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
export default function FAQs({questions,setQuestions}) {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const itemsPerColumn = 3 ;
  const maxSteps = questions.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const toggleQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };



  const displayCardsInRows = (questions) => {
    const rows = [];
    const totalRows = Math.ceil(questions.length / itemsPerColumn)

    for (let i = 0; i < totalRows; i++) {
      const cardsForRow = questions.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn);

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
          {cardsForRow.map((q,index) => (
            <>
             <Accordion
            key={index}
            sx={{
              borderBottom: '2px solid #7D4896', width: '60%',marginLeft:'0%' ,bgcolor:'transparent',
              '&:before': { display: 'none' },
              borderBottom: '2px solid #7D4896',
              padding: '20px',
              boxShadow:'none',
              '&:last-child': { borderBottom: '2px solid #7D4896', width: '60%',marginLeft:'0%', 
               borderRadius:'0px',
            }
            }}
            elevation={0}
            disableGutters
            expanded={q.isOpen}
            onChange={() => toggleQuestion(index)}
          >
          
             <AccordionSummary>
             {q.isOpen ? (
               <RemoveIcon sx={{ color: '#7D4896', marginRight: '20px', marginTop: '5px' }} />
             ) : (
               <AddIcon sx={{ color: '#7D4896', marginRight: '20px', marginTop: '5px' }} />
             )}
             <Typography sx={{ color: '#7D4896', fontSize: '20px', fontWeight: 'bold' }}>
               {q.question}
             </Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography sx={{ color: '#7D4896', fontSize: '16px' }}>
               {q.answer}
             </Typography>
           </AccordionDetails>
           </Accordion>
           </>
          ))}
        </div>
      );

      rows.push(row);
    }

    return rows;
  };

  return (
    <div id={t('FAQs')} sx={{ marginBottom: '30px' }}>
      <Box sx={{
        backgroundColor: '#F5C660', width: '100%', justifyContent: 'center',
        alignItems: 'center', paddingBottom: '60px'
      }}>
        <Typography sx={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
          fontWeight: 'bold', fontSize: '30px', color: '#7D4896', marginBottom: '0px',paddingTop:'40px'
        }}>
          {t('FAQs')}
        </Typography>
        <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        interval={5000}
      >
        {displayCardsInRows(questions)}
      </AutoPlaySwipeableViews>

     <div style={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',position:'relative' }}>
      <Button sx={{ height: '30px', color: '#7D4896',position:'absolute',bottom:'20px',left:'50px',cursor:'pointer'}}
              onClick={handleNext}
              disabled={activeStep === questions.length -1  }
          >
            <ArrowBackIosNewIcon />
          </Button>
          <Button
              sx={{ color: '#7D4896', height: '30px', position:'absolute',bottom:'20px',right:'50px'
              ,cursor:'pointer' }}
               onClick={handleBack} disabled={activeStep === 0}>
              <ArrowForwardIosIcon />
              </Button></div> :<></>
      </Box>
    </div>
  );
}