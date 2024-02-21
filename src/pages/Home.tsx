import { useEffect, useState } from "react";
import { useFetchAll, useFetchOne, useFetchSome } from "../hooks/useFetch";
import { EpisodeType } from "../types";
import Loading from "../components/common/LoadingMessage";
import ErrorMessage from "../components/common/ErrorMessage";
import CardEpisode from "../components/CardEpisode";

export default function Home() {
  const [countEpisodes, setCountEpisodes] = useState<number>(51);

  const AllEpisodesQuery = useFetchAll(1);

  useEffect(() => {
    if (AllEpisodesQuery.isSuccess) {
      const infoAllEpisodes = AllEpisodesQuery.data?.info;
      setCountEpisodes(infoAllEpisodes?.count);
    }
  }, [AllEpisodesQuery.isSuccess]);

  const { data, isLoading, isSuccess, isError, error, status } = useFetchSome(
    "listOfLatestEpisodes",
    [countEpisodes, countEpisodes - 1, countEpisodes - 2]
  );

  const displayError = () => {
    if (error instanceof Error) {
      return <ErrorMessage error={error.message} />;
    } else if (data.error) {
      return <ErrorMessage error={data.error} />;
    }
  };

  return (
    <div className="h-full md:h-[720px]">
      <div className="h-full bg-cover bg-[url('../../public/images/rick_morty_bg_img.png')]">
        <div className="bg-black bg-opacity-75 w-full h-full px-12 py-12 flex justify-center">
          <div className="p-16 flex flex-col items-center justify-center space-y-8 md:items-start  animate-slideUp">
            <img
              src="../../public/images/logo.png"
              alt="background-rick-morty-image"
              className="max-w-72"
            />
            <h1 className="font-primary uppercase text-2xl font-bold border-b-2 border-cyanLight">
              Lasts Episodes
            </h1>
            <div className="flex flex-col-reverse gap-y-10 justify-items-center md:flex-row-reverse md:gap-x-10 md:justify-items-center">
              {isLoading && <Loading />}
              {(isError || data?.error) && displayError()}
              {isSuccess &&
                data?.map((episode: EpisodeType) => (
                  <CardEpisode
                    key={episode.id}
                    name={episode.name}
                    episode={episode.episode}
                    air_date={episode.air_date}
                    id={episode.id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
