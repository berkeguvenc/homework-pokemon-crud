import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { Pokemon } from "../types/pokemon";

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.get<Pokemon[]>("/pokemons").then((res) => res.data),
  });
};
