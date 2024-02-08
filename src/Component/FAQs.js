import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function FAQs({questions,setQuestions}) {
  const { t } = useTranslation();

  const toggleQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].isOpen = !newQuestions[index].isOpen;
    setQuestions(newQuestions);
  };

  return (
    <div sx={{ marginBottom: '30px' }}>
      <Box sx={{
        backgroundColor: '#F5C660', width: '100%', justifyContent: 'center',
        alignItems: 'center', paddingBottom: '60px'
      }}>
        <Typography sx={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
          fontWeight: 'bold', fontSize: '30px', color: '#7D4896', marginBottom: '20px',paddingTop:'40px'
        }}>
          {t('FAQs')}
        </Typography>


        {questions.map((q, index) => (
          <Accordion
            key={index}
            sx={{
              borderBottom: '2px solid #7D4896', width: '60%',marginLeft:'15%' ,bgcolor:'transparent',
              '&:before': { display: 'none' },
              borderBottom: '2px solid #7D4896',
              padding: '30px',
              boxShadow:'none',
              '&:last-child': { borderBottom: '2px solid #7D4896', width: '60%',marginLeft:'15%', 
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
        ))}
      </Box>
    </div>
  );
}