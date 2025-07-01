import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { articles } from '../data/mockData';
import Grid from '@mui/material/Grid';

const ArticlesPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center" sx={{ mb: 6 }}>
        Статьи
      </Typography>

      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://images.unsplash.com/photo-${
                  1560472354 + index
                }-b33ff0c44a43?w=400&h=200&fit=crop`}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {article.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {article.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticlesPage;
