import CardCharacter from "../../components/CardCharacter";
import { useParams } from "react-router-dom";
import { EpisodeType } from "../../types";
import { useFetchOne } from "../../hooks/useFetch";
import LoadingMessage from "../../components/common/LoadingMessage";
import DisplayError from "../../error/DisplayError";

export default function Episode() {
  const { id } = useParams();
  const { data, isLoading, isError, error, isSuccess } = useFetchOne(
    "episode",
    id as string
  );

  const infoEpisode: EpisodeType = data;

  return (
    <div className="h-full bg-backgroundBlackLight">
      <div className="min-h-screen p-5 md:px-20 pt-24 lg:pt-28 space-y-20 animate-slideUp">
        {isLoading && <LoadingMessage />}
        {(isError || data?.error || !data) && (
          <DisplayError error={error} data={data} />
        )}
        {isSuccess && infoEpisode && (
          <>
            <div className="mx-auto px-5 flex items-start  lg:max-w-full lg:gap-x-16">
              <div className="flex flex-col space-y-8 w-full ">
                <h1 className="font-primary font-bold text-2xl animate-fadeIn">
                  <span className="border-b border-cyanLight inline-block">
                    {data.name}
                  </span>
                </h1>
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
                  <div className="flex justify-center items-center max-w-[368px]">
                    <img
                      src="/images/rick_img_test.png"
                      alt="rick_img"
                      className="rounded-lg object-cover w-full max-h-64 sm:max-h-72 animate-fadeIn"
                    />
                  </div>
                  <div className="font-primary font-bold text-xl flex flex-col w-full space-y-4 animate-fadeIn">
                    <p>Episode: {data.episode}</p>
                    <div className="border-b border-cyanLight"></div>
                    <p className="text-pretty">
                      Release date : {data.air_date}
                    </p>
                    <div className="border-b border-cyanLight"></div>
                    <p>Characters: {data.characters?.length}</p>
                    <div className="border-b border-cyanLight"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-96 flex flex-col items-center space-y-10 md:max-w-full">
              <p className="font-primary font-bold text-2xl border-b border-cyanLight lg:self-start">
                {data.characters?.length} Characters in the episode
              </p>
              <div className="grid grid-cols-1 place-content-center gap-12 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
                {data.characters?.map((character: string) => {
                  return <CardCharacter key={character} url={character} />;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
