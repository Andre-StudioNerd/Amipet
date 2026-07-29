import { useState } from "react";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router";
import Input from "../../components/Input/Input";
import { useUsers } from "../../contexts/users/users";
import { type UserRegister, type UserLogin } from "../../types";

const SignInUp = () => {
  const { login, createUser } = useUsers();
  const [accessMode, setAccessMode] = useState("");
  const [loginData, setLoginData] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState<UserRegister>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await login(loginData);
    if (user) {
      return navigate("/");
    }
    return alert("Email ou senha inválidos");
  };

  const handleRegister = async () => {
    const user = await createUser(registerData);
    if (user) {
      return navigate("/");
    }
    return alert("Erro ao cadastrar usuário");
  };

  return (
    /* Card Container Principal */
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto my-8 px-6 pt-6 pb-8 bg-gray-400 rounded-xl shadow-md">
      {/* 1. TELA INICIAL (BOAS-VINDAS) */}
      {accessMode === "" && (
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="w-full text-2xl font-bold text-[#3772FF] bg-black py-4 px-6 rounded-xl shadow">
            Boas-vindas
          </h1>

          <p className="text-black text-lg my-6 text-center max-w-lg">
            Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo
            hoje? Vem com a gente!
          </p>

          <div className="w-full bg-gray-300/60 p-4 rounded-lg text-black text-left mb-6 border-l-4 border-[#3772FF]">
            <h2 className="font-bold text-base">Usuário Teste:</h2>
            <p className="text-sm">Email: email.com</p>
            <p className="text-sm">password: "123123"</p>
          </div>

          <div className="w-full max-w-md flex flex-col items-center gap-3 mx-auto">
            <Button onClick={() => setAccessMode("login")}>
              Já tenho conta
            </Button>

            <div className="w-full border-t border-gray-500/40 my-2" />

            <Button onClick={() => setAccessMode("register")}>
              Quero me cadastrar
            </Button>
          </div>
        </div>
      )}

      {/* 2. TELA DE LOGIN */}
      {accessMode === "login" && (
        <div className="w-full max-w-md flex flex-col items-center mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-black text-center">
            Já tem conta? Faça seu login:
          </h1>

          <div className="w-full bg-gray-300/60 p-3 rounded-lg text-black text-center mb-6 border-l-4 border-[#3772FF]">
            <h2 className="font-bold text-sm">Usuário Teste:</h2>
            <p className="text-xs">Email: email.com | Senha: "123123"</p>
          </div>

          <div className="w-full flex flex-col items-center gap-4">
            <Input
              type="email"
              placeholder="Email"
              label="Email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Senha"
              label="Senha"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />

            <div className="w-full flex justify-center mt-2">
              <Button onClick={handleLogin}>Entrar</Button>
            </div>
          </div>

          <div className="w-full border-t border-gray-500/40 my-6" />

          <div className="w-full flex justify-center">
            <Button onClick={() => setAccessMode("register")}>
              Quero me cadastrar
            </Button>
          </div>
        </div>
      )}

      {/* 3. TELA DE CADASTRO */}
      {accessMode === "register" && (
        <div className="w-full max-w-md flex flex-col items-center mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-black text-center">
            Quero me cadastrar:
          </h1>

          <div className="w-full flex flex-col items-center gap-4">
            <Input
              type="text"
              placeholder="Nome"
              label="Nome"
              value={registerData.name}
              onChange={(e) =>
                setRegisterData({ ...registerData, name: e.target.value })
              }
            />
            <Input
              type="email"
              placeholder="Email"
              label="Email"
              value={registerData.email}
              onChange={(e) =>
                setRegisterData({ ...registerData, email: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Senha"
              label="Senha"
              value={registerData.password}
              onChange={(e) =>
                setRegisterData({ ...registerData, password: e.target.value })
              }
            />
            <Input
              type="password"
              placeholder="Confirmar senha"
              label="Confirmar senha"
              value={registerData.confirmPassword}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  confirmPassword: e.target.value,
                })
              }
            />

            <div className="w-full flex justify-center mt-2">
              <Button onClick={handleRegister}>Cadastrar</Button>
            </div>
          </div>

          <div className="w-full border-t border-gray-500/40 my-6" />

          <div className="w-full flex justify-center">
            <Button onClick={() => setAccessMode("login")}>
              Já tenho conta
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInUp;
