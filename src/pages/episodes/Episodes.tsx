import CardEpisode from "../../components/CardEpisode";
import { useFetchAll } from "../../hooks/useFetch";
import { EpisodeType } from "../../types";

export default function Episodes() {
  const { data, isLoading, isError, error } = useFetchAll(1);
  isError && console.log(error);
  const listOfEpisodes = data?.results;

  return (
    <div className="h-full bg-zinc-600">
      <div className="w-full h-72">
        {/* <img
          className="h-full w-full object-cover bg-cyanLight opacity-50"
          src="../../../public/images/rick_morty_img_all_episodes.png"
          alt=""
        /> */}
        <div className="bg-cover bg-center h-full bg-[url('../../public/images/rick_morty_img_all_episodes.png')]">
          <div className="bg-black bg-opacity-40 w-full h-full flex justify-start items-end p-14">
            <h1 className="font-primary uppercase text-2xl font-bold opacity-100 border-b-2  border-cyanLight">
              All Episodes
            </h1>
          </div>
        </div>
        {/* <div className="absolute bottom-0 px-12 py-8">
          <h1 className="font-primary uppercase text-2xl font-bold opacity-100 border-b-2  border-cyanLight">
            All Episodes
          </h1>
        </div> */}
      </div>
      <div className="mt-10 px-12 py-5">
        <div className="grid grid-cols-1 gap-y-8 justify-items-center md:grid-cols-3 md:grid-rows-2 md:justify-items-center">
          {isLoading && <p>Loading...</p>}
          {/* {isError && <p>{error}</p>} */}
          {listOfEpisodes?.map((episode: EpisodeType) => (
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
  );
}
