import { Box, Container, Link, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import logo from './Media/Group 9686.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const matches = useMediaQuery('(min-width:960px)');
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#018EA2',
        color: 'white',
        py: 2,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={matches ? 'row' : 'column'}
          gap={matches ? 15 : 2}
          sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}
        >
          <img src={logo} style={{ height: '50px', width: '50px', objectFit: 'contain' }} />

          <Typography variant="body2" sx={{ fontSize: '15px' }}>
            {t('CopyRight 2023, All Rights Reserved')}
          </Typography>

          <Typography variant="body2" sx={{ fontSize: '15px' }}>
            <Link
              onClick={() => {
                navigate('/privacypolicy');
              }}
              sx={{ color: 'white', fontSize: '15px', textDecoration: 'underline', cursor: 'pointer' }}
            >
              {t("Privacy Policy")}
            </Link>
            {" "} | {" "}
            <Link
              onClick={() => {
                navigate('/terms');
              }}
              sx={{ color: 'white', fontSize: '15px', textDecoration: 'underline', cursor: 'pointer' }}
            >
              {t("Terms and Conditions")}
            </Link>
          </Typography>

          <Typography variant="body2" sx={{ fontSize: '15px' }}>
            {t("Powered By")}{' '}
            <Link
              href="https://smartedge.me"
              sx={{ color: 'white', fontSize: '15px', textDecoration: 'none', fontWeight: 'bold' }}
            >
              {t("SmartEdge")}
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}