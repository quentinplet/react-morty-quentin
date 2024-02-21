import { FC } from "react";
import PgButtons from "./PgButtons";

interface PaginationProps {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  handlePageChange: (pageNumber: number | string) => void;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
  info,
  handlePageChange,
  currentPage,
}) => {
  const { next, prev, pages } = info;
  const pgArray = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-5">
      <button
        className="size-9 bg-cyanLight rounded-full border border-cyanDark enabled:hover:bg-cyanDark enabled:hover:border-cyanLight disable:hover-none disabled:opacity-20"
        onClick={() => handlePageChange("&lsaquo;")}
        disabled={currentPage === 1 || !prev}
      >
        <span className="font-primary text-2xl font-medium ">&lsaquo;</span>
      </button>
      {pgArray.map((pageNumber) => (
        <PgButtons
          key={pageNumber}
          handleClick={() => handlePageChange(pageNumber)}
          currentPage={currentPage}
        >
          {pageNumber}
        </PgButtons>
      ))}
      <button
        className="size-9 bg-cyanLight rounded-full border border-cyanDark enabled:hover:bg-cyanDark enabled:hover:border-cyanLight disable:hover-none disabled:opacity-20"
        onClick={() => handlePageChange("&rsaquo;")}
        disabled={!next}
      >
        <span className="font-primary text-2xl font-medium ">&rsaquo;</span>
      </button>
    </div>
  );
};

export default Pagination;
