import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Evenement from './pages/Evenement';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
// import Vocal from './pages/Vocal/Vocal';
// import Apropos from './pages/Apropos/Apropos';
// import Support from './pages/Support/Support';
// import Patenaires from './pages/Patenaire/Patenaires';
// import Carrier from './pages/Carrier/Carrier';
// import Service from './pages/Service/Service';
// import Produits from './pages/Produit/Produits';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      { /*
        loading ? (
          <Loader />
        ) : (
          <Router> 
            <Navbar />
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/Accueil" element={<Home />} />
            </Routes>
              <Footer />
          </Router>
        ) */
      }
        <Router> 
           {/* Conteneur flex colonne pour page complète */}
          <div className="page-container d-flex flex-column min-vh-100">
            <Navbar />

            
             {/* Contenu principal prend tout l’espace restant */}
            <main className="flex-grow-1">
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/Accueil" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Evenement" element={<Evenement />} />
              </Routes>

            </main>

            {/* Footer reste en bas automatiquement */}
            <Footer />
          </div>
        </Router>
    </>
  );
}

export default App;
