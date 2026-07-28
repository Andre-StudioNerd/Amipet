const Footer = () => {
  return (
    <div className="bg-black text-white font-bold text-lg p-2 w-full h-[50px] fixed bottom-0 text-center">
      Copyright © {new Date().getFullYear()} Amipet | Projeto fictício sem fins
      lucrativos.
    </div>
  );
};

export default Footer;
