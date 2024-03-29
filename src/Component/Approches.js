import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import pic1 from '../Media/Group 9672.png'
import pic2 from '../Media/Group 9674.png'
import pic3 from '../Media/Group 9675.png'
import pic4 from '../Media/Group 9676.png'
import pic5 from '../Media/Group 9673.png'
import { useTranslation } from 'react-i18next';

export default function Approches() {
    const { t } = useTranslation();
    const matches = useMediaQuery('(min-width:400px)');

  return (
    <div id={t('Learning Approaches')} 
    style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
        <Stack gap={1} sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Container style={{display: 'flex', flexWrap: 'wrap',flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
      <Typography sx={{fontSize:'40px',fontWeight:'bold',color:'#7D4896',marginTop:'50px'}}>
      {t('The 5 Approaches')} 
      </Typography>
      <Typography sx={{fontSize:'40px',fontWeight:'bold',color:'#7D4896',marginRight:matches?'':'22%'}}>
     {t('Of Learning')}
      </Typography>
      </Container>

      <Stack direction='row' gap={7}
      sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',marginTop:'40px'}}>
        <Stack gap={2}   sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{bgcolor:'#7D4896',padding:'20px',width:'100px',borderRadius:'20px',height:'90px',
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <img src={pic1} style={{width:'70px',height:'70px'}}/>
            </Box>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#7D4896',objectFit:'contain'}}>
            {t('Communication')}
            </Typography>
        </Stack>

        <Stack gap={2}   sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{bgcolor:'#7D4896',padding:'20px',width:'100px',height:'90px',borderRadius:'20px',display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <img src={pic2} style={{width:'70px',height:'70px'}}/>
            </Box>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#7D4896',objectFit:'contain'}}>
            {t('Research')}
            </Typography>
        </Stack>

        <Stack gap={2}   sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{bgcolor:'#7D4896',padding:'20px',width:'100px',height:'90px',borderRadius:'20px',display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <img src={pic3} style={{width:'70px',height:'70px'}}/>
            </Box>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#7D4896',objectFit:'contain'}}>
            {t('Social')}
            </Typography>
        </Stack>

        <Stack gap={2}   sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{bgcolor:'#7D4896',padding:'20px',borderRadius:'20px',height:'90px',width:'100px',display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <img src={pic4} style={{width:'70px',height:'70px'}}/>
            </Box>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#7D4896',objectFit:'contain'}}>
            {t('Thinking')}
            </Typography>
        </Stack>

        <Stack gap={2}   sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{bgcolor:'#7D4896',padding:'20px',borderRadius:'20px',height:'90px',width:'100px',display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
                <img src={pic5} style={{width:'70px',height:'70px',objectFit:'contain'}}/>
            </Box>
            <Typography sx={{fontSize:'20px',fontWeight:'bold',color:'#7D4896'}}>
            {t('Self-Management')}
            </Typography>
        </Stack>
      </Stack>

      </Stack>
    </div>
  )
}
