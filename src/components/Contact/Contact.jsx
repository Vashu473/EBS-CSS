import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  TextField,
  Button,
} from "@mui/material";
import { postFetch } from "../api/NormalApi";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ContactPage() {
  const [hide, setHide] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const notify = (msg) => toast(msg);
  const handleSubmit = async (e) => {
    try {
      setHide(false);
      e.preventDefault();
      const res = await postFetch("user/contactUs", data);
      console.log(res);
      if (res.success === true) {
        setHide(true);
        notify("data submitted successfully");
      }
      setHide(true);
    } catch (error) {
      // console.log(error);
      notify(error.message);
    }
  };

  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        marginTop: "70px",
      }}
    >
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Grid container spacing={2}>
            <Grid item style={{ margin: "auto" }}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="EBS-HTML"
                  src="https://thumbs.dreamstime.com/b/email-marketing-concept-advertisement-social-media-61363927.jpg"
                />
              </ButtonBase>
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid
                item
                xs={12}
                sm
                container
                style={{ flexDirection: "column" }}
              >
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      style={{ textAlign: "center" }}
                    >
                      Contact us
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ marginLeft: "10%" }}
                    >
                      <TextField
                        id="outlined-name"
                        label="Name"
                        margin="normal"
                        variant="outlined"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        required
                        style={{ width: "100%" }}
                      />
                      <TextField
                        id="outlined-name"
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required
                        style={{ width: "100%" }}
                      />
                      <TextField
                        id="outlined-name"
                        label="Message"
                        margin="normal"
                        variant="outlined"
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        required
                        style={{ width: "100%" }}
                      />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item style={{ margin: "auto" }}>
                  {hide ? (
                    <Button type="submit">Send</Button>
                  ) : (
                    <span>Please wait...</span>
                  )}
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
