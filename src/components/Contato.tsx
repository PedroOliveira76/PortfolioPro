import { useNavigate } from "react-router-dom";

export function Contato() {
    const Navigate = useNavigate();
  return (
    <section className="flex flex-col items-start gap-4 max-w-md">
      <h2 className="text-2xl font-bold text-[#0F3460]">Fale comigo por e-mail</h2>

      <form
        action="https://formsubmit.co/pedro.desenvolvedorfs@zohomail.com"
        method="POST"
        className="w-full bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200"
      >
        {/* Desativa captcha e redireciona (opcional) */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:5173/obrigado" />

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nome
          </label>
          <input
            type="text"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-[#0F3460] focus:border-[#0F3460]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:ring-[#0F3460] focus:border-[#0F3460]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Mensagem
          </label>
          <textarea
            name="message"
            rows={3}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 resize-none focus:ring-[#0F3460] focus:border-[#0F3460]"
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#0F3460] text-white px-4 py-2 rounded-md hover:bg-[#09243d] transition-all cursor-pointer w-full text-center"
        >
          Enviar
        </button>
        <div
        className="bg-[#0F3460] text-white px-4 py-2 rounded-md hover:bg-[#09243d] transition-all cursor-pointer text-center"
        onClick={()=>[
            Navigate('/')
        ]}
        >Projetos</div>
      </form>
    </section>
  );
}
