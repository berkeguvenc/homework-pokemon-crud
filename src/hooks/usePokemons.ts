import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { Pokemon } from "../types/pokemon";

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.get<Pokemon[]>("/pokemons").then((res) => res.data),
    staleTime: 3 * 60 * 1000,
  });
};

export const useCreatePokemon = () => {
  const queryClient = new QueryClient();

  return useMutation({
    mutationFn: (pokemon: Omit<Pokemon, "id">) =>
      api.post<Pokemon>("/pokemons", pokemon).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
};
