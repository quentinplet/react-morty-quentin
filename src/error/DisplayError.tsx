import { FC } from "react";
import ErrorMessage from "./ErrorMessage";

interface DisplayErrorProps {
  error: any;
  data?: any;
}

const DisplayError: FC<DisplayErrorProps> = ({ error, data }) => {
  if (error instanceof Error) {
    return <ErrorMessage error={error.message} />;
  } else if (data) {
    return <ErrorMessage error={data?.error} />;
  }
};

export default DisplayError;
