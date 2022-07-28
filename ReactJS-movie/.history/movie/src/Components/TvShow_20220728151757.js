import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "node_modules/react-modal-video/scss/modal-video.scss";
const TvShow = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="3Zibb6lVCRw"
          onClose={() => setOpen(false)}
        />

        <button className="btn-primary" onClick={() => setOpen(true)}>
          VIEW DEMO
        </button>
      </React.Fragment>
    </div>
  );
};

export default TvShow;
