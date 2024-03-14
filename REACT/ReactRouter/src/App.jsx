
import "./App.css"
import Header from "./components/Header/Header";
import Speisekarte from "./pages/Speisekarte/Speisekarte";
import Kontakt from "./pages/Kontakt/Kontakt";
import Öffnungszeiten from "./pages/Öffnungszeiten/Öffnungszeiten";
import Galerie from "./pages/Galerie/Galerie";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
      <Route path="/Speisekarte" element={<Speisekarte />} />
      <Route path="/Kontakt" element={<Kontakt />} />
      <Route path="/Öffnungszeiten" element={<Öffnungszeiten />} />
      <Route path="/Galerie" element={<Galerie />} />
        </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
