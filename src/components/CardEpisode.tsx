import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./common/button";

interface CardEpisodeProps {
  episode: string;
  name: string;
  air_date: string;
  id: number;
}

const CardEpisode: FC<CardEpisodeProps> = ({ episode, name, air_date, id }) => {
  const navigate = useNavigate();
  const navigateToEpisode = () => {
    navigate(`/episode/${id}`);
  };
  return (
    <div className="relative w-[368px] h-[180px] border-2 border-cyanLight rounded flex items-center justify-center">
      <img
        src="/images/rick_img_test.png"
        alt="rick image"
        className="object-cover w-full h-full animate-fadeIn"
      />
      <div className="absolute bg-cyanBackground bg-opacity-50 w-full h-full flex justify-between items-end p-3">
        <div className="flex flex-col font-primary max-w-44 animate-fadeIn">
          <h2 className="font-bold text-2xl">{episode}</h2>
          <p className="font-semibold text-base text-pretty">{name}</p>
          <p className="font-medium text-xs">Release: {air_date}</p>
        </div>
        <div>
          <Button handleClick={navigateToEpisode}>See more</Button>
        </div>
      </div>
    </div>
  );
};

export default CardEpisode;
