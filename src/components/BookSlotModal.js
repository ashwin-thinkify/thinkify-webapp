import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BookSlot from "./BookSlot";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "80%",
    // height: "80%",
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

  //   React.useEffect(() => {
  //     if (props.open) handleOpen();
  //     else handleClose();
  //   });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        alignSelf: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleOpen}
        style={{ alignSelf: "center", alignItems: "center", width: "100%" }}
      >
        Book Slot
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
              }}
            >
              <CloseIcon />
            </IconButton>
            <BookSlot iID={props.interviewerId} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
