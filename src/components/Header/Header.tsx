import logo from "../../assets/amipet.png";
import user from "../../assets/user.svg";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const isSignInUp = useLocation().pathname === "/signinup";
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4">
        <img
          className="w-[200px] cursor-pointer"
          src={logo}
          alt="logo"
          title="Home"
          onClick={() => !isSignInUp && navigate("/")}
        />
      </div>
    </div>
  );
};

export default Header;
