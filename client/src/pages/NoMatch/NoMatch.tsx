import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <div className="flex flex-col mt-28 justify-center items-center">
        <h1 className="text-4xl font-light mb-3">Invalid video call name</h1>
        <Link to="/">
          <div className=" bg-green-700 p-4 rounded-sm text-white">
            Return to home screen
          </div>
        </Link>
      </div>
    </>
  );
};

export default NoMatch;
