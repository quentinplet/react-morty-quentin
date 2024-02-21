import { FC } from "react";
import { MdErrorOutline } from "react-icons/md";

interface ErrorMessageProps {
  error?: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => {
  console.log("Error: ", error);

  return (
    <div className="flex justify-center items-center space-x-2">
      <MdErrorOutline className="text-white size-10" />
      <p className="font-primary font-semi-bold">
        Error fetching data : {error}
      </p>
    </div>
  );
};

export default ErrorMessage;
