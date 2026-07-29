import logo from "../../assets/amipet.png";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const isSignInUp = useLocation().pathname === "/signinup";

  return (
    <div className="flex justify-between items-center p-4 border-b-2 border-black shadow-md bg-write">
      {/* Lado Esquerdo - Espaço reservado/Menu */}
      <div className="w-1/3 flex justify-start">
        {/* Se tiver ícones/menu no futuro, coloque aqui */}
      </div>

      {/* Centro - Imagem */}
      <div className="w-1/3 flex justify-center">
        <img
          className="w-[200px] cursor-pointer"
          src={logo}
          alt="logo"
          title="Home"
          onClick={() => !isSignInUp && navigate("/")}
        />
      </div>

      {/* Lado Direito - Espaço reservado/Botões */}
      <div className="w-1/3 flex justify-end">
        {/* Se tiver botões de login/perfil, coloque aqui */}
      </div>
    </div>
  );
};

export default Header;
