import React, { useEffect, useState } from 'react'
import ContactInfo from '../Component/ContactInfo'
import Form from '../Component/Form'
import { Stack,useMediaQuery } from '@mui/material';
import Sliders from '../Component/Sliders';
import WhyUs from '../Component/WhyUs';
import Approches from '../Component/Approches';
import Touter from '../Component/Touter';
import FAQs from '../Component/FAQs';
import Blogs from '../Component/Blogs';
import axios from 'axios';
import LoadingPage from '../Component/LoadingPage';
export default function MainPage({navbarHeight}) {
    const lang = localStorage.getItem('lang')
    const matches = useMediaQuery('(min-width:800px)');
    const [News,setNews] = useState([])
    const [slider,setslider] = useState([])
    const [whyUs,setWhyUs] = useState([])
    const [questions,setQuestions] =useState([])
    const [contact,setContact] =useState({})
    const [open, setOpen] = useState(true);
    useEffect(()=>{
      window.scrollTo(0,0)
      axios.get(`${process.env.REACT_APP_API_URL}home-page`, {
        headers: {
          lang : lang
        },
      }).then(res=>{
        setNews(res.data.data.blog)
        setslider(res.data.data.sliders)
        setWhyUs(res.data.data.reasons)
        setQuestions(res.data.data.faqs)
        setContact(res.data.data.general)
        setOpen(false)
      })
    },[])

  return (
    <div style={{marginTop:`100px`}}>
       {open && <LoadingPage open={open} />}
       {!open &&<>
      <Sliders slider={slider} />
      <WhyUs whyUs={whyUs}/>
      <Approches />
      <Touter/>
      <Blogs News={News}/>
      <FAQs questions={questions} setQuestions={setQuestions}/>
       <Stack sx={{backgroundColor:'white'}} id='Contact Us'>
        <Stack direction={matches ? 'row' : 'column'} 
         sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'10%'}}>
      <Form />
      <ContactInfo contact={contact}/>
      </Stack>
      </Stack>
      </>
      }
    </div>
  )
}
