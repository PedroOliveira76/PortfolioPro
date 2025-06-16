import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contato } from "./Contato"; 

export function MainContent() {
  return (
    <main
      className="
        flex-1 w-full h-svh p-6 space-y-8 box-border 
        overflow-y-auto md:max-h-[100svh] md:pr-2 
        scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent
      "
    >
      <About />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Projects />
            </>
          }
        />
        <Route path="/emailFormulary" element={<Contato />} />
      </Routes>
    </main>
  );
}
