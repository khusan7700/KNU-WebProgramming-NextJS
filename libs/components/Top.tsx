import { Logout } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const Top = () => {
  return (
    <Stack className={"navbar"}>
      <Stack className={"navbar-main"}>
        <Stack className={"container"}>
          <Box component={"div"} className={"logo-box"}>
            <Link href={"/"}>
              <p className="knu">
                KNU-<span className="knumap">map</span>
              </p>
            </Link>
          </Box>
          <Box component={"div"} className={"router-box"} id={"router-box"}>
            <Link href={"/"}>
              <div>Home</div>
            </Link>
            <Link href={"/property"}>
              <div>Building</div>
            </Link>
            <Link href={"/agent"}>
              <div>Library</div>
            </Link>
            <Link href={"/community?articleCategory=FREE"}>
              <div>Community</div>
            </Link>
            <Link href={"/cs"}>
              <div>CS</div>
            </Link>
          </Box>

          <Box component={"div"} className={"user-box"}>
            <>
              <div className={"login-user"}>
                <img src={"/user-icon.svg"} alt="" />
              </div>

              <Menu id="basic-menu" sx={{ mt: "5px" }} open={false}>
                <MenuItem>
                  <Logout
                    fontSize="small"
                    style={{ color: "blue", marginRight: "10px" }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Top;
