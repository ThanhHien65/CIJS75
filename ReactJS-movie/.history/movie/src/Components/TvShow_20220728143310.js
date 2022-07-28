import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

const TvShow = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
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
