import { useState } from "react";
import CardEpisode from "../../components/CardEpisode";
import Pagination from "../../components/pagination/Pagination";
import { useFetchAll } from "../../hooks/useFetch";
import { EpisodeType } from "../../types";
import LoadingMessage from "../../components/common/LoadingMessage";
import DisplayError from "../../error/DisplayError";

export default function Episodes() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, isError, error, isSuccess } =
    useFetchAll(currentPage);

  const listOfEpisodes: EpisodeType[] = data?.results;
  const numberOfPages: number = data?.info.pages;

  const handlePageChange = (buttonClicked: number | string) => {
    if (buttonClicked === "&lsaquo;") {
      setCurrentPage((old) => Math.max(old - 1));
    } else if (buttonClicked === "&rsaquo;" && data?.info.next) {
      setCurrentPage((old) => Math.min(old + 1, numberOfPages));
    } else if (typeof buttonClicked === "number") {
      const pageNumber = buttonClicked as number;
      setCurrentPage(pageNumber);
    }
    window.scrollTo(0, 0);
  };
  return (
    <div className="h-full bg-backgroundBlackLight flex flex-col">
      <div className="w-full h-72">
        <div className="bg-cover bg-center h-full bg-[url('/images/rick_morty_img_all_episodes.png')]">
          <div className="bg-black bg-opacity-40 w-full h-full flex justify-start items-end p-14">
            <h1 className="font-primary uppercase text-2xl font-bold opacity-100 border-b-2  border-cyanLight animate-slideUp">
              All Episodes
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-1 mt-10 px-12 py-10 animate-slideUp flex flex-col items-center space-y-10">
        {isLoading && <LoadingMessage />}
        {(isError || data?.error || !data) && (
          <DisplayError error={error} data={data} />
        )}
        {isSuccess && (
          <>
            <div className="grid grid-cols-1 gap-8 justify-items-center lg:grid-cols-2 xl:grid-cols-3">
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
            <Pagination
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              info={data.info}
            />
          </>
        )}
      </div>
    </div>
  );
}
