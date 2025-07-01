import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { ContactForm } from '../types';

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
  contactForm: ContactForm;
  setContactForm: (form: ContactForm) => void;
}

const ContactDialog: React.FC<ContactDialogProps> = ({
  open,
  onClose,
  contactForm,
  setContactForm,
}) => {
  const handleSubmit = () => {
    if (contactForm.phone) {
      alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
      setContactForm({ name: '', phone: '', message: '' });
      onClose();
    } else {
      alert('Пожалуйста, укажите номер телефона');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Оставьте заявку
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Оставьте заявку и мы свяжемся с Вами в ближайшее время
        </Typography>
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
          label="Телефон *"
          value={contactForm.phone}
          onChange={(e) =>
            setContactForm({ ...contactForm, phone: e.target.value })
          }
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Сообщение"
          value={contactForm.message}
          onChange={(e) =>
            setContactForm({ ...contactForm, message: e.target.value })
          }
        />
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
