/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import bgImage from "assets/images/me.jpg";

function BuiltByDevelopers() {
  // const bgImage =
  //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.4),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h1" color="white" mb={1}>
            About Me
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            {
              <>
                I developed a passion for technology early on, starting in middle school with a tech
                class that introduced me to software engineering concepts through kid-friendly
                scripting languages. My curiosity led me to tinker with gadgets, earning money by
                fixing phones and iPods for friends and classmates. In high school, I explored a
                different path, learning valuable time management skills in an industrial kitchen
                setting and working in various food industry roles after graduation.
                <br />
                <br />
                During the COVID-19 pandemic, I reignited my interest in technology, experimenting
                with projects like creating a VPN on a Raspberry Pi. This experience, coupled with a
                growing love for PC gaming, led me to pursue a career in IT. In my IT role, I
                automated repetitive tasks using batch scripting, Windows CMD, and Powershell,
                eventually learning C# to enhance these solutions. Now, I&apos;m eager to continue
                solving problems through software development, finding it a highly rewarding
                endeavor.
              </>
            }
          </MKTypography>
          {/* <MKTypography
            component="a"
            href="https://www.creative-tim.com/learning-lab/react/overview/material-kit/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Read docs <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
