import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TopAgentCard from "./TopAgentCard";

const TopAgents = ({ initialInput, ...props }: any) => {
  const [topAgents, setTopAgents] = useState<number[]>(initialInput);

  return (
    <Stack>
      <img src="/img/100/webp" alt="" />
    </Stack>
  );
};

TopAgents.defaultProps = {
  initialInput: [1, 2, 3, 4, 5, 6, 7],
};

export default TopAgents;
