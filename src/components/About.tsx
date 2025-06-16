import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiNestjs, SiMysql, SiTailwindcss } from 'react-icons/si';

export function About() {
  return (
    <section>
      {/* Texto about */}
      <h1 className="text-2xl font-bold mb-2 text-[#0F3460]">Sobre Mim</h1>
      <p className="text-gray-700 max-w-2xl">
        Desenvolvedor fullstack com foco em criar aplicações modernas, escaláveis e bem estruturadas. Trabalho com React no frontend e Node/Nest no backend, integrando bancos de dados MySQL e versionando com Git.
      </p>

      {/* Ícones Tecnologia */}
      <div className="flex items-center gap-4 mt-4 text-2xl">
        <FaReact title="React" className="text-cyan-400 hover:scale-150 " />
        <SiTailwindcss title="Tailwind CSS" className="text-sky-400 hover:scale-150" />
        <FaNodeJs title="Node.js" className="text-green-600 hover:scale-150" />
        <SiNestjs title="NestJS" className="text-red-600 hover:scale-150" />
        <SiMysql title="MySQL" className="text-blue-700 text-3xl hover:scale-150" />
        <FaGitAlt title="Git" className="text-orange-600 hover:scale-150" />
      </div>
    </section>
  );
}
