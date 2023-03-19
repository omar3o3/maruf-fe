import React from "react";
import Typography from "@mui/material/Typography";
import {
  createTheme,
  ThemeProvider,
  styled,
  responsiveFontSizes,
} from "@mui/material/styles";

function About() {

  return (
    <div id="about-page">
      <div>
        <Typography variant="h2" align="center" style={{ marginTop: "7%" }}>
          About Us
        </Typography>
        <Typography
          align="center"
          variant="h6"
          style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            marginTop: "3%",
            fontWeight: "bold",
          }}
        >
          The Maruf community provides a safe and supportive space for young
          Muslim professionals in New York City to explore their spirituality
          and learn more about their faith. We recognize that many young Muslims
          face complex challenges, such as balancing their religious and
          professional responsibilities or navigating cultural differences
          within their families and communities. By creating a community that
          encourages open and honest dialogue, we empower individuals to
          confront these issues head-on and find meaningful solutions. In
          addition to tackling tough topics, Maruf also offers a wealth of
          opportunities for personal growth, including community events, service
          projects, and mentorship programs. Members of Maruf also benefit from
          a strong sense of friendship and belonging, as we come together to
          support each other and celebrate our shared values. We are proud to
          offer a unique space that caters specifically to the needs of young
          Muslim professionals in New York City and look forward to welcoming
          anyone who shares our vision.
        </Typography>
      </div>
      <div>
        <Typography variant="h2" align="center" style={{ marginTop: "7%" }}>
          Open Faith Discussions
        </Typography>
        <Typography
          align="center"
          variant="h6"
          style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            marginTop: "3%",
            // marginBottom: "10%",
            paddingBottom: "10%",
            fontWeight: "bold",
          }}
        >
          A space where young professionals can learn to spiritually grow and
          establish genuine companionship within a socially accepting
          environment.
        </Typography>
      </div>
    </div>
  );
}

export default About;
