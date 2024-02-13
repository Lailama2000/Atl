import pic from '../Media/young-tender-curly-girl-holding-documents.png'
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import axios from 'axios';
import { Alert, Container, Stack, useMediaQuery, Typography } from '@mui/material';
import PersonalInfo from '../Component/PersonalInfo';
import Carrer from '../Component/Carrer';
import Preferences from '../Component/Preferences';
import DoneIcon from '@mui/icons-material/Done';
import Success from '../Component/Success';
import { useTranslation } from 'react-i18next';
import LoadingPage from '../Component/LoadingPage';

const steps = ['Personal Information', 'Career Information', 'Preferences'];

export default function FormPage() {
  const { t } = useTranslation();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [prephone, setPrePhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [selectedGender, setselectedGender] = useState('');
    const [gender,setgender] = useState([t('Female'),t('Male')])
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [completed, setCompleted] = React.useState({});
    const [alerting, setAlerting] = React.useState(false);
    const [checked, setChecked] = useState(false);

    const [experiance, setExperiance] = useState('');
    const [position, setPosition] = useState('');
    const [school, setSchool] = useState('');
    const [program, setProgram] = useState([]);
    const [selectedprogram, setSelectedProgram] = useState([]);
    const [stage, setStage] = useState([]);
    const [selectedstage, setSelectedStage] = useState([]);
    const [material, setMaterial] = useState([]);
    const [selectedmaterial, setSelectedMaterial] = useState([]);
    const [cv, setCv] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [timeSlots, setTimeSlots] = useState([]);
    const matches = useMediaQuery('(min-width:405px)');
    const [area, setArea] = useState([]);
    const [selectedarea, setSelectedArea] = useState([]);
    const [open, setOpen] = useState(false);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        window.scrollTo(0,0)
        axios.get(`${process.env.REACT_APP_API_URL}form-info`).then(res=>{
            setProgram(res.data.data.programs)
            setStage(res.data.data.stages)
            setMaterial(res.data.data.materials)
            setArea(res.data.data.areas)
        })
          setName(localStorage.getItem('name'));
          setLastName(localStorage.getItem('last name'));
          setPhone(localStorage.getItem('phone'));
          setBirthday(localStorage.getItem('birthday'));
          setEmail(localStorage.getItem('email'));
          setselectedGender(localStorage.getItem('gender'));
      }, []);  

    const StyledStepIcon = styled.div`
      width: 30px ;
      height: 30px;
      border-radius: 50%;
      color: white;
      background-color: ${props => props.active ? '#7D4896' : '#ccc'};
      display: flex;
      flex-wrap:wrap;
      align-items: center;
      justify-content: center;
    `;
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };

    const handleNext = () => {
      if(activeStep === 0 ){
        if(name && lastName && selectedGender && phone && birthday && email && checked){
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
       }     
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        setAlerting(false)
        localStorage.removeItem('name')
        localStorage.removeItem('last name')
        localStorage.removeItem('phone')
        localStorage.removeItem('birthday')
        localStorage.removeItem('email')
        localStorage.removeItem('gender')
      }
    }
      if(!name || !lastName || !selectedGender || !phone || !birthday || !email || !checked){
        setAlerting(true)
      }


    if(activeStep === 1 ){
        if(experiance && position && school && selectedprogram && selectedmaterial && selectedstage && cv ){
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
       }     
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
        setAlerting(false)
      }
    }
      if(!experiance || !position || !school || !selectedprogram || !selectedmaterial || !selectedstage || !cv){
        setAlerting(true)
      }
    };
    
    const handleFinish =() =>{
      const formData = new FormData();
      if(selectedarea.length === 0){
        setAlerting(true)
      }
      if(selectedarea.length > 0 ){
      setLoad(true)
      formData.append('first_name', name);
      formData.append('last_name', lastName);
      formData.append('birthday', birthday);
      if(selectedGender === 'Female'){
      formData.append('gender', 'female');}
      if(selectedGender === 'Male'){
        formData.append('gender', 'male');}
      formData.append('prefix_number', '+' + prephone);
      formData.append('phone_number', phone);
      formData.append('current_position', position);
      formData.append('total_experience_years', experiance);
      formData.append('current_school', school);
      formData.append('cv_file', cv);
      for( var i=0 ; i < selectedprogram.length ; i++){
        formData.append('program_id[]', selectedprogram[i]);
      }
      for( var i=0 ; i < selectedmaterial.length ; i++){
        formData.append('material_id[]', selectedmaterial[i]);
      }
      for( var i=0 ; i < selectedstage.length ; i++){
        formData.append('stage_id[]', selectedstage[i]);
      }
      for( var i=0 ; i < selectedarea.length ; i++){
        formData.append('area_id[]', selectedarea[i]);
      }
      for( var i=0 ; i < timeSlots.length ; i++){
        formData.append('day[]', timeSlots[i].day);
        formData.append('from_time[]', timeSlots[i].from);
        formData.append('to_time[]', timeSlots[i].to);
      }
    axios.post(`${process.env.REACT_APP_API_URL}teacher-form`,formData, {
      headers: {
        Accept: 'application/json',
      },
    }).then(res=>{
      if(res.data.status === true){
        setLoad(false)
        setOpen(true)
        console.log(res.data)
      }
    })
}
    }
  return (
    <div style={{marginTop:'90px'}}>
       {load && <LoadingPage open={load} />}
      {!load && <>
      <img src={pic} style={{width:'100%',height:'500px',objectFit:'cover'}}/>
      <div>
        <Container maxWidth='md' >
            <Stack sx={{ alignItems: 'center', justifyContent: 'center',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{fontSize:'30px',color:'black',marginTop:'50px'}}>
        {t('Become a Tutor')}
        </Typography>
        <Typography sx={{fontSize:'16px',color:'black',marginTop:'15px'}}>
        {t('Kindly fill the following form so we can get an idea of your experience, qualifications,')} 
        </Typography>

        <Typography sx={{fontSize:'16px',color:'black',marginTop:'5px'}}>
        {t('and better sort you into the best fit for a greater teaching experience!')}
        </Typography>
        </Stack>
        </Container>
      </div>
      <div style={{ width: matches?'100%':'',
     alignItems: matches?'start':'', justifyContent: matches?'center':'', 
     display: matches?'flex':'',flexWrap:matches?'wrap':'',marginTop:'30px'}}>
      <Box sx={{ width: matches?'70%':'90%' ,padding:matches?"40px":'10px'}}>
      <Stepper nonLinear activeStep={activeStep}>
      {steps.map((label, index) => {
        const labelProps = {};
        return (
          <Step key={label} completed={completed[index]}>
            <StepLabel
              {...labelProps}
              StepIconComponent={(stepIconProps) => (
                <StyledStepIcon active={stepIconProps.active}>
                  {activeStep - 1 === index ? <DoneIcon /> : stepIconProps.icon}
                </StyledStepIcon>
              )}
            >
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
        {activeStep === steps.length ? (
          <div>hello</div>
        ) : (
          <React.Fragment>
              {activeStep === 0 && (
                <div style={{ padding:'20px' }}>
               <PersonalInfo name={name} setName={setName} gender={gender} selectedGender={selectedGender} setselectedGender={setselectedGender}
               phone={phone} setPhone={setPhone} birthday={birthday} setBirthday={setBirthday} email={email}
               setEmail={setEmail} lastName={lastName} setLastName={setLastName}
               checked={checked} setChecked={setChecked} setAlerting={setAlerting} prephone={prephone}
               setPrePhone={setPrePhone}/>
                </div>
            )}
              {activeStep === 1 && (
                <div>
                <Carrer experiance={experiance} setExperiance={setExperiance} position={position} setPosition={setPosition}
                school={school} setSchool={setSchool} program={program} selectedprogram={selectedprogram} setSelectedProgram={setSelectedProgram}
                material={material} selectedmaterial={selectedmaterial} setSelectedMaterial={setSelectedMaterial}
                stage={stage} selectedstage={selectedstage} setSelectedStage={setSelectedStage} 
                setAlerting={setAlerting} setCv={setCv} />
                </div>
            )}
               {activeStep === 2 && (
                <Preferences area={area} setSelectedArea={setSelectedArea} selectedarea={selectedarea} 
                selectedDays={selectedDays} setSelectedDays={setSelectedDays} timeSlots={timeSlots} 
                setTimeSlots={setTimeSlots} />
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {alerting && <Alert severity="error" sx={{width:'96%',marginTop:'20px'}}>All feilds must be fiiled</Alert>}
             {activeStep !== steps.length - 1 ? 
             <Button onClick={handleNext} sx={{ color:'white',bgcolor:'#7D4896',width:'100%',
             fontSize:'16px',fontWeight:'bold',marginBottom:matches?'':'30px',
             '&:hover':{color:'white',bgcolor:'#7D4896'},marginTop:'20px' }}>
                {t('Next')}
              </Button> 
             : 

              <Button onClick={handleFinish} sx={{ color:'white',bgcolor:'#7D4896'
              ,width:'100%',fontSize:'16px',fontWeight:'bold',marginBottom:matches?'':'30px',
              '&:hover':{color:'white',bgcolor:'#7D4896'},marginTop:'20px' }}>
                {t('Submit')}
              </Button>}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div></>}
    <Success open={open} setOpen={setOpen} t={t}/>
    </div>
  )
}


