import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { MainContent } from "../components/MainContent";
import { Obrigado } from "./Obrigado";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    window.addEventListener("resize", handleResize);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <div className={`flex ${isMobile ? "flex-col-reverse" : "flex-row"} w-full h-screen overflow-hidden`}>
        <Routes>
          <Route
            path="*"
            element={
              <>
                {isMobile ? <Footer /> : <Aside />}
                <MainContent />
              </>
            }
          />
          <Route path="/obrigado" element={<Obrigado />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
