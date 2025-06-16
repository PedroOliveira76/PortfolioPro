import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Obrigado() {
  const navigate = useNavigate();


  useEffect(() => {
    // Redireciona para home após 5 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full   text-center p-6 bg-white">
      <h1 className="text-3xl font-bold text-[#0F3460] mb-2">Obrigado pelo contato! 😊</h1>
      <p className="text-gray-600 text-lg">
        Sua mensagem foi enviada com sucesso. Você será redirecionado em instantes...
      </p>
    </div>
  );
}
