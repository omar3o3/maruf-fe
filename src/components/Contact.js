import React from "react";
import Typography from "@mui/material/Typography";

function Contact() {

    // maruficsi@gmail.com

    return (
        <div id="contact page">
            <Typography variant="h2" align="center" style={{ marginTop: "7%" }}>
                Reach Out To Us!
            </Typography>
            <Typography variant="h4" align="center" style={{ marginTop: "2%" }}>
                Email us at
            </Typography>
            <Typography variant="h4" align="center" style={{ marginTop: "2%" }}>
                maruficsi@gmail.com
            </Typography>
            <Typography variant="h6" align="center" style={{ marginTop: "2%" }}>
                We will try our best to answer all inquiries as soon as possible.
            </Typography>
        </div>
    );
}

export default Contact;
