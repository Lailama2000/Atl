import React from 'react';
import pic from '../Media/Group 9671.png';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import pic2 from '../Media/Group 9660.png';

export default function WhyUs({whyUs}) {
  const matches = useMediaQuery('(min-width:711px)');
  const lang = localStorage.getItem('lang');

  return (
    <div style={{ backgroundColor: '#7D4896', position: 'relative', minHeight: '550px',height:whyUs.length > 3 ?'':'650px' }}>
      <Stack sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start', padding: '50px' }}>
        <Typography sx={{ color: '#F5C660', fontSize: '40px', fontWeight: 'bold', marginBottom: '40px' }}>
          What makes <br />
          ATL Different?
        </Typography>
        <img
          src={pic}
          style={{
            height: '550px',
            width: '250px',
            position: 'absolute',
            right: lang ==='ar' ? '' : '0px',
            left: lang ==='ar' ? '0px' : '',
            top: '7%',
            transform: lang ==='ar' ? 'scaleX(-1)' : '',
          }}
        />

        {whyUs.map((whyUs, index) => (
          <Stack direction="row" gap={2} sx={{ marginLeft: index % 2 === 0 ? '' : 
          matches && lang === 'en'? '80px' : '', marginRight:index % 2 === 0 ? '' : 
          matches && lang === 'ar' ? '80px' : '' }}>
            <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
              <img src={pic2} style={{ width: '50px', height: '50px', objectFit: 'fill' }} />
              <Typography
                sx={{
                  color: 'white',
                  position: 'absolute',
                  top: '18px',
                  left: '23px',
                  fontWeight: 'bold',
                  fontSize: '15px',
                }}
              >
                {index+1}
              </Typography>
            </div>

            <Stack gap={1}>
              <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: 'white' }}>
                {whyUs.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '15px',
                  color: 'white',
                  whiteSpace: matches ? 'pre-line' : '',
                  width: matches ? '500px' : '200px',
                  marginBottom: '60px',
                  zIndex: 1,
                }}
                dangerouslySetInnerHTML={{ __html: whyUs.discription }}
              ></Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </div>
  );
}