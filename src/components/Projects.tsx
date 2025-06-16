import { useState } from 'react';
import projetos from '../data/data.json';

export function Projects() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<number | null>(null);
  const [imagemModal, setImagemModal] = useState<string | null>(null);

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Projetos</h2>
      {/* Modal */}
      {imagemModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          {/* Botão "X" */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500 transition cursor-pointer"
            onClick={() => setImagemModal(null)}
          >
            &times;
          </button>

          {/* Imagem ampliada */}
          <img
            src={imagemModal}
            alt="Visualização ampliada"
            className="max-w-full max-h-full rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}


      {/* Estrutura do Card */}
      <div className=" grid grid-cols-1 md:grid-cols-1 min-lg:grid-cols-2  gap-4">
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            className="relative h-fit"
            onMouseDown={() => {
              setProjetoSelecionado(projetoSelecionado === projeto.id ? null : projeto.id);
            }}
          >
            {/* Card do projeto */}
            <div
              className="bg-white border rounded-lg shadow p-4 cursor-pointer transition-all hover:shadow-xl hover:scale-95  lg:h-24 "

            >
              <h3 className="font-semibold text-lg">{projeto.nome}</h3>
              <p className="text-sm text-gray-600">{projeto.tecnologias.join(', ')}</p>
            </div>

            {/* Conteúdo expandido  */}
            {projetoSelecionado === projeto.id && (
              <div
                className="cardAnimated mt-4 p-4 bg-gray-50 border rounded shadow-inner"
                onMouseDown={(e) => e.stopPropagation()} // Evita conflito com o clique do card
              >
                <img
                  src={projeto.imagem}
                  alt={projeto.nome}
                  className="w-full h-40 object-fill rounded mb-2 cursor-pointer hover:scale-95 sm:h-60 "
                  onClick={(e) => {
                    e.stopPropagation();
                    setImagemModal(projeto.imagem);
                  }}
                />
                <p className="text-sm text-gray-700 mb-2">{projeto.descricao}</p>
                <div className="flex gap-4">
                  <a
                    href={projeto.linkDemo}
                    target="_blank"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Ver Demo
                  </a>
                  <a
                    href={projeto.linkCodigo}
                    target="_blank"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Código Fonte
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}