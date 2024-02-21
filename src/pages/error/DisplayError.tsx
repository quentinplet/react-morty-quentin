import { FC } from "react";
import ErrorMessage from "./ErrorMessage";

interface DisplayErrorProps {
  error: any;
  data?: any;
}

const DisplayError: FC<DisplayErrorProps> = (error, data?) => {
  if (error instanceof Error) {
    return <ErrorMessage error={error.message} />;
  } else if (data?.error) {
    return <ErrorMessage error={data?.error} />;
  } else {
    return <ErrorMessage error="An error occured" />;
  }
};

export default DisplayError;
