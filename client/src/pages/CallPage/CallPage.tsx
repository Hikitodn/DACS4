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

let peer: any = null;
const socket = io.connect("http://localhost:4000");
const initialState: any[] = [];

const CallPage = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const isAdmin = window.location.hash === "#init" ? true : false;
  const url = `${window.location.origin}${window.location.pathname}`;
  let alertTimeout = null;
  // console.log(isAdmin, url);

  const [messageList, messageListReducer] = useReducer(
    MessageListReducer,
    initialState
  );
  const [streamObj, setStreamObj] = useState();
  const [screenCastStream, setScreenCastStream] = useState();
  const [meetInfoPopup, setMeetInfoPopup] = useState(false);
  const [isPresenting, setIsPresenting] = useState(false);
  const [isMessenger, setIsMessenger] = useState(false);
  const [messageAlert, setMessageAlert] = useState({});
  const [isAudio, setIsAudio] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      setMeetInfoPopup(true);
    }
    initWebRTC();
    socket.on("code", (data) => {
      // if (data.url === url) {
      //   peer.signal(data);
      // }
      peer.signal(data);
    });
  }, []);

  const getReceiverCode = async () => {
    const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
    if (response.code) {
      return peer.signal(response.code);
    }
  };

  const initWebRTC = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream: any) => {
        setStreamObj(stream);
        peer = new Peer({
          initiator: isAdmin,
          trickle: false,
          stream: stream,
        });

        if (!isAdmin) {
          getReceiverCode();
        }

        peer.on("signal", async (data: any) => {
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

        peer.on("stream", (stream: any) => {
          let video: HTMLVideoElement = document.querySelector("video")!;

          if ("srcObject" in video) {
            video.srcObject = stream;
          } else {
            video.src = window.URL.createObjectURL(stream);
          }

          video.play();
        });
      })
      .catch(() => {
        console.log("error");
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

        <CallPageHeader />
        <CallPageFooter />
        {isAdmin && meetInfoPopup && (
          <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
        )}
        <Messenger />
      </div>
    </>
  );
};

export default CallPage;
