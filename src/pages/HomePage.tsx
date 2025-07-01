import { CheckCircle } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography
} from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import { advantages, services } from '../data/mockData';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  setContactDialogOpen: (open: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  setCurrentPage,
  setContactDialogOpen,
}) => {
  return (
    <Box>
      {/* Hero Slider */}
      <HeroSlider onContactClick={() => setContactDialogOpen(true)} />

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Почему выбирают нас?
        </Typography>
        <Grid container spacing={4}>
          {advantages.map((advantage, index) => (
            <Grid size={{ xs: 12, md: 6, lg: 3 }} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <Box sx={{ mb: 2 }}>{advantage.icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {advantage.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {advantage.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Preview */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Наши услуги
          </Typography>
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid size={{ xs: 12, md: 4 }} key={service.id}>
                <Card
                  sx={{ height: '100%', cursor: 'pointer' }}
                  onClick={() => setCurrentPage('services')}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box sx={{ mb: 2, color: '#1976d2' }}>{service.icon}</Box>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      {service.description}
                    </Typography>
                    <Box sx={{ textAlign: 'left' }}>
                      {service.features.map((feature, index) => (
                        <Box
                          key={index}
                          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                        >
                          <CheckCircle
                            sx={{ color: '#4caf50', mr: 1, fontSize: 16 }}
                          />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Company Info */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" gutterBottom>
              О компании M-TRANS.by
            </Typography>
            <Typography variant="body1" paragraph>
              Представленная на рынке маркетинговых услуг с 2012 года, наша
              компания является одним из безусловных лидеров по созданию рекламы
              на бортах общественного и корпоративного транспорта.
            </Typography>
            <Typography variant="body1" paragraph>
              Собственное производство позволяет нам оказывать полный спектр
              услуг: от разработки дизайна наклеек до их производства и
              непосредственного оклеивания бортов.
            </Typography>
            <Typography variant="body1" paragraph>
              Более 10 лет продуктивной работы, огромный накопленный опыт в
              сфере транспортной рекламы, профессионализм сотрудников – все это
              сформировало безукоризненную репутацию на рынке.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Наша команда"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
