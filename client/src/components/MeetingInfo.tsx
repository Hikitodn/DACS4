import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MeetingInfo = () => {
  return (
    <div className="absolute top-12 left-12 bg-white rounded p-6 w-96">
      <div className="flex items-center justify-between text-gray-900">
        <h3 className="m-0 font-normal text-lg">Your meeting's ready</h3>
        <FontAwesomeIcon
          className="cursor-pointer text-xl"
          icon={solid("times")}
        />
      </div>
      <button className="flex items-center justify-center bg-green-700 p-2 text-white text-base rounded-md outline-none my-3">
        <FontAwesomeIcon className="mr-3" icon={solid("user")} />
        Add Others
      </button>
      <p className="text-gray-900 text-sm mb-2">
        Or share this meeting link with others you want in the meeting
      </p>
      <div className="flex items-center justify-between bg-slate-100 p-3 rounded">
        <span className="text-sm font-semibold outline-none bg-none flex-1 text-gray-600">
          Some random URL
        </span>
        <FontAwesomeIcon
          className="cursor-pointer text-gray-600"
          icon={solid("copy")}
        />
      </div>
      <div className="flex items-center justify-center my-3">
        <FontAwesomeIcon
          className="mr-2 text-xl text-blue-600"
          icon={solid("shield-alt")}
        />
        <p className="text-gray-900 text-sm">
          People who use this meeting link must get your permission before they
          can join
        </p>
      </div>
      <p className="text-gray-900 text-sm">Joined as blabla</p>
    </div>
  );
};

export default MeetingInfo;
