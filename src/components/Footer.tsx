import { NavLink } from 'react-router-dom'
import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
export function Footer() {
    return (
        <footer className="footer w-full  bg-[#0F3460] text-white border-r h-36 p-4 flex flex-row items-center">

            {/* Perfil  */}
            <div className=" w-full flex flex-row justify-center items-center  pointer-events-none ">
                <img src="/foto.png" alt="Minha Foto" className=" rounded-2xl w-[50px] object-contain mr-2" />
                <div className=''>
                    <h2 className="font-bold text-2xl mt-5">Pedro H.</h2>
                    <p className="text-lg">Dev Fullstack</p>
                </div>
            </div>

            <div className="space-y-2 flex items-start justify-center  w-full ">
                <ul className="w-full h-52 flex flex-row justify-around items-center">

                    {/* Links Redes */}
                    <li title="Me envie um e-mail!">
                        <NavLink
                            to={"/emailFormulary"}
                            rel='noopener noreferrer'
                            className=" hover:text-blue-300 "
                        >
                            <MdAttachEmail className='text-4xl ' />
                        </NavLink>

                    </li>

                    <li title="Envie uma mensagem no WhatsApp!">
                        <a href="https://wa.me/5575991625295" target="_blank" rel="noopener noreferrer" >
                            <IoLogoWhatsapp
                                className='text-4xl' />
                        </a>
                    </li>

                    <li title="Meus Projetos!">
                        <a href="https://github.com/PedroOliveira76" className="hover:underline" target="_blank" rel="noopener noreferrer">
                            <FaGithub
                                className='text-4xl' />
                        </a>
                    </li>

                    <li title="Rede Profissional!">
                        <a href="https://linkedin.com/in/pholiveira-dev" className="hover:underline" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin
                                className='text-4xl' />
                        </a>
                    </li>

                    {/* <li title="Post de conteúdo!">
            <strong>Instagram: </strong><a href="" className="hover:underline" target="_blank" rel="noopener noreferrer">ph_programdor</a>
          </li> */}

                </ul>

            </div>


        </footer>
    );
}
