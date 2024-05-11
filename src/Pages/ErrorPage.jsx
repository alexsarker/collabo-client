import ErrorLogo from "/src/assets/404.svg";

const ErrorPage = () => {
  return (
    <div className="my-36 flex justify-center">
      <img src={ErrorLogo} />
    </div>
  );
};

export default ErrorPage;
