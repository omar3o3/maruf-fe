import React from "react";
import Typography from "@mui/material/Typography";
import bgImage from "../images/main-bg.JPG";
import bgImage2 from "../images/bg-pic.png";
import test_image from "../images/test_image.jpeg"
import {
    createTheme,
    ThemeProvider,
    styled,
} from "@mui/material/styles";

function LandingPage() {

    return (
        <div id="landing-page">
            <div>
                <Typography variant="h2" align="center" style={{ marginTop: "7%" }}>
                    Maruf Community
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    style={{
                        paddingLeft: "3%",
                        paddingRight: "3%",
                        marginTop: "3%",
                        fontWeight: "bold",
                    }}
                >
                    Our community's name "Maruf" reflects our commitment to promoting
                    the good. We believe that the prophetic teachings offer valuable
                    guidance on how to live a fulfilling life, and we strive to
                    incorporate these teachings into our daily practices. At Maruf, we
                    foster a healthy social and learning environment by providing weekly
                    sessions where members can engage in meaningful discussions, develop
                    new skills, and support each other's growth. For instance, these
                    sessions have sparked lively discussions and deepened our
                    understanding of different cultures and perspectives. Ultimately,
                    our goal is to create an inclusive space where everyone feels
                    welcomed and valued, and where positive actions are encouraged and
                    celebrated.
                </Typography>
                <Typography variant="h6" align="center" style={{marginTop: '5%'}}>
                    Every Tuesday at 7:30pm
                </Typography>
            </div>
        </div>
    );
}

export default LandingPage;
