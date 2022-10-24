import CallPageFooter from "../../components/CallPageFooter";
import CallPageHeader from "../../components/CallPageHeader";
import MeetingInfo from "../../components/MeetingInfo";
import Messenger from "../../components/Messenger";

const CallPage = () => {
  return (
    <>
      <div>
        <video
          className="w-full h-full top-0 left-0 object-cover absolute -z-10"
          src=""
          controls
        ></video>

        <CallPageHeader />
        <CallPageFooter />
        <MeetingInfo />
        <Messenger />
      </div>
    </>
  );
};

export default CallPage;
