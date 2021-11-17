import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

export default function CandidateProfileDetails(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Candidate Registration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            // value={props.data[0].value}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            error={props.data[0].error}
            onChange={props.handleProfileChange}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // value={props.data[1].value}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            error={props.data[1].error}
            onChange={props.handleProfileChange}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={props.data[2].value}
            required
            id="contact"
            name="contact"
            label="Contact"
            fullWidth
            error={props.data[2].error}
            onChange={props.handleProfileChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={props.data[3].value}
            id="email"
            name="email"
            label="Email"
            fullWidth
            error={props.data[3].error}
            onChange={props.handleProfileChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={props.data[4].value}
            required
            id="linkedin"
            name="linkedin"
            label="LinkedIn Profile"
            fullWidth
            error={props.data[4].error}
            onChange={props.handleProfileChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="contactpublic"
                checked={props.data[5]}
                onChange={props.handleProfileChange}
              />
            }
            label="Don't make my contact public!"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            style={{ justifyItems: "center", alignItems: "center" }}
            variant="contained"
            color="primary"
            onClick={props.handleSubmit}
            disabled={props.errorStatus}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
