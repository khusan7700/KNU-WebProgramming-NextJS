import { Box, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Stack className={"footer-container"}>
      <Stack className="main">
        <Stack className="left">
          <Box component={"div"} className={"footer-box"}>
            <a href="https://www.knu.ac.kr/wbbs/wbbs/main/main.action">
              <img src="/knu-logo.jpg" alt="" className={"logo"} />
            </a>
          </Box>

          <Box component={"div"} className={"footer-box"}>
            <span>대구광역시 북구 대학로 80 (산격동,경북대학교)</span>
            <p>학교안내전화 053-950-5114 당직실 053-950-6000</p>
          </Box>

          <Box component={"div"} className={"footer-box"}>
            <span>
              Copyright(c) Kyungpook National University. All rights reserved.
            </span>
          </Box>

          <Box component={"div"} className={"footer-box"}>
            <p>follow us on social media</p>
            <div className={"media-box"}>
              <a href="https://www.facebook.com/knuofficial1946/">
                <FacebookOutlinedIcon />
              </a>
              <a href="https://www.instagram.com/knuofficial/">
                <InstagramIcon />
              </a>

              <a href="   https://x.com/i/flow/login?redirect_after_login=%2Fofficial_knu">
                <TwitterIcon />
              </a>
            </div>
          </Box>
        </Stack>
        <Stack className={"right"}>
          <Box component={"div"} className={"top"}>
            <strong>keep yourself up to date</strong>
            <div>
              <input type="text" placeholder={"Your Email"} />
              <span>Subscribe</span>
            </div>
          </Box>
          <Box component={"div"} className={"bottom"}>
            <div>
              <a href="https://www.knu.ac.kr/wbbs/wbbs/contents/index.action?menu_url=edu/school01&menu_idx=38">
                <strong>대학</strong>
              </a>
              <a href="https://grad.knu.ac.kr">
                <span>대학원</span>
              </a>
              <a href="https://home.knu.ac.kr/HOME/global/sub.htm?nav_code=glo1549935049">
                <span>한국어학당</span>
              </a>
              <a href="https://lms1.knu.ac.kr">
                <span>KNU LMS</span>
              </a>
              <a href="https://appfn.knu.ac.kr/login.knu?agentId=5">
                <span>경북대학교 통합인증 시스템</span>
              </a>
            </div>
            <div>
              <strong>Quick Links</strong>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>Pricing Plans</span>
              <span>Out Services</span>
              <span>Contact Support</span>
              <span>FAQs</span>
            </div>
          </Box>
          <div>
            <strong>Discover</strong>
            <span>Seoul</span>
            <span>Privacy Policy</span>
            <span>Gyeongido</span>
            <span>Busan</span>
            <span>Jejudo</span>
          </div>
        </Stack>
      </Stack>
      <Stack className={"second"}>
        <span>KNU - All rights reserved. KNU 2024</span>
        <span>Privacy . Terms . Sitemap</span>
      </Stack>
    </Stack>
  );
};

export default Footer;
