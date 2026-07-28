import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();
  const handleSendMessage = () => {
    alert("Mensagem enviada com sucesso");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return (
    <div className="flex flex-col mb-20 min-h-screen w-1/3 mx-auto">
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
        Envie uma mensagem para a pessoa ou instituição que está cuidando do
        animal:
      </h1>
      <p className="text-black mt-4 mb-4 text-justify">
        A funcionalidade de envio de mensagens (está travada) deste site possui
        apenas a interface visual (frontend) para fins de demonstração.
        Atualmente, ela não está integrada a um backend ou serviço de
        processamento de e-mails, portanto, as mensagens preenchidas e enviadas
        pelo formulário não são recebidas nem armazenadas. Essa funcionalidade
        foi implementada apenas para representar o fluxo de contato da aplicação
        e poderá ser integrada a um serviço de backend ou API em futuras versões
        do projeto.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 mt-10">
        <Input
          label="Nome"
          placeholder="Insira seu nome"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Telefone"
          placeholder="Insira seu telefone"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Nome do animal"
          placeholder="Insira o nome do animal"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Mensagem"
          placeholder="Insira uma mensagem para o responsável"
          value=""
          onChange={() => {}}
        />
        <Button onClick={handleSendMessage}>Enviar mensagem</Button>
      </div>
    </div>
  );
};

export default Contact;
