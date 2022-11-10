import CallPageFooter from "../../components/CallPageFooter";
import CallPageHeader from "../../components/CallPageHeader";
import MeetingInfo from "../../components/MeetingInfo";
import Messenger from "../../components/Messenger";
import MessageListReducer from "../../redux/MessageListReducer";
import Peer from "simple-peer";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest, postRequest } from "../../utils/apiRequests";
import { BASE_URL, GET_CALL_ID, SAVE_CALL_ID } from "../../utils/apiEndpoints";
import * as io from "socket.io-client";
import Alert from "../../components/Alert";

let peer: Peer.Instance | null = null;
const socket = io.connect("http://localhost:4000");
const initialState: any[] = [];

const CallPage: React.FC = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const isAdmin = window.location.hash === "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  let alertTimeout: any = null;
  // console.log(isAdmin, url);

  const [messageList, messageListReducer] = useReducer(
    MessageListReducer,
    initialState
  );
  const [streamObj, setStreamObj] = useState<MediaStream>();
  const [screenCastStream, setScreenCastStream] = useState<MediaStream>();
  const [meetInfoPopup, setMeetInfoPopup] = useState<boolean>(false);
  const [isPresenting, setIsPresenting] = useState<boolean>(false);
  const [isMessenger, setIsMessenger] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<any>({});
  const [isAudio, setIsAudio] = useState<boolean>(true);

  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true);
    }
    initWebRTC();
    socket.on("code", (data) => {
      peer?.signal(data);
    });
  }, []);

  const getReceiverCode = async () => {
    const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
    if (response.code) {
      console.log(response);
      return peer?.signal(response.code);
    }
  };

  const initWebRTC = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        setStreamObj(stream);

        peer = new Peer({
          initiator: isAdmin,
          trickle: false,
          stream: stream,
        });

        if (!isAdmin) {
          getReceiverCode();
        }

        peer.on("signal", async (data) => {
          if (isAdmin) {
            let payload = { id, signalData: data };
            await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
          } else {
            socket.emit("code", data, (cbData: any) => {
              console.log("code sent");
            });
          }
        });

        peer.on("connect", () => {
          console.log("peer connected");
        });

        peer.on("stream", (stream: Blob | MediaSource) => {
          let video: HTMLVideoElement | null = document.querySelector("video");

          if ("srcObject" in video!) {
            video.srcObject = stream;
          } else {
            video!.src = window.URL.createObjectURL(stream);
          }

          video!.play();
        });

        peer.on("data", (data: any) => {
          clearTimeout(alertTimeout);
          messageListReducer({
            type: "addMessage",
            payload: {
              user: "other",
              msg: data.toString(),
              time: Date.now(),
            },
          });

          setMessageAlert({
            alert: true,
            isPopup: true,
            payload: {
              user: "other",
              msg: data.toString(),
            },
          });

          alertTimeout = setTimeout(() => {
            setMessageAlert({
              ...messageAlert,
              isPopup: false,
              payload: {},
            });
          }, 10000);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const screenShare = () => {
    navigator.mediaDevices.getDisplayMedia().then((screenStream) => {
      peer?.replaceTrack(
        streamObj!.getVideoTracks()[0],
        screenStream.getVideoTracks()[0],
        streamObj!
      );
      setScreenCastStream(screenStream);
      screenStream.getTracks()[0].onended = () => {
        peer?.replaceTrack(
          screenStream.getVideoTracks()[0],
          streamObj!.getVideoTracks()[0],
          streamObj!
        );
      };
      setIsPresenting(true);
    });
  };

  const stopScreenShare = () => {
    screenCastStream?.getVideoTracks().forEach((track) => {
      track.stop();
    });
    peer?.replaceTrack(
      screenCastStream!.getVideoTracks()[0],
      streamObj!.getVideoTracks()[0],
      streamObj!
    );
    setIsPresenting(false);
  };

  const toggleAudio = (value: any) => {
    streamObj!.getAudioTracks()[0].enabled = value;
    setIsAudio(value);
  };

  const disconnectCall = () => {
    peer?.destroy();
    navigate("/");
    window.location.reload();
  };

  const sendMsg = (msg: any) => {
    peer?.send(msg);
    messageListReducer({
      type: "addMessage",
      payload: {
        user: "you",
        msg: msg,
        time: Date.now(),
      },
    });
  };

  return (
    <>
      <div>
        <video
          className="w-full h-full top-0 left-0 object-cover absolute -z-10"
          src=""
          controls
        ></video>

        <CallPageHeader
          isMessenger={isMessenger}
          setIsMessenger={setIsMessenger}
          messageAlert={messageAlert}
          setMessageAlert={setMessageAlert}
        />
        <CallPageFooter
          isPresenting={isPresenting}
          screenShare={screenShare}
          stopScreenShare={stopScreenShare}
          isAudio={isAudio}
          toggleAudio={toggleAudio}
          disconnectCall={disconnectCall}
        />
        {isAdmin && meetInfoPopup && (
          <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
        )}
        {isMessenger ? (
          <Messenger
            setIsMessenger={setIsMessenger}
            sendMsg={sendMsg}
            messageList={messageList}
          />
        ) : (
          messageAlert.isPopup && <Alert messageAlert={messageAlert} />
        )}
      </div>
    </>
  );
};

export default CallPage;
