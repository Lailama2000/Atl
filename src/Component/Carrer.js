import { TextField, Grid, Stack, useMediaQuery, Button, MenuItem } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AttachFileIcon from '@mui/icons-material/AttachFile';

export default function Carrer({experiance,setExperiance,position,setPosition,school,setSchool,program,
    selectedprogram,setSelectedProgram,material,selectedmaterial,setSelectedMaterial,stage,selectedstage,
    setSelectedStage,setAlerting,setCv}) {
        const { t } = useTranslation();
        const handleFileChange = (event) => {
            const file = event.target.files[0];
            setCv(file)
          };
          const matches = useMediaQuery('(min-width:580px)');
          const matche = useMediaQuery('(min-width:1022px)');
useEffect(()=>{  
  setAlerting(false)
  window.scrollTo(0,0)
},[])
  return (
    <div style={{marginTop:'30px'}}>
       <Stack direction={matches?'row':'column'} gap={matche?17:7}>
         <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Experience in Years")}
            </label>
            <TextField
              value={experiance}
              type='number'
              onChange={(e) => { setExperiance(e.target.value);setAlerting(false)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width:  matche?'59vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            />
          </Grid>


          <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Current Position")}
            </label>
            <TextField
              value={position}
              onChange={(e) => { setPosition(e.target.value) ;setAlerting(false)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width:  matche?'59vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            />
          </Grid>
          </Stack>


          <Stack direction={matches?'row':'column'} gap={matche?17:7} sx={{marginTop:'20px'}}>
         <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Current School")}
            </label>
            <TextField
              value={school}
              onChange={(e) => { setSchool(e.target.value);setAlerting(false)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width:  matche?'59vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            />
          </Grid>


          <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Program")}
            </label>
            <TextField
            select
            SelectProps={{ value: selectedprogram, multiple: true }}
              value={selectedprogram}
              onChange={(e) => { setSelectedProgram(e.target.value) ;setAlerting(false)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width:  matche?'59vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            >
                {program.map((c) => (
                <MenuItem value={c.id}>
                  {c.name}
                </MenuItem>
              ))}
              </TextField>
          </Grid>
          </Stack>


          <Stack direction={matches?'row':'column'} gap={matche?17:7} sx={{marginTop:'20px'}}>
            

          <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Stage")}
            </label>
            <TextField
            select
            SelectProps={{ value: selectedstage, multiple: true }}
              value={selectedprogram}
              onChange={(e) => { setSelectedStage(e.target.value) ;setAlerting(false)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width:  matche?'59vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            >
                {stage.map((c) => (
                <MenuItem value={c.id}>
                  {c.name}
                </MenuItem>
              ))}
              </TextField>
          </Grid>

         <Grid sx={{display:'flex',flexDirection:'column'}}>
         <label style={{color:'#707070' , marginBottom:'10px'}}>
            {t("Materials")}
            </label>
            <TextField
             select
             SelectProps={{ value: selectedmaterial, multiple: true }}
              value={selectedmaterial}
              onChange={(e) => { setSelectedMaterial(e.target.value);setAlerting(false)}}
              InputLabelProps={{
                sx: {
                  color: '#7D4896'
                }
              }}
              sx={{width:  matche?'59vh':'200px',
              '.MuiInputBase-root':{color:"black",height:'40px',border: '1.2px solid #7D4896'} 
            }}
            > {material.map((c) => (
                <MenuItem value={c.id}>
                  {c.name}
                </MenuItem>
              ))}
              </TextField>
          </Grid>

          </Stack>

          <label htmlFor="resume-upload">
      <Button
        component="span"
        sx={{
          color: 'white',
          bgcolor: '#018EA2',
          width: '100%',
          fontSize: '16px',
          fontWeight: 'bold',
          '&:hover': { color: 'white', bgcolor: '#018EA2' },
          marginTop: '30px',
        }}
      >
        {t('Attach Resumé')} <AttachFileIcon sx={{transform: 'rotate(-40deg)',marginLeft:'10px'}} />
      </Button>
      <input
        type="file"
        id="resume-upload"
        accept=".pdf,.doc,.docx"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </label>
    </div>
  )
}
