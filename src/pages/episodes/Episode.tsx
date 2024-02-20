import { FC, useEffect, useState } from "react";
import CardCharacter from "../../components/CardCharacter";
import { useParams } from "react-router-dom";
import { EpisodeType } from "../../types";
import { useFetchOne } from "../../hooks/useFetch";

export default function Episode() {
  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/episode/${id}`;
  const { data, isLoading, isError, error, isSuccess } = useFetchOne(
    "episode",
    url
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // if (isError) {
  //   return <p>{error}</p>;
  // }

  if (isSuccess && data) {
    const { name, episode, air_date, characters } = data as EpisodeType;

    return (
      <div className=" h-full bg-zinc-600">
        <div className="p-5 md:px-20 md:pt-28 space-y-20">
          <div className="mx-auto max-w-96 flex flex-col items-start space-y-8 md:grid md:grid-cols-3 md:max-w-full md:gap-x-16">
            <div className="flex flex-col space-y-5 w-full ">
              <h1 className=" text-white font-['Montserrat_Alternates'] font-bold text-2xl">
                <span className="border-b border-cyan-400 inline-block">
                  {name}
                </span>
              </h1>
              <div className="flex justify-center items-center w- md:max-w-[360px]">
                <img
                  src="../../../public/images/rick_img_test.png"
                  alt=""
                  className="rounded-lg object-cover w-full max-h-64 md:max-h-72"
                />
              </div>
            </div>
            <div className="text-white font-['Montserrat_Alternates'] font-bold text-xl flex flex-col w-full space-y-4">
              <p>Episode: {episode}</p>
              <div className="border-b border-cyan-400"></div>
              <p>Release date : {air_date}</p>
              <div className="border-b border-cyan-400"></div>
              <p>Characters: {characters?.length}</p>
              <div className="border-b border-cyan-400"></div>
            </div>
          </div>
          <div className="mx-auto max-w-96 flex flex-col items-center space-y-10 md:max-w-full md:items-start">
            <p className="text-white font-['Montserrat_Alternates'] font-bold text-2xl border-b border-cyan-400">
              {characters?.length} Characters in the episode
            </p>
            <div className="flex flex-col gap-y-12 md:flex-row md:gap-x-10 md:flex-wrap">
              {characters?.map((character: string) => {
                return <CardCharacter key={character} url={character} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
