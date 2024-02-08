import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image from '../Media/portrait-gorgeous-hispanic-preschool-teacher-teaching-her-students-classroom.png';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';

export default function Sliders({slider}) {
  const matches = useMediaQuery('(min-width:375px)');
  const lang = localStorage.getItem('lang')
  return (
    <Carousel
      onClickThumb={false}
      showStatus={false}
      autoPlay={true}
      renderIndicator={(onClickHandler, isSelected, index, label) => (
        <button
          type="button"
          style={{
            border: 'none',
            width: '20px',
            height: '3px',
            background: isSelected ? '#018EA2' : '#018EA278',
            margin: '0 5px',
            cursor: 'pointer',
            transform: lang === 'ar' ? 'scaleX(-1)':'', 
          }}
          onClick={onClickHandler}
        />
      )}
    >
      {slider.map((slider, index) => (
        <div key={index}>
          <Stack
            direction="row"
            gap={20}
            sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
          >
            <Stack sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start' }}>
              <Typography
                sx={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  color: '#333134',
                  whiteSpace: 'pre-line',
                }}
              >
                {slider.title.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
              <Typography
                sx={{ color: '#333134', fontSize: '15px', whiteSpace: 'pre-line' }}
              >
                {slider.description.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Typography>
              <Button
              sx={{
                bgcolor: '#018EA2',
                color: 'white',
                width: '200px',
                marginTop: '20px',
                textTransform: 'none',
                fontSize: '15px',
                '&:hover': { bgcolor: '#018EA2', color: 'white' },
              }}
              href={slider.action}
              target="_blank"
            >
              {slider.button_text}
            </Button>
            </Stack>
            <img src={slider.image} style={{ objectFit: 'fill', width: matches ? '350px' : '300px', 
            height: '350px',borderRadius:'20px' }} />
          </Stack>
        </div>
      ))}
    </Carousel>
  );
}



// import React from 'react';
// import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
// import { autoPlay } from 'react-swipeable-views-utils';
// import SwipeableViews from 'react-swipeable-views';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import image from '../Media/portrait-gorgeous-hispanic-preschool-teacher-teaching-her-students-classroom.png';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// export default function Sliders({ slider }) {
//   const matches = useMediaQuery('(min-width:375px)');
//   const lang = localStorage.getItem('lang');

//   return (
//     <AutoPlaySwipeableViews interval={5000} enableMouseEvents>
//       {slider.map((slider, index) => (
//         <div key={index}>
//           <Stack
//             direction="row"
//             gap={20}
//             sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               justifyContent: 'center',
//               alignItems: 'center',
//               padding: '20px',
//             }}
//           >
//             <Stack sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'start', alignItems: 'start' }}>
//               <Typography
//                 sx={{
//                   fontSize: '40px',
//                   fontWeight: 'bold',
//                   color: '#333134',
//                   whiteSpace: 'pre-line',
//                 }}
//               >
//                 {slider.title.split('\n').map((line, lineIndex) => (
//                   <React.Fragment key={lineIndex}>
//                     {line}
//                     <br />
//                   </React.Fragment>
//                 ))}
//               </Typography>
//               <Typography sx={{ color: '#333134', fontSize: '15px', whiteSpace: 'pre-line' }}>
//                 {slider.description.split('\n').map((line, lineIndex) => (
//                   <React.Fragment key={lineIndex}>
//                     {line}
//                     <br />
//                   </React.Fragment>
//                 ))}
//               </Typography>
//               <Button
//                 sx={{
//                   bgcolor: '#018EA2',
//                   color: 'white',
//                   width: '200px',
//                   marginTop: '20px',
//                   '&:hover': { bgcolor: '#018EA2', color: 'white' },
//                 }}
//                 href={slider.action}
//               >
//                 {slider.button_text}
//               </Button>
//             </Stack>
//             <img
//               src={slider.image}
//               style={{ objectFit: 'fill', width: matches ? '350px' : '300px', height: '350px', borderRadius: '20px' }}
//               alt="Slider Image"
//             />
//           </Stack>
//         </div>
//       ))}
//     </AutoPlaySwipeableViews>
//   );
// }