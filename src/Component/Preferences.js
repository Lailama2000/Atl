import { TextField, Grid, Stack, useMediaQuery, Button, MenuItem, Typography, Divider, Checkbox } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CheckBoxesComp from './CheckBox';

export default function Preferences({selectedarea,setSelectedArea,area,selectedDays,setSelectedDays,timeSlots,
    setTimeSlots}) {
    const { t } = useTranslation();
    const matches = useMediaQuery('(min-width:520px)');
      useEffect(()=>{      
          window.scrollTo(0,0)
      },[])
      const handleCheckboxChange = (e, day) => {
        if (selectedDays.includes(day)) {
          setSelectedDays(selectedDays.filter((d) => d !== day));
          setTimeSlots(timeSlots.filter((slot) => slot.day !== day));
        } else {
          setSelectedDays([...selectedDays, day]);
      
          setTimeSlots((prevTimeSlots) => {
            const updatedTimeSlots = [...prevTimeSlots];
            updatedTimeSlots.push({ day, from: '12:00', to: '12:00' }); 
            return updatedTimeSlots;
          });
        }
      };

      const handleTimeChange = (event, day) => {
        const { name, value } = event.target;
        setTimeSlots((prevTimeSlots) => {
          const updatedTimeSlots = [...prevTimeSlots];
          const index = updatedTimeSlots.findIndex((slot) => slot.day === day);
    
          if (index !== -1) {
            updatedTimeSlots[index][name] = value;
          } else {
            updatedTimeSlots.push({ day, [name]: value });
          }
          return updatedTimeSlots;
        });
      }
      return (
    <div style={{marginTop:'30px'}}>
       <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#018EA2' , marginBottom:'10px'}}>
            {t("Preferred Areas")}
            </label>
            <TextField
            select
            SelectProps={{ value: selectedarea, multiple: true }}
              value={selectedarea}
              onChange={(e) => { setSelectedArea(e.target.value)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width: '100%',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            >
                {area.map((c) => (
                <MenuItem value={c.id}>
                  {c.name}
                </MenuItem>
              ))}
              </TextField>
          </Grid>




          <Stack sx={{marginTop:'30px'}}>
          <label style={{color:'#018EA2' , marginBottom:'20px'}}>
            {t("Availability")}
            </label>
            <Stack gap={8} >
            <Stack direction={matches ? 'row' : 'column'} gap={5} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start' }}>
    <Checkbox
      sx={{
        color: '#7D4896',
        '&.Mui-checked': {
          color: '#7D4896',
        },
      }}
      checked={selectedDays.includes('Saturday')}
      onChange={(e) => handleCheckboxChange(e, 'Saturday')}
    />
    <Typography sx={{ color: '#707070', fontSize: '15px', width: '30px' }}>
      {t('Saturday')}
    </Typography>
    {matches && <Divider sx={{ width: '60px', marginLeft: '20px', height: '1px', marginTop: '10px', backgroundColor: '#018EA2' }} />}

    <Typography sx={{ color: '#707070', fontSize: '15px' }}>
      {t('From')}
    </Typography>
    <TextField
      disabled={!selectedDays.includes('Saturday')}
      defaultValue="12:00" 
      type="time"
      sx={{
        width: '200px',
        '.MuiInputBase-root': { color: '#7D4896', height: '40px', border: '1.2px solid #018EA2' },
      }}
      onChange={(event) => handleTimeChange(event, 'Saturday')}
      name="from"
    />
    <Typography sx={{ color: '#707070', fontSize: '15px' }}>
      {t('To')}
    </Typography>
    <TextField
      disabled={!selectedDays.includes('Saturday')}
      defaultValue="12:00" 
      type="time"
      sx={{
        width: '200px',
        '.MuiInputBase-root': { color: '#7D4896', height: '40px', border: '1.2px solid #018EA2' },
      }}
      onChange={(event) => handleTimeChange(event, 'Saturday')}
      name="to"
    />
  </Stack>


            <Stack direction={matches?'row':'column'} gap={5} sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
            <Checkbox
              sx={{
                color: '#7D4896',
                '&.Mui-checked': {
                  color: '#7D4896',
                },
              }}
            checked={selectedDays.includes('Sunday')}
            onChange={(e) => handleCheckboxChange(e,'Sunday')}
          />
                <Typography sx={{color:'#707070',fontSize:'15px',width:'30px'}}>
                {t('Sunday')}
                </Typography>
                {matches && <Divider sx={{width:'60px',marginLeft:'20px',height:'1px',marginTop:'10px' , backgroundColor:'#018EA2'}}/>}
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('From')}

              </Typography>
              <TextField
                disabled ={!selectedDays.includes("Sunday")}
      defaultValue="12:00" 
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Sunday')}
                name="from"
              />
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('To')}

              </Typography>
              <TextField
                 disabled ={!selectedDays.includes("Sunday")}
                type='time'
      defaultValue="12:00" 
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Sunday')}
                name="to"
              />
        
            </Stack>


            <Stack direction={matches?'row':'column'} gap={5} sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
            <Checkbox
              sx={{
                color: '#7D4896',
                '&.Mui-checked': {
                  color: '#7D4896',
                },
              }}
            checked={selectedDays.includes('Monday')}
            onChange={(e) => handleCheckboxChange(e,'Monday')}
          />
                <Typography sx={{color:'#707070',fontSize:'15px',width:'30px'}}>
                {t('Monday')}
                </Typography>
                {matches && <Divider sx={{width:'60px',marginLeft:'20px',height:'1px',marginTop:'10px' , backgroundColor:'#018EA2'}}/>}
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('From')}

              </Typography>
              <TextField
                              disabled ={!selectedDays.includes("Monday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Monday')}
                name="from"
              />
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('To')}

              </Typography>
              <TextField
                              disabled ={!selectedDays.includes("Monday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Monday')}
                name="to"
              />
            </Stack>



            <Stack direction={matches?'row':'column'} gap={5} sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
            <Checkbox
              sx={{
                color: '#7D4896',
                '&.Mui-checked': {
                  color: '#7D4896',
                },
              }}
            checked={selectedDays.includes('Tuesday')}
            onChange={(e) => handleCheckboxChange(e,'Tuesday')}
          />
                <Typography sx={{color:'#707070',fontSize:'15px',width:'30px'}}>
                {t('Tuesday')}
                </Typography>
                {matches && <Divider sx={{width:'60px',marginLeft:'20px',height:'1px',marginTop:'10px' , backgroundColor:'#018EA2'}}/>}
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('From')}
              </Typography>
              <TextField
                disabled ={!selectedDays.includes("Tuesday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Tuesday')}
                name="from"
              />
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('To')}
              </Typography>
              <TextField
                disabled ={!selectedDays.includes("Tuesday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Tuesday')}
                name="to"
              />
        
            </Stack>



            <Stack direction={matches?"row":'column'} gap={5} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "start",
             alignItems: "start" }}>
  <Checkbox
    sx={{
      color: "#7D4896",
      "&.Mui-checked": {
        color: "#7D4896",
      },
    }}
    checked={selectedDays.includes("Wednesday")}
    onChange={(e) => handleCheckboxChange(e,"Wednesday")}
  />
  <Typography sx={{ color: "#707070", fontSize: "15px",width:'30px' }}>{t("Wednesday")}</Typography>
  {matches && <Divider sx={{ width: "50px",marginLeft:'20px', height: "1px", marginTop: "10px", backgroundColor: "#018EA2" }} />}
      <Typography sx={{ color: "#707070", fontSize: "15px" }}>{t("From")}</Typography>
      <TextField
      disabled ={!selectedDays.includes("Wednesday")}
        defaultValue="00:00" 
        type="time"
        sx={{
          width: "200px",
          ".MuiInputBase-root": { color: "#7D4896", height: "40px", border: "1.2px solid #018EA2" },
        }}
        onChange={(event) => handleTimeChange(event, "Wednesday")}
        name="from"
      />
      <Typography sx={{ color: "#707070", fontSize: "15px" }}>{t("To")}</Typography>
      <TextField
        disabled ={!selectedDays.includes("Wednesday")}
        defaultValue="00:00" 
        type="time"
        sx={{
          width: "200px",
          ".MuiInputBase-root": { color: "#7D4896", height: "40px", border: "1.2px solid #018EA2" },
        }}
        onChange={(event) => handleTimeChange(event, "Wednesday")}
        name="to"
      />
</Stack>

            <Stack direction={matches?'row':'column'} gap={5} sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
            <Checkbox
              sx={{
                color: '#7D4896',
                '&.Mui-checked': {
                  color: '#7D4896',
                },
              }}
            checked={selectedDays.includes('Thursday')}
            onChange={(e) => handleCheckboxChange(e,'Thursday')}
          />
                <Typography sx={{color:'#707070',fontSize:'15px',width:'30px'}}>
                {t('Thursday')}
                </Typography>
                {matches && <Divider sx={{width:'60px',marginLeft:'20px',height:'1px',marginTop:'10px' , backgroundColor:'#018EA2'}}/>}
                
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('From')}

              </Typography>
              <TextField
                disabled ={!selectedDays.includes("Thursday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Thursday')}
                name="from"
              />
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('To')}

              </Typography>
              <TextField               
               disabled ={!selectedDays.includes("Thursday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Thursday')}
                name="to"
              />
          
          
            </Stack>

            <Stack direction={matches?'row':'column'} gap={5} sx={{display:'flex',flexWrap:'wrap',justifyContent:'start',alignItems:'start'}}>
            <Checkbox
              sx={{
                color: '#7D4896',
                '&.Mui-checked': {
                  color: '#7D4896',
                },
              }}
            checked={selectedDays.includes('Friday')}
            onChange={(e) => handleCheckboxChange(e,'Friday')}
          />
                <Typography sx={{color:'#707070',fontSize:'15px',width:'30px'}}>
                {t('Friday')}
                </Typography>
                {matches && <Divider sx={{width:'60px',marginLeft:'20px',height:'1px',marginTop:'10px' , backgroundColor:'#018EA2'}}/>}
              
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('From')}

              </Typography>
              <TextField
                 disabled ={!selectedDays.includes("Friday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Friday')}
                name="from"
              />
              <Typography sx={{ color: '#707070', fontSize: '15px' }}>
              {t('To')}

              </Typography>
              <TextField
                disabled ={!selectedDays.includes("Friday")}
                defaultValue="00:00"
                type='time'
                sx={{
                  width: '200px',
                  '.MuiInputBase-root': { color: "#7D4896", height: '40px', border: '1.2px solid #018EA2' }
                }}
                onChange={(event) => handleTimeChange(event, 'Friday')}
                name="to"
              />
            </Stack>


            </Stack>
            </Stack>
    </div>
  )
}
