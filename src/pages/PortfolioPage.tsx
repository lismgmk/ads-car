import React, { useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { portfolioItems } from '../data/mockData';
import { PortfolioItem } from '../types';
import Grid from '@mui/material/Grid';

const PortfolioPage: React.FC = () => {
  const [portfolioFilter, setPortfolioFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );

  const filteredItems =
    portfolioFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === portfolioFilter);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 4 }}>
        Портфолио
      </Typography>

      <Box textAlign="center" sx={{ mb: 4 }}>
        <Tabs
          value={portfolioFilter}
          onChange={(_, value) => setPortfolioFilter(value)}
          centered
        >
          <Tab label="Все работы" value="all" />
          <Tab label="Маршрутные такси" value="public" />
          <Tab label="Корпоративный транспорт" value="corporate" />
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredItems.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
            <Card
              sx={{ cursor: 'pointer' }}
              onClick={() => setSelectedImage(item)}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="md"
        fullWidth
      >
        {selectedImage && (
          <>
            <DialogTitle>
              {selectedImage.title}
              <IconButton
                onClick={() => setSelectedImage(null)}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{ width: '100%', borderRadius: 8 }}
              />
              <Typography variant="body1" sx={{ mt: 2 }}>
                {selectedImage.description}
              </Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Container>
  );
};

export default PortfolioPage;
