
import type { DialogProps } from '@mui/material';

import { m } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

import {
  Box,
  Stack,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogContent,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { varTap, varHover } from 'src/components/animate';

// ----------------------------------------------------------------------

interface Props extends DialogProps {
  targetDate: Date;
  onClose: VoidFunction;
}

export default function HomeCountdownDialog({ targetDate, open, onClose, ...other }: Props) {
  const [countdown, setCountdown] = useState({
    days: '00', hours: '00', minutes: '00', seconds: '00',
  });

  const setNewTime = useCallback(() => {
    const startTime = new Date().getTime();
    const endTime = targetDate.getTime();
    const distance = endTime - startTime;

    if (distance < 0) return;

    setCountdown({
      days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
      minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
      seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0'),
    });
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(interval);
  }, [setNewTime]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      {...other}
      PaperProps={{
        sx: {
          maxWidth: 480,
          borderRadius: 2,
          bgcolor: '#141A21',
          color: 'common.white',
          position: 'relative',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{ position: 'absolute', right: 12, top: 12, color: 'grey.500' }}
      >
        <Iconify icon="mingcute:close-line" />
      </IconButton>

      <DialogContent sx={{ py: 8, px: 3, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
          Acesso Antecipado DAO
        </Typography>

        <Typography sx={{ color: 'grey.500', mb: 5, lineHeight: 1.5 }}>
          Entre para a whitelist e participe das decisões de governança e 
          investimentos RWA antes do lançamento público. Vagas limitadas.
        </Typography>

        {/* Timer Display */}
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 6 }}>
          <TimeBlock label="DIAS" value={countdown.days} />
          <TimeBlock label="HORAS" value={countdown.hours} />
          <TimeBlock label="MIN" value={countdown.minutes} />
          <TimeBlock label="SEG" value={countdown.seconds} />
        </Stack>

        <Button
          fullWidth
          size="large"
          variant="contained"
          component={m.button}
          whileTap={varTap(0.95)}
          whileHover={varHover(1.02)}
          sx={{
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00A76F 0%, #8E33FF 100%)',
            '&:hover': { opacity: 0.9 },
          }}
        >
          GARANTIR MINHA VAGA
        </Button>
      </DialogContent>
    </Dialog>
  );
}

// ----------------------------------------------------------------------

function TimeBlock({ label, value }: { label: string; value: string }) {
  return (
    <Stack spacing={1}>
      <Box
        sx={{
          width: 72,
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1.5,
          bgcolor: 'rgba(255, 255, 255, 0.08)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Typography variant="h3">{value}</Typography>
      </Box>
      <Typography variant="caption" sx={{ color: 'grey.600', fontWeight: 'bold', letterSpacing: 1 }}>
        {label}
      </Typography>
    </Stack>
  );
}
