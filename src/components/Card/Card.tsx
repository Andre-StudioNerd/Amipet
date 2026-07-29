import { Link } from "react-router";
import type { Pet } from "../../types";

const Card = ({ pet }: { pet: Pet }) => {
  return (
    <div className="relative bg-[#195b8b] rounded-lg shadow-md p-6 w-full flex flex-col items-center justify-center border-[6px] border-[#efa83e] overflow-hidden">
      {/* Camada das Patinhas no Fundo (Ajuste a opacidade em opacity-* se quiser mais ou menos visível) */}
      <div
        className="absolute inset-0 z-0 opacity-10 bg-repeat pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-4 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-8 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-4 1c-2.5 0-4.5 1.8-4.5 4 0 2.8 3.2 5.5 4.5 6.5 1.3-1 4.5-3.7 4.5-6.5 0-2.2-2-4-4.5-4z'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Conteúdo do Card (Fica por cima com z-10) */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-40 h-40 object-cover rounded-full border-[6px] border-[#efa83e]"
        />

        <h2 className="text-2xl font-bold text-[#efa83e] mt-4">{pet.name}</h2>

        <p className="text-base text-[#ffffff] mt-2 text-justify">
          {pet.description}
        </p>

        <p className="text-lg text-black my-2 text-center font-bold">
          {pet.location}
        </p>

        <Link to="/contact" className="mt-2">
          <p
            className="
          inline-block
          px-6 py-3
          text-lg font-semibold
          text-[#efa83e]
          bg-black
          border-2 border-[#efa83e]
          rounded-lg
          cursor-pointer
          transition-all duration-300
          hover:bg-[#efa83e]
          hover:text-black
          hover:shadow-lg
          text-center
        "
          >
            Falar com responsável
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Card;
