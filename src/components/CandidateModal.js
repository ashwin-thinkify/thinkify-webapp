import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Candidate from "../components/AddCandidate";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    height: "80%",
    margin: "auto",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [contact, setContact] = React.useState();
  const [email, setEmail] = React.useState();
  const [linkedInProfile, setLinkedInProfile] = React.useState();
  const [hideContact, setHideContact] = React.useState(false);
  const [fnerror, setFnError] = React.useState(false);
  const [lnerror, setLNError] = React.useState(false);
  const [cerror, setCError] = React.useState(false);
  const [emerror, setEmError] = React.useState(false);
  const [lperror, setLPError] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getErrorStatus = () => {
    if (
      firstName &&
      lastName &&
      contact &&
      email &&
      linkedInProfile &&
      hideContact
    ) {
      if (fnerror || lnerror || cerror || emerror || lperror) return true;
      return false;
    } else return false;
  };

  const handleSubmit = () => {
    console.log("skills", typeof skills);
    console.log("companies", typeof companies);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("name", firstName + " " + lastName);
    urlencoded.append("contact", contact);
    urlencoded.append("email", email);
    urlencoded.append("linkedinprofile", linkedInProfile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://recruitbay-backend.herokuapp.com/candidates/addcandidate",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleProfileChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        const validFirstNameRegex = RegExp(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        );
        if (!validFirstNameRegex.test(event.target.value)) setFnError(true);
        else setFnError(false);
        setFirstName(event.target.value);
        break;
      case "lastName":
        const validLastNameRegex = RegExp(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        );
        if (!validLastNameRegex.test(event.target.value)) setLNError(true);
        else setLNError(false);
        setLastName(event.target.value);
        break;
      case "contact":
        const validPhoneRegex = RegExp(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        );
        if (!validPhoneRegex.test(event.target.value)) setCError(true);
        else setCError(false);
        setContact(event.target.value);
        break;
      case "email":
        const validEmailRegex = RegExp(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if (!validEmailRegex.test(event.target.value)) setEmError(true);
        else setEmError(false);
        setEmail(event.target.value);
        break;
      case "linkedin":
        const validLinkedInProfile = RegExp(
          /(ftp|http|https):\/\/?((www|\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        );
        if (!validLinkedInProfile.test(event.target.value)) setLPError(true);
        else setLPError(false);
        setLinkedInProfile(event.target.value);
        break;
      case "contactpublic":
        setHideContact(!hideContact);
        break;
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        GET HIRED !!
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={() => {
                handleClose();
                console.log("onclose clicked");
              }}
              style={{
                alignSelf: "flex-end",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                marginLeft: "90%",
              }}
            >
              <CloseIcon />
            </IconButton>
            <Candidate
              data={[
                { value: firstName, error: fnerror },
                { value: lastName, error: lnerror },
                { value: contact, error: cerror },
                { value: email, error: emerror },
                { value: linkedInProfile, error: lperror },
                hideContact,
              ]}
              handleProfileChange={handleProfileChange}
              handleSubmit={handleSubmit}
              errorStatus={getErrorStatus()}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
