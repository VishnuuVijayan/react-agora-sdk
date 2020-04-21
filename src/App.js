import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AgoraRTC from "agora-rtc-sdk-ng";
import { Form, Button } from "react-bootstrap";

const client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });

const rtc = {
  // For the local client
  client: null,
  // For the local audio and video tracks
  localAudioTrack: null,
  localVideoTrack: null,
};

const options = {
  // Pass your app ID here
  appId: "3c959e7eb4864d75b2539f38e289f6e6",
  // Set the channel name
  channel: "demo_channel_name",
  // Pass a token if your project enables the App Certificate
  token: null,
};

async function startBasicCall(input) {
  rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "h264" });
  const uid = await rtc.client.join(options.appId, input, options.token, null);
  // Create an audio track from the audio captured by a microphone
  rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
  // Create a video track from the video captured by a camera
  rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
  // Publish the local audio and video tracks to the channel
  await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);

  rtc.localVideoTrack.play("local-stream");

  rtc.client.on("user-published", async (user, mediaType) => {
    // Subscribe to a remote user
    await rtc.client.subscribe(user);
    console.log("subscribe success");

    if (mediaType === "video" || mediaType === "all") {
      // Get `RemoteVideoTrack` in the `user` object.
      const remoteVideoTrack = user.videoTrack;
      const PlayerContainer = React.createElement("div", {
        id: user.uid,
        className: "stream",
      });
      ReactDOM.render(
        PlayerContainer,
        document.getElementById("remote-stream")
      );
      // Dynamically create a container in the form of a DIV element for playing the remote video track.
      // Specify the ID of the DIV container. You can use the `uid` of the remote user.
      // playerContainer.id = user.uid;
      // playerContainer.style.width = "640px";
      // playerContainer.style.height = "480px";
      // document.body.append(playerContainer);

      // Play the remote audio and video tracks
      // Pass the ID of the DIV container and the SDK dynamically creates a player in the container for playing the remote video track

      user.remoteVideoTrack.play(`${user.uid}`);
    }

    if (mediaType === "audio" || mediaType === "all") {
      // Get `RemoteAudioTrack` in the `user` object.
      const remoteAudioTrack = user.audioTrack;
      // Play the audio track. Do not need to pass any DOM element
      remoteAudioTrack.play();
    }

    rtc.client.on("user-unpublished", (user) => {
      // Get the dynamically created DIV container
      const playerContainer = document.getElementById(user.uid);
      // Destroy the container
      playerContainer.remove();
    });
  });

  console.log("publish success!");
}

async function leaveCall() {
  // Destroy the local audio and video tracks
  rtc.localAudioTrack.close();
  rtc.localVideoTrack.close();

  // Traverse all remote users
  rtc.client.remoteUsers.forEach((user) => {
    // Destroy the dynamically created DIV container
    const playerContainer = document.getElementById(user.uid);
    playerContainer && playerContainer.remove();
  });

  // Leave the channel
  await rtc.client.leave();
}

function App() {
  const onSubmit = () => {
    if (flag === false) {
      startBasicCall(input);
      setBtn("LEAVE");
      setFlag(true);
      console.log(flag);
    } else {
      leaveCall();
      setFlag(false);
    }
  };

  const [input, setInput] = useState("");
  const [btn, setBtn] = useState("SUBMIT");
  const [flag, setFlag] = useState(false);
  if (flag) {
    return (
      <div className="container">
        <Button variant="primary" type="submit" onClick={leaveCall}>
          {btn}
        </Button>
        <div id="local-stream" className="stream local-stream"></div>
        <div id="remote-stream" className="stream remote-stream"></div>
        {/* <input type="submit" value={btn} onClick={leaveCall} /> */}
      </div>
    );
  }
  return (
    <div className="container">
      <h1>Agora WebSDK NG Beta Testing</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Channel Name</Form.Label>
          <Form.Control
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Channel Name"
          />
          <Form.Text className="text-muted">
            AppID : "{options.appId}"
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          {btn}
        </Button>
      </Form>
    </div>
  );
}

export default App;
