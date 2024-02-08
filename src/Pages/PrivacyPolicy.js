import React, { useEffect, useState } from 'react';
import pic from '../Media/Rectangle.png';
import { Typography } from '@mui/material';
import axios from 'axios';
import LoadingPage from '../Component/LoadingPage';

export default function PrivacyPolicy({ navbarHeight }) {
  const [privacy, setPrivacy] = useState();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    window.scrollTo(0,0)
    axios.get(`${process.env.REACT_APP_API_URL}privacy-policy`).then((res) => {
      setPrivacy(res.data.data.privacy_policy);
      setOpen(false)
    });
  }, []);
  return (
    <>
    {open && <LoadingPage open={open}/>}
    {!open && <>
      <div
        style={{
          backgroundImage: `url(${pic})`,
          backgroundSize: 'cover',
          height: '500px',
          marginTop: `${navbarHeight}px`,
        }}
      ></div>
      <div
        style={{
          marginTop: '50px',
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '30px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{ fontSize: '20px', color: '#888888' }}
          dangerouslySetInnerHTML={{ __html: privacy }}
        ></Typography>
      </div> </>}
    </>
  );
}