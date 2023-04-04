import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Typography } from "@mui/material";
import { privacyData } from "../../Data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <div style={{marginTop:"100px"}}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" textAlign="center">
          Privacy Policy
        </Typography>
        {privacyData.map((data) => {
          return (
            <Paper elevation={3} key={data.id} sx={{my:3,p:3}}>
              <Typography component="p">
                {data.heading && <strong>{data.heading}</strong>}
                {data.data}
              </Typography>
            </Paper>
          );
        })}
        <Paper elevation={3}  sx={{my:3,p:3}}>
        <Typography component="p">
          <strong>Contact Us.</strong> If you have any questions or concerns
          about this Privacy Policy, please contact us at{" "}
          <a href="mailto:ebstechnology085@gmail.com">ebstechnology085@gmail.com</a>.
        </Typography>
        </Paper>
      </Paper>
    </div>
  );
}
