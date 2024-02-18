import { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="bg-zinc-700 p-10 px-14">
      <div className="container mx-auto flex flex-col space-y-5 items-center justify-center">
        <img
          src="../../public/images/logo.png"
          alt="logo-rick-morty"
          className="w-[185px] h-[65px] md:self-start"
        />
        <div className="border-t w-full border-cyan-400"></div>
        <div className="w-full text-white font-['Montserrat_Alternates'] font-bold text-xs flex flex-col items-center space-y-5 md:flex-row  md:space-y-0 md:justify-between">
          <p className="text-xs uppercase ">
            Rick and Morty DB | All rights Reserved
          </p>
          <div className="flex justify-center space-x-10">
            <span>
              <a href="#" className="hover:border-b border-cyan-400">
                Home
              </a>
            </span>
            <span>
              <a href="#" className="hover:border-b border-cyan-400">
                Episodes
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
