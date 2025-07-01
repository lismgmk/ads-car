import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Box,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  setContactDialogOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  mobileOpen,
  setMobileOpen,
  setContactDialogOpen,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navigationItems = [
    { id: 'home', label: 'Главная' },
    { id: 'services', label: 'Услуги' },
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'articles', label: 'Статьи' },
    { id: 'contacts', label: 'Контакты' },
  ];

  const Navigation = () => (
    <List>
      {navigationItems.map((item) => (
        <ListItem
          component="button"
          key={item.id}
          onClick={() => {
            setCurrentPage(item.id);
            setMobileOpen(false);
          }}
          sx={{
            width: '100%',
            textAlign: 'left',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: '#1976d2' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => setCurrentPage('home')}
          >
            M-TRANS.by
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  color="inherit"
                  onClick={() => setCurrentPage(item.id)}
                  sx={{
                    textDecoration:
                      currentPage === item.id ? 'underline' : 'none',
                    fontWeight: currentPage === item.id ? 'bold' : 'normal',
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                }}
                onClick={() => setContactDialogOpen(true)}
              >
                Заказать звонок
              </Button>
            </Box>
          ) : (
            <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <Navigation />
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                setContactDialogOpen(true);
                setMobileOpen(false);
              }}
            >
              Заказать звонок
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
