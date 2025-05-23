// Updated App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Main category pages
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import FuelsPage from './pages/FuelsPage';

// Individual product pages
import SteamBoilersPage from './pages/products/SteamBoilersPage';
import HotAirGeneratorsPage from './pages/products/HotAirGeneratorsPage';
import ElectricHotWaterPage from './pages/products/ElectricHotWaterPage';
import SteamGeneratorsPage from './pages/products/SteamGeneratorsPage';
import ThermicFluidPage from './pages/products/ThermicFluidPage';
import HotWaterGeneratorsPage from './pages/products/HotWaterGeneratorsPage';

// Individual service pages
import InstallationPage from './pages/services/InstallationPage';
import MaintenancePage from './pages/services/MaintenancePage';
import ConsultingPage from './pages/services/ConsultingPage';
import CustomSolutionsPage from './pages/services/CustomSolutionsPage';

// Individual fuel pages
import BriquettesPage from './pages/fuels/BriquettesPage';
import PelletsPage from './pages/fuels/PelletsPage';
import WoodChipsPage from './pages/fuels/WoodChipsPage';
import CNSPage from './pages/fuels/CNSPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Category Pages */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fuels" element={<FuelsPage />} />

            {/* Individual Product Pages */}
            <Route path="/products/steam-boilers" element={<SteamBoilersPage />} />
            <Route path="/products/hot-air-generators" element={<HotAirGeneratorsPage />} />
            <Route path="/products/electric-hot-water" element={<ElectricHotWaterPage />} />
            <Route path="/products/steam-generators" element={<SteamGeneratorsPage />} />
            <Route path="/products/thermic-fluid" element={<ThermicFluidPage />} />
            <Route path="/products/hot-water-generators" element={<HotWaterGeneratorsPage />} />

            {/* Individual Service Pages */}
            <Route path="/services/installation" element={<InstallationPage />} />
            <Route path="/services/maintenance" element={<MaintenancePage />} />
            <Route path="/services/consulting" element={<ConsultingPage />} />
            <Route path="/services/custom-solutions" element={<CustomSolutionsPage />} />

            {/* Individual Fuel Pages */}
            <Route path="/fuels/briquettes" element={<BriquettesPage />} />
            <Route path="/fuels/pellets" element={<PelletsPage />} />
            <Route path="/fuels/wood-chips" element={<WoodChipsPage />} />
            <Route path="/fuels/cns" element={<CNSPage />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;