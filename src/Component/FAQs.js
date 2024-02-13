import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../App.css'
export default function FAQs({questions,setQuestions}) {
  const { t } = useTranslation();

  const toggleQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
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
     <div className="scroll-container">
  {questions.map((q, index) => (
      <Accordion
        sx={{
          borderBottom: '2px solid #7D4896',
          width: '60%',
          marginLeft: '0%',
          bgcolor: 'transparent',
          '&:before': { display: 'none' },
          padding: '20px',
          boxShadow: 'none',
          '&:last-child': {
            borderBottom: '2px solid #7D4896',
            width: '60%',
            marginLeft: '0%',
            borderRadius: '0px'
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
  ))}
</div>
      </Box>
    </div>
  );
}