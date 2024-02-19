import { useQuery } from "react-query";
import ApiService from "../service/api.service";

function useFetchOne(id?: string) {
  return useQuery(["episode", 1], () => ApiService.GETONE(id), {
    keepPreviousData: true,
  });
}

function useFetchAll(page: number) {
  return useQuery(["episodes"], () => ApiService.GET(page), {
    keepPreviousData: true,
  });
}

export { useFetchOne, useFetchAll };
