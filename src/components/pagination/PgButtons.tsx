import { FC } from "react";

interface PgButtonsProps {
  children: React.ReactNode;
  handleClick: () => void;
  currentPage: number;
}

const PgButtons: FC<PgButtonsProps> = ({
  children,
  handleClick,
  currentPage,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`size-9 bg-cyanLight rounded-full border border-cyanDark hover:bg-cyanDark hover:border-cyanLight ${
        currentPage === children ? "bg-[#0090A3] border-cyanLight" : ""
      }
      `}
    >
      <span className="font-primary text-sm font-bold ">{children}</span>
    </button>
  );
};

export default PgButtons;
