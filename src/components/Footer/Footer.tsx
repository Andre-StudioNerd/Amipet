import logo from "../../assets/logo_pata.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-bold text-lg p-3 w-full text-center flex flex-col items-center justify-center gap-2">
      <img className="w-14 cursor-pointer" src={logo} alt="logo Amipet" />
      <p>
        Copyright © {new Date().getFullYear()} Amipet | Projeto fictício sem
        fins lucrativos.
      </p>
    </footer>
  );
};

export default Footer;
