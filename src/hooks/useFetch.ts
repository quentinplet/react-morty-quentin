import { useQuery } from "react-query";
import ApiService from "../service/api.service";

function useFetchOne(info: string, url: string) {
  return useQuery([info], () => ApiService.GETONE(url), {
    enabled: !!url,
  });
}

function useFetchAll(page: number) {
  return useQuery(["episodes"], () => ApiService.GET(page), {
    keepPreviousData: true,
  });
}

export { useFetchOne, useFetchAll };
