
import Inicio from './paginas/Inicio';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Helmet } from "react-helmet"
import MarketingDigital from './paginas/MarketingDigital';
import PaidMedia from './paginas/PaidMedia';
import Contacto from './paginas/Contacto';

function App() {
  return (
    <BrowserRouter basename='/prez'>
      <Helmet>
        <title>Prez</title>
        <meta name="description" content="Prez" />
      </Helmet>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/marketing-digital" element={<MarketingDigital />} />
          <Route path="/paid-media" element={<PaidMedia />} />
          <Route path="/lets-talk" element={<Contacto />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
