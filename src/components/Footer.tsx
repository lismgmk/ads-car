import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#333', color: 'white', py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              M-TRANS.by
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Профессиональная реклама на транспорте с 2012 года. Делаем
              рекламу, которую заметят!
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Контакты
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              📞 +375 29 60 65 651
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              ✉️ info@m-trans.by
            </Typography>
            <Typography variant="body2">
              📍 г. Минск, ул. Тимирязева, 65Б
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Услуги
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Реклама на корпоративном транспорте
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              • Реклама на маршрутных такси
            </Typography>
            <Typography variant="body2">• Широкоформатная печать</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.2)' }} />

        <Typography variant="body2" textAlign="center" sx={{ opacity: 0.6 }}>
          © 2024 M-TRANS.by. Все права защищены.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
