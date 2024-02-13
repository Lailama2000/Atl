import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';

export default function Success({ open, setOpen, t }) {
  let timeout;
  const navigate = useNavigate();

  React.useEffect(() => {
    clearTimeout(timeout);
    if (open) {
      timeout = setTimeout(() => {
        setOpen(false);
        navigate('/');
      }, 3000);
    }
  }, [open, navigate, setOpen]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        maxWidth='sm'
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          {t('Your request has been successfully submitted.')}
          <CheckCircleOutlineIcon sx={{ color: 'lightgreen', marginLeft: '5px', height: '20px', width: '20px' }} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}