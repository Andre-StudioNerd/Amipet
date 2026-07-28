import { Link } from "react-router";
import type { Pet } from "../../types";

const Card = ({ pet }: { pet: Pet }) => {
  return (
    <div className="bg-[#195b8b] rounded-lg shadow-md p-6 w-full flex flex-col items-center justify-center">
      <img
        src={pet.image}
        alt={pet.name}
        className="w-40 h-40 object-cover rounded-full"
      />
      <h2 className="text-2xl font-bold text-[#efa83e] mt-4">{pet.name}</h2>
      <p className="text-lg text-[#ffffff] mt-2 text-center">
        {pet.description}
      </p>
      <p className="text-lg text-[#ffffff] my-2 text-center">{pet.location}</p>
      <Link to="/contact">
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
  );
};

export default Card;
