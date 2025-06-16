import { NavLink } from 'react-router-dom'
export function Aside() {
  return (
    <aside className=" w-72 bg-[#0F3460] text-white border-r h-full p-4 flex flex-col items-center gap-4">

      {/* Perfil  */}
      <div className=" w-full mt-16 flex flex-col justify-center items-center pointer-events-none">
        <img src="/foto.png" alt="Minha Foto" className="perfilImg rounded-full w-[200px] object-contain " />
        <h2 className="font-bold text-2xl mt-5">Pedro Henrique</h2>
        <p className="text-lg">Desenvolvedor Fullstack</p>
      </div>

      <div className="text-sm mt-16 space-y-2 flex flex-col items-start justify-center  w-full ">

        <h1 className="w-full text-center text-2xl ">Contatos</h1>
        <ul className="w-full h-52 flex flex-col justify-evenly">

          {/* Links Redes */}
          <li title="Me envie um e-mail!">
            <strong>Email: </strong>
            <NavLink
            to={"/emailFormulary"}
            rel='noopener noreferrer'
            className=" hover:text-blue-300"
            >
              pedro.desenvolvedorfs@zohomail.com
            </NavLink>
            
          </li>

          <li title="Envie uma mensagem no WhatsApp!">
            <strong>Tel: </strong> <a href="https://wa.me/5575991625295" className="hover:underline" target="_blank" rel="noopener noreferrer" >75 99162-5295</a>
          </li>

          <li title="Meus Projetos!">
            <strong>Github: </strong> <a href="https://github.com/PedroOliveira76" className="hover:underline" target="_blank" rel="noopener noreferrer">PedroOliveira76</a>
          </li>

          <li title="Rede Profissional!">
            <strong>Linkedin: </strong><a href="https://linkedin.com/in/pholiveira-dev" className="hover:underline" target="_blank" rel="noopener noreferrer">PHOliveira-dev</a>
          </li>

          {/* <li title="Post de conteúdo!">
            <strong>Instagram: </strong><a href="" className="hover:underline" target="_blank" rel="noopener noreferrer">ph_programdor</a>
          </li> */}

        </ul>

      </div>


    </aside>
  );
}
