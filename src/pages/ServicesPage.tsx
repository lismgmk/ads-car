import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
} from '@mui/material';
import { ExpandMore, CheckCircle } from '@mui/icons-material';
import { services } from '../data/mockData';
import Grid from '@mui/material/Grid';

interface ServicesPageProps {
  setContactDialogOpen: (open: boolean) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({
  setContactDialogOpen,
}) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Наши услуги
      </Typography>

      {services.map((service) => (
        <Accordion key={service.id} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ mr: 2, color: '#1976d2' }}>{service.icon}</Box>
              <Typography variant="h6">{service.title}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              {service.description}
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Преимущества:
            </Typography>
            <Grid container spacing={2}>
              {service.features.map((feature, featureIndex) => (
                <Grid size={{ xs: 12, sm: 6 }} key={featureIndex}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircle sx={{ color: '#4caf50', mr: 1 }} />
                    <Typography variant="body2">{feature}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box textAlign="center" sx={{ mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setContactDialogOpen(true)}
          sx={{ px: 4, py: 1.5 }}
        >
          Заказать консультацию
        </Button>
      </Box>
    </Container>
  );
};

export default ServicesPage;
