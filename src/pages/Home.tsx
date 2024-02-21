import { useEffect, useState } from "react";
import { useFetchAll, useFetchSome } from "../hooks/useFetch";
import { EpisodeType } from "../types";
import Loading from "../components/common/LoadingMessage";
import CardEpisode from "../components/CardEpisode";
import DisplayError from "./error/DisplayError";

export default function Home() {
  const [countEpisodes, setCountEpisodes] = useState<number>(51);

  const AllEpisodesQuery = useFetchAll(1);

  useEffect(() => {
    if (AllEpisodesQuery.isSuccess) {
      const infoAllEpisodes = AllEpisodesQuery.data?.info;
      setCountEpisodes(infoAllEpisodes?.count);
    }
  }, [AllEpisodesQuery.isSuccess]);

  const { data, isLoading, isSuccess, isError, error } = useFetchSome(
    "listOfLatestEpisodes",
    [countEpisodes, countEpisodes - 1, countEpisodes - 2]
  );

  const displayEpisodes = () => {
    if (isSuccess && data) {
      const listEpisodes = [...data];
      const listEpisodesReversed = listEpisodes.reverse();
      return listEpisodesReversed.map((episode: EpisodeType) => (
        <CardEpisode
          key={episode.id}
          name={episode.name}
          episode={episode.episode}
          air_date={episode.air_date}
          id={episode.id}
        />
      ));
    }
  };

  return (
    <div className="h-full xl:h-[720px]">
      <div className="h-full bg-cover bg-[url('/images/rick_morty_bg_img.png')]">
        <div className="bg-black bg-opacity-75 w-full h-full px-12 py-12 flex justify-center">
          <div className="p-16 flex flex-col items-center justify-center space-y-8 lg:items-start  animate-slideUp">
            <img
              src="/images/logo.png"
              alt="background-rick-morty-image"
              className="max-w-72 animate-fadeIn"
            />
            <h1 className="font-primary uppercase text-2xl font-bold border-b-2 border-cyanLight">
              Lasts Episodes
            </h1>
            <div className="grid grid-cols-1 gap-10 justify-items-center lg:grid-cols-2 lg:items-center xl:flex xl:gap-x-5">
              {isLoading && <Loading />}
              {(isError || data?.error || !data) && (
                <DisplayError error={error} data={data} />
              )}
              {isSuccess && displayEpisodes()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
