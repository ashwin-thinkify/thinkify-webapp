import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function Companies(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Companies
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            value={props.companyData["company1"]}
            name="company1"
            id="company1"
            label="Currently working"
            fullWidth
            onChange={props.handleCompaniesChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={props.companyData["company2"]}
            required
            id="company2"
            name="company2"
            label="Company 2"
            fullWidth
            onChange={props.handleCompaniesChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={props.companyData["company3"]}
            required
            id="company3"
            name="company3"
            label="Company 3"
            fullWidth
            onChange={props.handleCompaniesChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={props.companyData["company4"]}
            required
            id="company4"
            name="company4"
            label="Company 4"
            fullWidth
            onChange={props.handleCompaniesChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
