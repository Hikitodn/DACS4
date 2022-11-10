import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  messageAlert: any;
}

const Alert: React.FC<Props> = ({ messageAlert }) => {
  return (
    <div className="absolute bottom-24 right-2 bg-white rounded p-4 min-w-min max-w-max">
      <div className="flex items-center mb-1 text-green-600">
        <FontAwesomeIcon className="mr-2" icon={solid("comment-alt")} />
        <h3 className="text-base m-0 font-medium">
          {messageAlert.payload.user}
        </h3>
      </div>
      <p className="text-sm m-0 whitespace-nowrap overflow-hidden text-ellipsis">
        {messageAlert.payload.msg}
      </p>
    </div>
  );
};

export default Alert;
