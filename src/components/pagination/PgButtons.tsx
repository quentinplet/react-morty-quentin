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
      className={`size-9 rounded-full border  hover:bg-cyanDark hover:border-cyanLight ${
        currentPage === children
          ? "bg-cyanDark border-cyanLight"
          : "bg-cyanLight border-cyanDark"
      }
      `}
    >
      <span className="font-primary text-sm font-bold ">{children}</span>
    </button>
  );
};

export default PgButtons;
