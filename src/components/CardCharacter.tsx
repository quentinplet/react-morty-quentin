import { FC } from "react";
import { useFetchOne } from "../hooks/useFetch";
import { PiGenderMale } from "react-icons/pi";
import { PiGenderFemale } from "react-icons/pi";
import { PiGenderNeuter } from "react-icons/pi";
import { PiQuestion } from "react-icons/pi";
import { Character } from "../types";
import LoadingMessage from "./common/LoadingMessage";
import ErrorMessage from "../pages/error/ErrorMessage";
import DisplayError from "../pages/error/DisplayError";

interface CardCharacterProps {
  url: string;
}

interface CharacterGenderIconTypes {
  [key: string]: JSX.Element;
}

const CardCharacter: FC<CardCharacterProps> = ({ url }) => {
  const id = url.split("/").pop();
  const { data, isLoading, isError, error, isSuccess } = useFetchOne(
    "character",
    id as string
  );

  const characterInfo: Character = data;

  const CharacterGenderIcon: CharacterGenderIconTypes = {
    Male: <PiGenderMale />,
    Female: <PiGenderFemale />,
    Genderless: <PiGenderNeuter />,
    unknown: <PiQuestion />,
  };

  return (
    <div className="flex flex-col items-start space-y-4 max-w-48 animate-fadeIn">
      {isLoading && <LoadingMessage />}
      {(isError || data?.error || !data) && (
        <DisplayError error={error} data={data} />
      )}
      {isSuccess && (
        <>
          <img
            src={characterInfo.image}
            alt={characterInfo.name}
            className="rounded-lg object-contain "
          />
          <div className="max-w-40 flex justify-start items-center space-x-2">
            <p className="text-white shrink font-['Montserrat_Alternates'] font-bold text-sm">
              {characterInfo.name}
            </p>
            <div className="flex-auto text-cyanLight font-bold text-xl relative bottom-0.5">
              {CharacterGenderIcon[characterInfo.gender]}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardCharacter;
