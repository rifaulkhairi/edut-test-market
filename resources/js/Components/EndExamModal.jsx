// EndExamModal.js
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const EndExamModal = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" component="h2">
          Anda yakin ingin mengakhiri ujian?
        </Typography>
        <Box mt={4} display="flex" justifyContent="space-between" width="100%">
          <Button variant="contained" color="error" onClick={onConfirm}>
            Akhiri
          </Button>
          <Button variant="contained" color="success" onClick={onClose}>
            Batal
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EndExamModal;
