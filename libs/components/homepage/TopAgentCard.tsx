import React from "react";

import { Box, Stack } from "@mui/material";

const TopAgentCard = () => {
  return (
    <Stack className="top-agent-card">
      <Box className={"card-img"}>
        <img src="/img/profile/girl.svg" />
      </Box>
      <Box className={"info"}>
        <strong className={"name"}>martin</strong>
        <span>Agent</span>
      </Box>
    </Stack>
  );
};

export default TopAgentCard;
