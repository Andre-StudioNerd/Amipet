import { useState, useEffect, createContext, useContext } from "react";

import type { ReactNode } from "react";
import type { Pet } from "../../types";

interface PetsContextType {
  pets: Pet[];
}

const PetsContext = createContext<PetsContextType>({
  pets: [],
});

export const PetsProvider = ({ children }: { children: ReactNode }) => {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/6ac91f0cac6210605a2347d4/latest",
        );

        if (!response.ok) {
          throw new Error(
            `Erro ao buscar os pets: ${response.status} ${response.statusText}`,
          );
        }

        const data: { record: { pets: Pet[] } } = await response.json();

        setPets(data.record.pets);
      } catch (error) {
        console.error("Erro ao carregar os pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <PetsContext.Provider value={{ pets }}>{children}</PetsContext.Provider>
  );
};

export const usePets = () => {
  return useContext(PetsContext);
};
