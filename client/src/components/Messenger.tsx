import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextInput } from "@mantine/core";
import moment from "moment";
import { SetStateAction, useState } from "react";

interface Props {
  setIsMessenger: React.Dispatch<React.SetStateAction<boolean>>;
  sendMsg: any;
  messageList: any;
}

const Messenger: React.FC<Props> = ({
  setIsMessenger,
  sendMsg,
  messageList,
}) => {
  const [msg, setMsg] = useState<string>("");

  const handleChangeMsg = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMsg(e.target.value);
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      sendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className="absolute top-0 right-0 bg-white h-[calc(100vh-90px)] w-80 box-border flex justify-between flex-col">
      <div className="p-4 flex items-center justify-between my-2">
        <h3 className="m-0 font-normal">Meeting Details</h3>
        <FontAwesomeIcon
          className="cursor-pointer text-xl"
          icon={solid("times")}
          onClick={() => {
            setIsMessenger(false);
          }}
        />
      </div>

      <div className="flex items-center border-b border-slate-200">
        <div className="flex items-center py-3 justify-center w-full text-gray-700">
          <FontAwesomeIcon icon={solid("user-friends")} />
          <p>People (1)</p>
        </div>
        <div className="flex items-center py-3 justify-center w-full text-gray-700 active:border-b-2 active:border-green-800 active:text-green-700">
          <FontAwesomeIcon icon={solid("comment-alt")} />
          <p className="ml-2">Chat</p>
        </div>
      </div>

      <div className="p-5 flex-1 overflow-y-scroll">
        {messageList.map((item: any) => {
          <div key={item.time} className="mb-7">
            <div className="font-medium text-sm">
              {item.user}{" "}
              <small className="ml-1 font-light">
                {moment(item.time).format("h:mm A")}
              </small>
            </div>
            <p className="m-0 pt-1 text-gray-700 text-sm">{item.msg}</p>
          </div>;
        })}
      </div>

      <div className="p-5 border-y border-slate-200 flex items-center justify-between text-gray-700">
        <TextInput
          className="w-full"
          icon={<FontAwesomeIcon icon={solid("paper-plane")} />}
          placeholder="Enter your message"
          variant="filled"
          value={msg}
          onChange={(e) => handleChangeMsg(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </div>
    </div>
  );
};

export default Messenger;
