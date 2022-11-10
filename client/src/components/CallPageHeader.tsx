import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { formatDate } from "../utils/helpers";

interface Props {
  isMessenger: boolean;
  setIsMessenger: React.Dispatch<React.SetStateAction<boolean>>;
  messageAlert: any;
  setMessageAlert: React.Dispatch<any>;
}

const CallPageHeader: React.FC<Props> = ({
  isMessenger,
  setIsMessenger,
  messageAlert,
  setMessageAlert,
}) => {
  let interval: any = null;
  const [currentTime, setCurrentTime] = useState(() => {
    return formatDate();
  });

  useEffect(() => {
    interval = setInterval(() => setCurrentTime(formatDate()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-around items-center absolute top-0 right-0 bg-white w-80 rounded-bl overflow-hidden">
      <div className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-xl text-gray-700 cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={solid("user-friends")} />
      </div>
      <div
        className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-xl text-gray-700 cursor-pointer hover:bg-gray-100"
        onClick={() => {
          setIsMessenger(true);
          setMessageAlert({});
        }}
      >
        <FontAwesomeIcon icon={solid("message")} />
        {!isMessenger && messageAlert.alert && (
          <span className="absolute w-2 h-2 rounded-full top-2 right-5 border-2 bg-green-500 border-white"></span>
        )}
      </div>
      <div className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-xl text-gray-600 min-w-max font-normal">
        {currentTime}
      </div>
      <div className="flex justify-center items-center h-11 relative flex-1 border-r-2 border-gray-50 text-green-700 text-3xl cursor-pointer hover:bg-gray-100">
        <FontAwesomeIcon icon={solid("user-circle")} />
      </div>
    </div>
  );
};

export default CallPageHeader;
