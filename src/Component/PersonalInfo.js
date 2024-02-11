import { TextField, Grid, Stack, useMediaQuery, MenuItem } from '@mui/material';
import React from 'react';
import PhoneInput from "react-phone-input-2";
import '../App.css';
import 'react-phone-input-2/lib/style.css'
import { useTranslation } from 'react-i18next';
import CheckBoxesComp from './CheckBox';

export default function PersonalInfo({name,setName,gender,selectedGender,setselectedGender,phone,prephone,
    setPhone,birthday,setBirthday,email,setEmail,lastName,setLastName,checked,setChecked,setAlerting,setPrePhone}){
    const { t } = useTranslation();
    const handleClick =() =>{
        setChecked(!checked)
    }
    const matches = useMediaQuery('(min-width:580px)');
    const matche = useMediaQuery('(min-width:1022px)');
    const handlePhoneChange = (value,country) => {
        setPhone(value);
        localStorage.setItem('phone', value);
        setPrePhone(country.dialCode)
      };
  return (
    <div style={{marginTop:'30px'}}>
        <Stack direction={matches?'row':'column'} gap={matche?17:7}>
         <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("First Name")}
            </label>
            <TextField
              value={name}
              onChange={(e) => { setName(e.target.value);setAlerting(false);localStorage.setItem('name',e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width: matche?'50vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            />
          </Grid>


          <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Last Name")}
            </label>
            <TextField
              value={lastName}
              onChange={(e) => { setLastName(e.target.value) ;setAlerting(false);localStorage.setItem('last name',e.target.value)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width: matche?'50vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            />
          </Grid>
          </Stack>


          <Stack direction={matches?'row':'column'} gap={matche?17:7} sx={{marginTop:'20px'}}>
         <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Gender")}
            </label>
            <TextField
            select
              value={selectedGender}
              onChange={(e) => { setselectedGender(e.target.value);setAlerting(false);localStorage.setItem('gender',e.target.value) }}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width: matche?'50vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}>
            {gender.map((c) => (
                <MenuItem value={c}>
                  {c}
                </MenuItem>
              ))}
              </TextField>
          </Grid>


          <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Birthdate")}
            </label>
            <TextField
              value={birthday}
              type='date'
              onChange={(e) => { setBirthday(e.target.value) ;setAlerting(false);localStorage.setItem('birthday',e.target.value)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width: matche?'50vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            inputProps={{
                max: new Date().toISOString().split('T')[0], 
              }}
            />
          </Grid>
          </Stack>

          <Stack direction={matches?'row':'column'} gap={matche?17:7} sx={{marginTop:'20px'}}>
         <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Phone Number")}
            </label>
            <PhoneInput
            country={'jo'}
            enableSearch={true}
            value={phone}
            onChange={(value,country) => handlePhoneChange(value,country)}
            style={{direction:'ltr'}}
            inputStyle={{
                width: matches ? '50vh' : '200px',
                height: '38px',
                color: 'black',
                fontSize: '13px',
                border: '1.33px solid #7D4896',
                marginTop: '15px',
            }}
            />
          </Grid>


          <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Email")}
            </label>
            <TextField
              value={email}
              type='email'
              onChange={(e) => { setEmail(e.target.value) ;setAlerting(false);localStorage.setItem('email',e.target.value);
              localStorage.setItem('phone',phone)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width: matche?'50vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            />
          </Grid>
          </Stack>
          <div style={{marginTop:'20px'}}>
          <CheckBoxesComp 
            label={
                <span style={{fontSize:'13px'}}>
                {t('I Agree The')} 
                {' '}
                <a href="#/terms" target="_blank" style={{color:'#707070',textDecoration:'none',fontWeight:'bold'}}>{t('Terms & Conditions')}</a>
                {' '}
                {t('And The')} 
                {' '}
                <a href="#/privacypolicy" target="_blank" style={{color:'#707070',textDecoration:'none',fontWeight:'bold'}}>{t('Privacy Policy')}</a>
                {' '}
                </span>
            }
            checked={checked}
            onChange={handleClick}
            />
        </div>
    </div>
  )
}
