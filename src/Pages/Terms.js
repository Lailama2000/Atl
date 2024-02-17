import React, { useEffect, useState } from 'react'
import pic from '../Media/Terms.png'
import { Container, Typography, useMediaQuery } from '@mui/material'
import axios from 'axios';
import LoadingPage from '../Component/LoadingPage';

export default function Terms({navbarHeight}) {
  const [Terms, setTerms] = useState();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    window.scrollTo(0,0)
    axios.get(`${process.env.REACT_APP_API_URL}terms`).then((res) => {
      setTerms(res.data.message.terms_condition);
      setOpen(false)
    });
  }, []);
  const matches = useMediaQuery('(min-width:718px)');

  return (
    <>
        {open && <LoadingPage open={open}/>}
        {!open && <>
          <img src={pic} style={{width:'100%',
          height:matches?'500px':'380px',objectFit:matches?'cover':'contain'}}/>
                    <div  style={{
          marginTop: matches?'50px':'',
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: matches?'30px':'140px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Container maxWidth='lg'>
                      <Typography sx={{fontSize:'20px',color:'#888888'}}
                      dangerouslySetInnerHTML={{ __html: Terms }}                                             >
                      </Typography>
                      </Container>
                    </div> </>}
                    </>
  )
}
