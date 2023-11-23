import {useRouteError} from 'react-router-dom';

const PageNotFound = () => {
  const error = useRouteError();

  return (
    <div>
      {errorTypeIsErrorNotFound(error)
        ? <div>
            {error.data}
          </div>
        : <div>
            Unknown error
          </div>
      }
    </div>
  );
}

export default PageNotFound;

type ErrorNotFound = {
  data: string,
  error: Error,
  internal: boolean,
  status: 404,
  statusText: string
}

const errorTypeIsErrorNotFound = (error: unknown): error is ErrorNotFound => {
  return (error as ErrorNotFound).status === 404;
}