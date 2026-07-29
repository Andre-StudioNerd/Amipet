import { useEffect } from "react";
import { useUsers } from "../../contexts/users/users";
import { useNavigate } from "react-router";
import { usePets } from "../../contexts/pets/pets";
import Card from "../../components/Card/Card";
import pata from "../../assets/logo_pata_cinza.png";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUsers();
  const { pets } = usePets();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/signinup");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center mb-20 min-h-screen w-5/6 mx-auto">
      <h1
        className="
    text-3xl
    font-bold
    text-[#3772FF]
    py-4
    px-6
    mt-4
    mb-8
    text-center

  "
      >
        Quem Somos
      </h1>
      <p
        className="
    text-black
    text-justify
    py-4
    px-6
    mt-4
    mb-8
    max-w-4xl
    mx-auto
  "
      >
        O Amipet nasceu do amor incondicional que sentimos pelos animais e do
        desejo de tornar a vida dos tutores mais simples e especial. Somos uma
        plataforma dedicada a oferecer tudo o que seu companheiro de quatro
        patas precisa — desde dicas práticas de cuidados, saúde e comportamento
        até as melhores recomendações de produtos e serviços. Mais do que um
        site sobre pets, somos uma comunidade feita por apaixonados para
        apaixonados por bichinhos, movidos pelo compromisso de garantir o
        bem-estar, a alegria e uma vida longa e saudável para quem enche o nosso
        lar de carinho.
      </p>
      <img
        className="w-20 cursor-pointer mb-[30px] mt-[30px]"
        src={pata}
        alt="logo Amipet"
      />
      <h1
        className="
    text-2xl
    font-bold
    text-[#3772FF]
    bg-black
    py-4
    px-6
    mt-4
    mb-8
    text-center
    rounded-xl
  "
      >
        Olá! Veja os amigos disponíveis para adoção!
      </h1>
      {pets.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {pets.map((pet) => (
            <Card key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="text-center text-lg text-[#737380]">
          Não há pets cadastrados
        </div>
      )}
      <img
        className="w-20 cursor-pointer mb-[30px] mt-[30px]"
        src={pata}
        alt="logo Amipet"
      />
      <h1
        className="
    text-3xl
    font-bold
    text-[#3772FF]
    py-4
    px-6
    mt-4
    mb-8
    text-center

  "
      >
        Aviso legal
      </h1>
      <p
        className="
    text-black
    text-justify
    py-4
    px-6
    mt-4
    mb-8
    max-w-4xl
    mx-auto
  "
      >
        Os personagens exibidos neste site são inteiramente fictícios e criados
        exclusivamente para fins ilustrativos, demonstrativos e de
        entretenimento. Eles não possuem qualquer correspondência com a
        realidade, não representam indivíduos ou serviços reais e não são
        utilizados para fins lucrativos ou comerciais. Todos os direitos de
        criação pertencem aos seus respectivos desenvolvedores.
      </p>
    </div>
  );
};

export default Home;
