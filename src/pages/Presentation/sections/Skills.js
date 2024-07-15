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
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/shapes/waves-white.svg";

function Skills() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Skills & Technologies
            </MKTypography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bash">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Bitbucket">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="C#">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="CSS">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Docker">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="ESLint">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="GitHub">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="GitHub Actions">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="HTML">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Java">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Javascript">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="JSON">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Linux">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="MySQL">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="PostgreSQL">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Powershell">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Python">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Raspberry Pi">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="SQLite">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Unity">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="Windows">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="XML">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>

              <Grid item xs={4} lg={2}>
                <Tooltip title="YAML">
                  <MKBox component="a">
                    <MKBox
                      component="img"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Skills;
