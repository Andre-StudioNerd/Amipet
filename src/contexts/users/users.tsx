
import { createContext, useContext } from "react";
import type { ReactNode } from "react";

import authStorage from "simple-auth-storage";

import type {
  User,
  UserLogin,
  UserRegister,
} from "../../types";

const BIN_ID = "6ac91f0cac6210605a2347d4";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`;

interface UsersContextType {
  createUser: (user: UserRegister) => Promise<User | null>;
  validateUser: (userLogin: UserLogin) => Promise<User | null>;
  updateUser: (user: User) => Promise<User | null>;
  getUser: () => User | null;
  isAuthenticated: () => boolean;
  login: (userLogin: UserLogin) => Promise<User | null>;
}

interface BinData {
  record: {
    pets?: unknown[];
    users?: User[];
    [key: string]: unknown;
  };
}

const UsersContext = createContext<UsersContextType>({
  createUser: async () => null,
  validateUser: async () => null,
  updateUser: async () => null,
  getUser: () => null,
  isAuthenticated: () => false,
  login: async () => null,
});

export const UsersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const fetchUsers = async (): Promise<User[]> => {
    const response = await fetch(BIN_URL);

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar usuários: ${response.status}`
      );
    }

    const data: BinData = await response.json();

    return data.record.users ?? [];
  };

  const saveUsers = async (users: User[]): Promise<void> => {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${BIN_ID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ users }),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Erro ao salvar usuários: ${response.status}. O JSONBin pode exigir uma chave de API para escrita.`
      );
    }
  };

  const createUser = async (
    user: UserRegister
  ): Promise<User | null> => {
    const users = await fetchUsers();

    const isDuplicate = users.some(
      (u) => u.email === user.email
    );

    if (isDuplicate) {
      throw new Error("User already exists");
    }

    const newUser = {
      ...user,
      id: crypto.randomUUID(),
    } as User;

    await saveUsers([...users, newUser]);

    const token = authStorage.generateToken();
    authStorage.saveUser(newUser, token);

    return newUser;
  };

  const validateUser = async (
    userLogin: UserLogin
  ): Promise<User | null> => {
    const users = await fetchUsers();

    const userFound = users.find(
      (user) => user.email === userLogin.email
    );

    if (!userFound) {
      return null;
    }

    return userFound;
  };

  const updateUser = async (
    user: User
  ): Promise<User | null> => {
    const users = await fetchUsers();

    const userIndex = users.findIndex(
      (item) => item.id === user.id
    );

    if (userIndex === -1) {
      return null;
    }

    const updatedUsers = [...users];
    updatedUsers[userIndex] = user;

    await saveUsers(updatedUsers);

    const token = authStorage.generateToken();
    authStorage.saveUser(user, token);

    return user;
  };

  const login = async (
    userLogin: UserLogin
  ): Promise<User | null> => {
    const user = await validateUser(userLogin);

    if (user) {
      const token = authStorage.generateToken();
      authStorage.saveUser(user, token);
    }

    return user;
  };

  const getUser = (): User | null => {
    return authStorage.getUser();
  };

  const isAuthenticated = (): boolean => {
    return authStorage.isLoggedIn();
  };

  return (
    <UsersContext.Provider
      value={{
        createUser,
        validateUser,
        updateUser,
        getUser,
        isAuthenticated,
        login,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  return useContext(UsersContext);
};