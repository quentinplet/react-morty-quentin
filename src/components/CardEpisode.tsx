import { FC } from "react";

interface CardEpisodeProps {
  episode: string;
  name: string;
  air_date: string;
}

const CardEpisode: FC<CardEpisodeProps> = ({ episode, name, air_date }) => {
  return (
    <div className="relative w-[368px] h-[180px] border-2 border-cyanLight rounded flex items-center justify-center">
      <img
        src="../../../public/images/rick_img_test.png"
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="absolute bg-cyanBackground bg-opacity-50 w-full h-full flex justify-between items-end p-3">
        <div className="flex flex-col font-primary max-w-44">
          <h2 className="font-bold text-2xl">{episode}</h2>
          <p className="font-semibold text-base">{name}</p>
          <p className="font-medium text-xs">Release: {air_date}</p>
        </div>
        <div>
          <button className="bg-cyanLight max-w-28 px-4 py-1 rounded-lg border-2 border-cyanDark  hover:bg-cyanDark hover:border-cyanLight">
            <span className="font-primary font-bold text-sm">See more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardEpisode;
