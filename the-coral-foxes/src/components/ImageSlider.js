import React, { useState } from "react";

const ImageSlider = ({ oldPic, newPic }) => {
  console.log(oldPic);
  const [ratio, setRatio] = useState(80);
  const [mousePos, setMousePos] = useState();

  const onHover = (ev) => {
    const currentTargetRect = ev.currentTarget.getBoundingClientRect();
    const event_offset = ev.pageX - currentTargetRect.left;
    const newRatio = ((event_offset / currentTargetRect.width) * 100).toFixed(
      0
    );
    setRatio(newRatio);
  };

  return (
    <div>
      <img
        onMouseMove={onHover}
        style={{
          position: "absolute",
          left: "10%",
          top: "5%",
          width: "80%",
          height: "50%",
        }}
        src={process.env.PUBLIC_URL + oldPic}
        alt="old"
      />
      <img
        style={{
          position: "absolute",
          left: "10%",
          top: "5%",
          width: "80%",
          height: "50%",
          objectFit: "cover",
          clipPath: `polygon(0 0 , ${ratio}% 0, ${ratio}% 100%, 0 100%)`,
          pointerEvents: "none",
        }}
        src={process.env.PUBLIC_URL + oldPic}
        alt="old"
      />
      <img
        style={{
          position: "absolute",
          left: "10%",
          top: "5%",
          width: "80%",
          height: "50%",
          objectFit: "cover",
          clipPath: `polygon(${ratio}% 0 , 100% 0, 100% 100%, ${ratio}% 100%)`,
          pointerEvents: "none",
        }}
        src={process.env.PUBLIC_URL + newPic}
        alt="new"
      />
      <div
        style={{
          backgroundColor: "blue",
          position: "absolute",
          width: "2px",
          height: "50%",
          top: "5%",
          pointerEvents: "none",
          left:
            (mousePos && mousePos - 1) || `calc(${10 + ratio * 0.8}% - 1px)`,
        }}
      ></div>
      <div
        style={{
          width: "80%",
          position: "relative",
          left: "10%",
          top: "450px",
        }}
      ></div>
    </div>
  );
};

export default ImageSlider;
