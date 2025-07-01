import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  TextField,
  Button,
  Divider,
} from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { ContactForm } from '../types';
import Grid from '@mui/material/Grid';

interface ContactsPageProps {
  contactForm: ContactForm;
  setContactForm: (form: ContactForm) => void;
}

const ContactsPage: React.FC<ContactsPageProps> = ({
  contactForm,
  setContactForm,
}) => {
  const handleSubmit = () => {
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setContactForm({ name: '', phone: '', message: '' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Контакты
      </Typography>

      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Свяжитесь с нами
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ mr: 2, color: '#1976d2' }} />
                <Typography variant="body1">+375 29 60 65 651</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 2, color: '#1976d2' }} />
                <Typography variant="body1">info@m-trans.by</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ mr: 2, color: '#1976d2' }} />
                <Typography variant="body1">
                  220035 г. Минск, ул. Тимирязева, 65Б, оф. 1200
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom>
              Время работы:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              В будни с 9 до 20
              <br />В выходные — с 11 до 18
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Обратная связь
            </Typography>

            <Box component="form" sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Имя"
                value={contactForm.name}
                onChange={(e) =>
                  setContactForm({ ...contactForm, name: e.target.value })
                }
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Телефон"
                value={contactForm.phone}
                onChange={(e) =>
                  setContactForm({ ...contactForm, phone: e.target.value })
                }
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Сообщение"
                value={contactForm.message}
                onChange={(e) =>
                  setContactForm({ ...contactForm, message: e.target.value })
                }
                sx={{ mb: 3 }}
              />
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={handleSubmit}
              >
                Отправить сообщение
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactsPage;
