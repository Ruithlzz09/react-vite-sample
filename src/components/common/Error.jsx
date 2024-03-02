import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NotFound from "./NotFound";

// Currently only handling for Error Code 404
const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return <NotFound />;
      default:
        throw error;
    }
  }

  // rethrow to let the parent error boundary handle it
  // when it's not a special case for this route
  throw error;
};

export default ErrorPage;
