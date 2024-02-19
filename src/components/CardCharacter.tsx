import { FC } from "react";
import { useFetchOne } from "../hooks/useFetch";

interface CardCharacterProps {
  url: string;
}

const CardCharacter: FC<CardCharacterProps> = ({ url }) => {
  const { data, isLoading, isError, isSuccess } = useFetchOne(url, url);

  return (
    <div className="flex flex-col items-start space-y-4 max-w-48">
      {isSuccess && (
        <>
          <img
            src={data?.image}
            alt={data?.name}
            className="rounded-lg object-contain max-h-40"
          />
          <p className="text-white font-['Montserrat_Alternates'] font-bold text-xl">
            {data?.name}
          </p>
        </>
      )}
    </div>
  );
};

export default CardCharacter;
