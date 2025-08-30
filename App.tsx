
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import DiscountsPage from './pages/DiscountsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Category } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'Clothware':
        return <CategoryPage category={Category.Clothware} onNavigate={handleNavigate} />;
      case 'Footware':
        return <CategoryPage category={Category.Footware} onNavigate={handleNavigate} />;
      case 'Discounts':
        return <DiscountsPage />;
      case 'About':
        return <AboutPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
