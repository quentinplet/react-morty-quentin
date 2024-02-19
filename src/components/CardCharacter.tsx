import { FC } from "react";

interface CardCharacterProps {
  name: string;
  gender: string;
}

const CardCharacter: FC<CardCharacterProps> = ({ name, gender }) => {
  return (
    <div className="flex flex-col items-start space-y-4 max-w-48">
      <img
        src="../../../public/images/morty_img_test.png"
        alt=""
        className="rounded-lg object-contain max-h-40"
      />
      <p className="text-white font-['Montserrat_Alternates'] font-bold text-xl">
        Morty Smith
      </p>
    </div>
  );
};

export default CardCharacter;
