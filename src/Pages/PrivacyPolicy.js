import React, { useEffect, useState } from 'react'
import pic from '../Media/Rectangle.png'
import { Typography } from '@mui/material'

export default function PrivacyPolicy({navbarHeight}) {
  return (
    <>
    <div style={{backgroundImage: `url(${pic})`,backgroundSize:'cover',height:'500px'
    ,marginTop:`${navbarHeight}px`}}>  
        </div>
                    <div style={{marginTop:'50px',display:'flex',flexWrap:'wrap',marginBottom:'30px'
                    ,justifyContent:'center',alignItems:'center'}}>
                      <Typography sx={{fontSize:'20px',color:'#888888'}}>
                        privacy policy 
                      </Typography>
                    </div>
                    </>
  )
}
