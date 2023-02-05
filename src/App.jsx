import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container p-3 my-3">
        <div class="row">
          <h3>Capture Photo using JavaScript Web API</h3>
          <button class="btn btn-primary" id="start-camera">
            <i class="fas fa-camera"></i>
            Start Camera
          </button>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-5">
            <video id="video" autoplay></video>
          </div>
          <div class="col-lg-2 justify-content-center">
            <button class="btn btn-primary" id="click-photo">
              <i class="fas fa-camera-retro"></i>
              Click Photo
            </button>
            <button class="btn btn-secondary" id="resetBtn">
              <i class="fas fa-sync-alt"></i>
              Reset
            </button>
          </div>
          <div class="col-lg-5" id="dataurl-container">
            <canvas id="canvas" width="420" height="240"></canvas>
          </div>
        </div>
        <div class="row justify-content-end p-3" id="downloadDIV">
          <input
            class="form-control"
            type="text"
            id="fileName"
            placeholder="Enter File Name"
          />
          <a class="btn btn-link" id="downloadID">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

