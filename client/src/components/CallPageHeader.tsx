import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CallPageHeader = () => {
  return (
    <div className="flex justify-around items-center absolute top-0 right-0 bg-white w-80 rounded-bl overflow-hidden">
      <div className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-xl text-gray-700 cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={solid("user-friends")} />
      </div>
      <div className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-xl text-gray-700 cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={solid("message")} />
        <div className="absolute w-2 h-2 rounded-full top-2 right-5 border-2 bg-green-500 border-white"></div>
      </div>
      <div className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-xl text-gray-600 min-w-max font-normal">
        1:00 PM
      </div>
      <div className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-green-700 text-3xl cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={solid("user-circle")} />
      </div>
    </div>
  );
};

export default CallPageHeader;
