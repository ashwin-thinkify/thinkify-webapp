import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export default function Skills(props) {
  React.useEffect(() => {
    console.log(props.skillData);
  });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            value={props.skillData["skill1"]}
            required
            id="skill1"
            name="skill1"
            label="Skill 1"
            onChange={props.handleSkillChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={props.skillData["skill2"]}
            required
            id="skill2"
            name="skill2"
            label="Skill 2"
            onChange={props.handleSkillChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={props.skillData["skill3"]}
            required
            id="skill3"
            name="skill3"
            label="Skill 3"
            onChange={props.handleSkillChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            value={props.skillData["skill4"]}
            required
            id="skill4"
            name="skill4"
            label="Skill 4"
            onChange={props.handleSkillChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
