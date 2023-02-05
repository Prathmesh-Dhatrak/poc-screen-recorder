import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [logElem, setLogElem] = useState("");
  // const videoElem = document.getElementById("video");
  const videoElem = useRef(null);
  // const logElem = document.getElementById("log");
  // const startElem = document.getElementById("start");
  // const stopElem = document.getElementById("stop");

  const displayMediaOptions = {
    video: {
      displaySurface: "window",
    },
    audio: false,
  };

  console.log = (msg) =>
    setLogElem(
      <>
        {logElem} + {msg}
        <br />
      </>
    );
  console.error = (msg) =>
    setLogElem(
      <>
        {logElem} + <span class="error">{msg}</span>
        <br />
      </>
    );
  console.warn = (msg) =>
    setLogElem(
      <>
        {logElem} + <span class="warn">{msg}</span>
        <br />
      </>
    );
  console.info = (msg) =>
    setLogElem(
      <>
        {logElem} + <span class="info">{msg}</span>
        <br />
      </>
    );

  async function startCapture() {
    setLogElem("");
    try {
      videoElem.current.srcObject =
        await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      dumpOptionsInfo();
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  }

  function stopCapture(evt) {
    let tracks = videoElem.current.srcObject.getTracks();

    tracks.forEach((track) => track.stop());
    videoElem.current.srcObject = null;
  }

  function dumpOptionsInfo() {
    const videoTrack = videoElem.current.srcObject.getVideoTracks()[0];

    console.info("Track settings:");
    console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
    console.info("Track constraints:");
    console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
  }

  return (
    <div className="App">
      <h2>POC of screen capture web api</h2>

      <p>
        <button id="start" onClick={() => startCapture()}>
          Start Capture
        </button>
        &nbsp;
        <button id="stop" onClick={() => stopCapture()}>
          Stop Capture
        </button>
      </p>

      <video ref={videoElem} id="video" autoPlay></video>
      <br />

      <strong>Log:</strong>
      <br />
      <pre id="log">{logElem}</pre>
    </div>
  );
}

export default App;

