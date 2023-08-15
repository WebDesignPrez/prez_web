
import Inicio from './paginas/Inicio';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import MarketingDigital from './paginas/MarketingDigital';
import PaidMedia from './paginas/PaidMedia';
import Contacto from './paginas/Contacto';
import BrandingE from './paginas/BrandingE';
import DesarrolloWeb from './paginas/DesarrolloWeb';
import Leads from './paginas/Leads';
import FotoVideo from './paginas/ProduccionFotoVideo';
import Blog from './paginas/Blog';
import Vehicentro from './paginas/Vehicentro';
import AboutUs from './paginas/AboutUs';
import Blog1 from './paginas/Blog1';
import Blog2 from './paginas/Blog2';
import Agradecimiento from './paginas/Agradecimiento';
import { Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/'>
      <Helmet>
        <title>Prez - Agencia de Marketing</title>
        <meta name="description" content="Prez" />
      </Helmet>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/marketing-digital" element={<MarketingDigital />} />
        <Route path="/paid-media" element={<PaidMedia />} />
        <Route path="/lets-talk" element={<Contacto />} />
        <Route path="/branding-estrategico" element={<BrandingE />} />
        <Route path="/desarrollo-web" element={<DesarrolloWeb />} /> 
          <Route path="/blog" element={<Blog />} />
        <Route path="/generacion-leads" element={<Leads />} />
        <Route path="/produccion-fotografia-video" element={<FotoVideo />} />
        <Route path="/vehicentro" element={<Vehicentro />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/agradecimiento" element={<Agradecimiento />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
