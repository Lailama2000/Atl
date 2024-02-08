import React, { useEffect, useState } from 'react'
import pic from '../Media/Terms.png'
import { Typography } from '@mui/material'
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
  return (
    <>
        {open && <LoadingPage open={open}/>}
        {!open && <>
    <div style={{backgroundImage: `url(${pic})`,backgroundSize: 'cover',height:'500px'
    ,marginTop:`${navbarHeight}px`}}>  
        </div>
                    <div style={{marginTop:'50px',display:'flex',flexWrap:'wrap',marginBottom:'30px'
                    ,justifyContent:'center',alignItems:'center'}}>
                      <Typography sx={{fontSize:'20px',color:'#888888'}}
                      dangerouslySetInnerHTML={{ __html: Terms }}                                             >
                      </Typography>
                    </div> </>}
                    </>
  )
}
