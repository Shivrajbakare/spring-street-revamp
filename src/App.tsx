import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { PrismaDetails } from './pages/PrismaDetails';
import { Contact } from './pages/Contact';
import { Faq } from './pages/Faq';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/prisma/:id" element={<PrismaDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
