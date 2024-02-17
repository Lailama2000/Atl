// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Button, Stack, Typography, useMediaQuery } from '@mui/material';

// export default function Sliders({slider}) {
//   const matches = useMediaQuery('(min-width:375px)');
//   const lang = localStorage.getItem('lang')
//   return (
//     <div id='Home'>
//     <Carousel 
//       onClickThumb={false}
//       showStatus={false}
//       autoPlay={true}
//       renderIndicator={(onClickHandler, isSelected, index, label) => (
//         <button
//           type="button"
//           style={{
//             border: 'none',
//             width: '20px',
//             height: '3px',
//             background: isSelected ? '#018EA2' : '#018EA278',
//             margin: '0 5px',
//             cursor: 'pointer',
//             transform: lang === 'ar' ? 'scaleX(-1)':'', 
//           }}
//           onClick={onClickHandler}
//         />
//       )}
//     >
//       {slider.map((slider, index) => (
//         <div key={index}>
//           <Stack
//             direction="row"
//             gap={20}
//             sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '20px' }}
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
//               <Typography
//                 sx={{ color: '#333134', fontSize: '15px', whiteSpace: 'pre-line' }}
//               >
//                 {slider.description.split('\n').map((line, lineIndex) => (
//                   <React.Fragment key={lineIndex}>
//                     {line}
//                     <br />
//                   </React.Fragment>
//                 ))}
//               </Typography>
//               <Button
//               sx={{
//                 bgcolor: '#018EA2',
//                 color: 'white',
//                 width: '200px',
//                 marginTop: '20px',
//                 textTransform: 'none',
//                 fontSize: '15px',
//                 '&:hover': { bgcolor: '#018EA2', color: 'white' },
//               }}
//               href={slider.action}
//               target="_blank"
//             >
//               {slider.button_text}
//             </Button>
//             </Stack>
//             <img src={slider.image} style={{ objectFit: 'fill', width: matches ? '350px' : '300px', 
//             height: '350px',borderRadius:'20px' }} />
//           </Stack>
//         </div>
//       ))}
//     </Carousel>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Sliders({ slider }) {
  const matches = useMediaQuery('(min-width:700px)');
  const lang = localStorage.getItem('lang');
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const { t } = useTranslation();

  const handleSlideChange = (index) => {
    setSelectedSlideIndex(index);
  };

  const renderIndicators = () => {
    return slider.map((slide, index) => (
      <button
        key={index}
        type="button"
        style={{
          border: 'none',
          width: '20px',
          height: '3px',
          background: index === selectedSlideIndex ? '#018EA2' : '#018EA278',
          margin: '0 5px',
          cursor: 'pointer',
          transform: lang === 'ar' ? 'scaleX(-1)' : '',
          marginTop:matches?'-10vh':'0px',
          marginBottom:matches?'':'20px'
        }}
        onClick={() => handleSlideChange(index)}
      />
    ));
  };

  return (
    <div id={t('Home')}>
      <AutoPlaySwipeableViews
        interval={5000}
        enableMouseEvents
        onChangeIndex={handleSlideChange}
        index={selectedSlideIndex}
      >
        {slider.map((slide, index) => (
          <div key={index}>
            <Stack
              direction={matches?"row":'column'}
              gap="%"
              sx={{
                padding: matches?'80px':'20px',
              }}
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
                  {slide.title.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
                <Typography sx={{ color: '#333134', fontSize: '15px', whiteSpace: 'pre-line' }}>
                  {slide.description.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Typography>
                {slide.button_text && (
              <Button
                sx={{
                  bgcolor: '#018EA2',
                  color: 'white',
                  width: '240px',
                  marginTop: '20px',
                  marginBottom: matches ? '20px' : '40px',
                  '&:hover': { bgcolor: '#018EA2', color: 'white' },
                }}
                target="_blank" 
                href={slide.action}
              >
                {slide.button_text}
              </Button>
            )}
              </Stack>
              <img
                src={slide.image}
                style={{ objectFit: 'fill', width: matches ? '350px' : '250px', height: matches?'350px':'250px',
                 borderRadius: '20px' }}
              />
            </Stack>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {renderIndicators()}
      </div>
    </div>
  );
}