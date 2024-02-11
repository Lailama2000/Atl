import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CheckBoxesComp({ label, onChange,checked }) {
  return (
    <div>
      <FormGroup>
        <FormControlLabel 
          sx={{ color: '#707070'}}
          control={
            <Checkbox
            checked={checked}
            onChange={onChange}
            sx={{
                color: '#7D4896',
                '&.Mui-checked': {
                  color: '#7D4896',
                },
              }}
            />
          }
          label={label}
        />
      </FormGroup>
    </div>
  );
}