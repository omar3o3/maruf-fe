import React from "react";
import Typography from "@mui/material/Typography";
import bgImage from "../images/main-bg.JPG";
import bgImage2 from "../images/bg-pic.png";
import {
    createTheme,
    ThemeProvider,
    styled,
    responsiveFontSizes,
} from "@mui/material/styles";

function LandingPage() {

    return (
    <div id="landing-page" >
        <div>
        <Typography
            variant="h2"
            align="center"
            style={{ marginTop: "7%" }}
        >
            Maruf Community
        </Typography>
        <Typography variant="h6" align="center"
            style={{
                paddingLeft: "3%",
                paddingRight: "3%",
                marginTop: "3%",
                fontWeight: "bold",
            }}>
            We chose the word "Maruf" to be the name of our community because at
            the core it means something that is well known to be good, which is
            what we strive for. The prophetic teachings, healthy social and
            learning environment, and most importantly the genuine companionship
            developed and experienced at Marut, all goes back to our goal which is
            to create a space that is inclusive of all, enjoining and encouraging
            the good.
        </Typography>
        <Typography variant="h6" align="center">Every Tuesday at 7:30pm</Typography>
        </div>
    </div>
    );
}

export default LandingPage;
