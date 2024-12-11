import React from "react";
import { Box, Stack, Divider, Typography, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TopPropertyCard = () => {
  return (
    <Stack className="map">
      <Container>
        <a href="/property">
          <img src="/map_image.png" alt="" />
        </a>
      </Container>
    </Stack>
  );
};

export default TopPropertyCard;
