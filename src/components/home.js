import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import InterviewerModal from "./InterviewerModal";
import CandidateModal from "./CandidateModal";
import BookSlotModal from "./BookSlotModal";
import { IconButton } from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";
import LinkIcon from "@material-ui/icons/Link";
import PhoneIcon from "@material-ui/icons/Phone";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import BusinessIcon from "@material-ui/icons/Business";

import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://thinkify.io/">
        Thinkify.io
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardSubContent: {
    textAlign: "left",
    direction: "row",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  typographyClass: {
    marginLeft: "10px",
    paddingRight: "10px",
  },
  subGrid: {
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "flex-start",
  },
  skillNCompanies: {
    marginTop: theme.spacing(2),
    direction: "column",
    alignItems: "center",
    justify: "center",
    backgroundColor: "whitesmoke",
    // height: "100%",
  },
  nameContent: {
    // justifyContent: "center",
    marginTop: "5px",
    // alignItems: "center",
    display: "inline-flex",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [interviewers, setInterviewers] = React.useState([]);
  React.useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://recruitbay-backend.herokuapp.com/interviewers/getinterviewers",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setInterviewers(result.interviewer);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  });

  function openLinkedIn(linkedInUrl) {
    window.open(linkedInUrl);
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <main class='flex justify-center align-middle'>
                  <InterviewerModal />
                  <CandidateModal />
      </main>
    </React.Fragment>
  );
}
