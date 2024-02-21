import { FC, useEffect, useState } from "react";
import CardCharacter from "../../components/CardCharacter";
import { useParams } from "react-router-dom";
import { EpisodeType } from "../../types";
import { useFetchOne } from "../../hooks/useFetch";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingMessage from "../../components/common/LoadingMessage";

export default function Episode() {
  const { id } = useParams();
  // const url = `https://rickandmortyapi.com/api/episode/${id}`;
  const { data, isLoading, isError, error, isSuccess } = useFetchOne(
    "episode",
    id as string
  );

  const displayError = () => {
    if (error instanceof Error) {
      return <ErrorMessage error={error.message} />;
    } else if (data.error) {
      return <ErrorMessage error={data.error} />;
    }
  };

  return (
    <div className="h-full bg-zinc-600">
      <div className="min-h-screen p-5 md:px-20 pt-24 lg:pt-28 space-y-20 animate-slideUp">
        {isLoading && <LoadingMessage />}
        {isError && displayError()}
        {isSuccess && data && (
          <>
            <div className="mx-auto max-w-96 flex flex-col items-start space-y-8 lg:grid lg:grid-cols-3 lg:max-w-full lg:gap-x-16">
              <div className="flex flex-col space-y-5 w-full ">
                <h1 className=" text-white font-['Montserrat_Alternates'] font-bold text-2xl animate-fadeIn">
                  <span className="border-b border-cyan-400 inline-block">
                    {data.name}
                  </span>
                </h1>
                <div className="flex justify-center items-center  md:max-w-[360px]">
                  <img
                    src="../../../public/images/rick_img_test.png"
                    alt=""
                    className="rounded-lg object-cover w-full max-h-64 md:max-h-72 animate-fadeIn"
                  />
                </div>
              </div>
              <div className="text-white font-['Montserrat_Alternates'] font-bold text-xl flex flex-col w-full space-y-4 animate-fadeIn">
                <p>Episode: {data.episode}</p>
                <div className="border-b border-cyan-400"></div>
                <p>Release date : {data.air_date}</p>
                <div className="border-b border-cyan-400"></div>
                <p>Characters: {data.characters?.length}</p>
                <div className="border-b border-cyan-400"></div>
              </div>
            </div>
            <div className="mx-auto max-w-96 flex flex-col items-center space-y-10 md:max-w-full">
              <p className="text-white font-['Montserrat_Alternates'] font-bold text-2xl border-b border-cyan-400 lg:self-start">
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
