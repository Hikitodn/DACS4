import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CallPageFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-white h-24 z-10">
      <div className="flex items-center w-80 h-full">
        <div className="flex items-center justify-center h-full px-5 hover:cursor-pointer hover:bg-slate-100">
          Meeting details
          <FontAwesomeIcon className="ml-2 text-xl" icon={solid("angle-up")} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-1">
        <div className="bg-white hover:cursor-pointer w-12 h-12 hover:shadow-md rounded-full flex items-center justify-center border border-slate-200 mx-2">
          <FontAwesomeIcon
            className="text-xl text-gray-600"
            icon={solid("microphone")}
          />
        </div>
        <div className="bg-white group hover:cursor-pointer w-12 h-12 hover:shadow-md rounded-full flex items-center justify-center border border-slate-200 mx-2 hover:bg-red-700">
          <FontAwesomeIcon
            className="text-xl text-red-700 group-hover:text-white"
            icon={solid("phone")}
          />
        </div>
        <div className="bg-white hover:cursor-pointer w-12 h-12 hover:shadow-md rounded-full flex items-center justify-center border border-slate-200 mx-2">
          <FontAwesomeIcon
            className="text-xl text-gray-600"
            icon={solid("video")}
          />
        </div>
      </div>
      <div className="flex items-center justify-end h-full w-80">
        <div className="flex items-center justify-center flex-col h-full w-36 text-gray-600 hover:cursor-pointer hover:bg-slate-100">
          <FontAwesomeIcon
            className="text-xl mb-2"
            icon={solid("closed-captioning")}
          />
          <p className="m-0 text-sm font-medium">Turn on captions</p>
        </div>
        <div className="flex items-center justify-center flex-col h-full w-36 text-gray-600 hover:cursor-pointer hover:bg-slate-100">
          <FontAwesomeIcon className="text-xl mb-2" icon={solid("desktop")} />
          <p className="m-0 text-sm font-medium">Present now</p>
        </div>
      </div>
    </div>
  );
};

export default CallPageFooter;
