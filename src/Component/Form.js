import { Typography, TextField, Grid, Stack, TextareaAutosize, useMediaQuery, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import '../App.css';
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setemail] = useState('');
  const [alerting,setAlerting]= React.useState(false)
  const [message, setMessage] = useState('');
  const [prephone, setPrePhone] = useState('');

  const matches = useMediaQuery('(min-width:686px)');
  const { t } = useTranslation();
  const handlePhoneChange = (value,country) => {
    setPhone(value);
    setPrePhone(country.dialCode)
  };

  const handlesend=() =>{
    const formData = new FormData();
    if(firstName && lastName && phone && email && message){
    formData.append('name', firstName + lastName);
    formData.append('prefix_number', prephone);
    formData.append('phone_number', phone);
    formData.append('subject', 'test');
    formData.append('email', email);
    formData.append('message', message);
  //   for (var pair of formData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  // } 
    try{
    axios.post(`${process.env.REACT_APP_API_URL}contact-us`,formData).then(
      res=>{ console.log(res.data)
        if(res.data.status === true){
          alert('Message Send Successfully')
          setFirstName('')
          setLastName('')
          setPhone('')
          setMessage('')
          setemail('')
        }
      }
    )}
    catch(error){
      console.log(error)
    }
    }
    else{
      setAlerting(true)
    }
  }

  const lang = localStorage.getItem('lang');

  return (
    <div style={{backgroundColor:'white',marginTop:matches?'90px':'10px' }}>
        <Typography sx={{ color: '#7D4896', fontSize: '25px', fontWeight: 'bolder' ,marginBottom:'40px'}}>{t('Got more questions?')}
        <br />
          {t('Drop us a message!')}
 </Typography>
        <Stack direction={matches ? 'row' : 'column'} gap={2}>
          <Grid>
            <TextField
              placeholder={t("First Name")}
              value={firstName}
              onChange={(e) => { setFirstName(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white'
                }
              }}
              sx={{borderRadius:'5px', width: '300px', border: '1px solid white', 
              bgcolor:'#7D4896',
              '&:focus': { border: '1px solid white' },'.MuiInputBase-input':{color:"white"} }}
            />
          </Grid>
          <Grid>
            <TextField
              placeholder={t("Last Name")}
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white' 
                }
              }}
              sx={{borderRadius:'5px', width: '300px', border: '1px solid white', bgcolor:'#7D4896',
              '&:hover': { border: '1px solid white' },'.MuiInputBase-input':{color:"white"} }}
            />
          </Grid>
        </Stack>

        <Stack direction={matches ? 'row' : 'column'} gap={2} sx={{ marginTop: '20px' }}>
          <Grid>
          <div style={{ direction: lang === 'ar' ? 'ltr' : 'ltr' }}>
      <PhoneInput
        country={'jo'}
        enableSearch={true}
        value={phone}
        onChange={(value, country) => handlePhoneChange(value, country)}
        inputStyle={{
          backgroundColor: '#7D4896',
          width: '300px',
          color: 'white',
          fontSize: '13px',
          border: '1px solid white',
          borderRadius: '5px',
          height: '52px',
          marginTop: '-15px',
          direction:'ltr'
        }}
      />
    </div>
          </Grid>
          <Grid>
            <TextField
              placeholder={t('Email')}
              type='email'
              value={email}
              onChange={(e) => { setemail(e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: 'white' 
                }
              }}
              sx={{ borderRadius:'5px',width: '300px', bgcolor:'#7D4896',
              border: '1px solid white', '&:hover': { border: '1px solid white' } ,'.MuiInputBase-input':{color:"white"}}}
            />
          </Grid>
        </Stack>
        <Grid sx={{ marginTop: '20px' }}>
        <TextareaAutosize
        onChange={(e) => { setMessage(e.target.value) }}
        name="message"
        placeholder={t('Message')}
        value={message}
        cols={matches ? 97 : 46}
        className="custom-textarea"
        style={{ resize: 'none', overflow: 'auto', height:'100px' }}
        />
        </Grid>
        {alerting && <Alert  severity="error" sx={{width:'300px', marginTop: '20px'}}>One of the Feilds is empty</Alert>}
        <Button onClick={handlesend} sx={{
            bgcolor:'#018EA2',color:'white',padding:'10px',width:'150px',marginBottom:'40px',marginTop:'20px',
            '&:hover':{bgcolor:'#018EA2',color:'white'},fontSize:'16px',textTransform:'none'
        }}>{t('Send')}</Button>
    </div>
  );
}