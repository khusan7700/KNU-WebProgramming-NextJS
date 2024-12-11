import React, { useState } from "react";
import { Stack } from "@mui/material";

const Advertisement = () => {
  return (
    <Stack className={"videp-frame"}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/knu-video.mp4" type="video/mp4" />
      </video>
    </Stack>
  );
};

export default Advertisement;
