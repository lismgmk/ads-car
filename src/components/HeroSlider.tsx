import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=600&fit=crop',
    title: 'Реклама на транспорте',
    subtitle: 'Эффективное продвижение вашего бизнеса',
    description:
      'Достигайте максимального охвата аудитории с помощью рекламы на транспорте',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=600&fit=crop',
    title: 'Корпоративный транспорт',
    subtitle: 'Брендирование автопарка',
    description:
      'Сделайте ваш корпоративный транспорт работающим рекламным носителем',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&h=600&fit=crop',
    title: 'Маршрутные такси',
    subtitle: 'Массовый охват аудитории',
    description: 'Реклама на общественном транспорте - доступно и эффективно',
  },
];

interface HeroSliderProps {
  onContactClick: () => void;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ onContactClick }) => {
  return (
    <Box sx={{ position: 'relative', height: { xs: '60vh', md: '80vh' } }}>
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
            background: rgba(0, 0, 0, 0.3);
            width: 50px !important;
            height: 50px !important;
            border-radius: 50%;
            backdrop-filter: blur(10px);
          }
          
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(0, 0, 0, 0.5);
          }
          
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.7;
          }
          
          .swiper-pagination-bullet-active {
            opacity: 1;
            background: #1976d2 !important;
          }
          
          .swiper-pagination {
            bottom: 30px !important;
          }
        `}
      </style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{
          height: '100%',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="lg">
                <Box
                  sx={{
                    textAlign: 'center',
                    color: 'white',
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '2rem', md: '3.5rem' },
                      mb: 2,
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontSize: { xs: '1.2rem', md: '1.8rem' },
                      mb: 2,
                      opacity: 0.9,
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      opacity: 0.8,
                      fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                  >
                    {slide.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={onContactClick}
                    sx={{
                      bgcolor: 'white',
                      color: '#1976d2',
                      px: 4,
                      py: 1.5,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      '&:hover': {
                        bgcolor: '#f5f5f5',
                      },
                    }}
                  >
                    Получить консультацию
                  </Button>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
