import { useQuery } from "react-query";
import ApiService from "../service/api.service";

function useFetchOne(key: "episode" | "character", id: string) {
  return useQuery({
    queryKey: [key, id],
    queryFn: () => ApiService.GETONE(key, id),
  });
}

function useFetchAll(page: number) {
  return useQuery({
    queryKey: ["episodes", page],
    queryFn: () => ApiService.GET(page),
    keepPreviousData: true,
  });
}

function useFetchSome(key: string, ids: number[]) {
  return useQuery({
    queryKey: [key, ids],
    queryFn: () => ApiService.GETSOME(key, ids),
    keepPreviousData: true,
  });
}

export { useFetchOne, useFetchAll, useFetchSome };
