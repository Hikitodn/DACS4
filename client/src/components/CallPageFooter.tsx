import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  isPresenting: boolean;
  screenShare: any;
  stopScreenShare: any;
  isAudio: boolean;
  toggleAudio: any;
  disconnectCall: any;
}

const CallPageFooter: React.FC<Props> = ({
  isPresenting,
  screenShare,
  stopScreenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
}) => {
  return (
    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-white h-24 z-10">
      <div className="flex items-center w-80 h-full">
        <div className="flex items-center justify-center h-full px-5 hover:cursor-pointer hover:bg-slate-100">
          Meeting details
          <FontAwesomeIcon className="ml-2 text-xl" icon={solid("angle-up")} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-1">
        <div
          className={`bg-white hover:cursor-pointer w-12 h-12 hover:shadow-md rounded-full flex items-center justify-center border border-slate-200 mx-2 ${
            !isAudio ? "bg-red-700" : null
          }`}
          onClick={() => toggleAudio(!isAudio)}
        >
          <FontAwesomeIcon
            className="text-xl text-gray-600"
            icon={isAudio ? solid("microphone") : solid("microphone-slash")}
          />
        </div>
        <div
          className="bg-white group hover:cursor-pointer w-12 h-12 hover:shadow-md rounded-full flex items-center justify-center border border-slate-200 mx-2 hover:bg-red-700"
          onClick={disconnectCall}
        >
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
        {isPresenting ? (
          <div
            className="flex items-center justify-center flex-col h-full w-36 text-gray-600 hover:cursor-pointer hover:bg-slate-100"
            onClick={stopScreenShare}
          >
            <FontAwesomeIcon className="text-xl mb-2" icon={solid("desktop")} />
            <p className="m-0 text-sm font-medium">Stop presenting</p>
          </div>
        ) : (
          <div
            className="flex items-center justify-center flex-col h-full w-36 text-gray-600 hover:cursor-pointer hover:bg-slate-100"
            onClick={screenShare}
          >
            <FontAwesomeIcon className="text-xl mb-2" icon={solid("desktop")} />
            <p className="m-0 text-sm font-medium">Present now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallPageFooter;
