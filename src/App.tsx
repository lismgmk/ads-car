import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import ContactDialog from './components/ContactDialog';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactsPage from './pages/ContactsPage';
import { ContactForm } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    phone: '',
    message: '',
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setContactDialogOpen={setContactDialogOpen}
          />
        );
      case 'services':
        return <ServicesPage setContactDialogOpen={setContactDialogOpen} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'articles':
        return <ArticlesPage />;
      case 'contacts':
        return (
          <ContactsPage
            contactForm={contactForm}
            setContactForm={setContactForm}
          />
        );
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setContactDialogOpen={setContactDialogOpen}
          />
        );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        setContactDialogOpen={setContactDialogOpen}
      />

      {renderPage()}

      <ContactDialog
        open={contactDialogOpen}
        onClose={() => setContactDialogOpen(false)}
        contactForm={contactForm}
        setContactForm={setContactForm}
      />

      <Footer />
    </Box>
  );
};

export default App;
