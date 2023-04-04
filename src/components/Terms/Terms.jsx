import React from 'react';
import PropTypes from 'prop-types';
import { Paper,Typography} from '@mui/material';
import { withStyles } from "@mui/styles";
import { termsData } from '../../Data';
const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function TermsAndConditions(props) {
  const { classes } = props;

  return (
    <div style={{marginTop:"100px"}}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" textAlign="center">
          Terms and Conditions
        </Typography>
        {termsData.map((data) => {
            return (
              <Paper elevation={3} key={data.id} sx={{my:3,p:3}}>
                <Typography component="p">
                  {data.data}
                </Typography>
              </Paper>
            );
          })}
      </Paper>
    </div>
  );
}

TermsAndConditions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TermsAndConditions);