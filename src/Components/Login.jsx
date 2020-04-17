// REQD IMPORTS
import React, { Component } from "react";
import "../index.css";
import Button from "react-bootstrap/Button";
import TextField from "@material-ui/core/TextField";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormHelperText from "@material-ui/core/FormHelperText";
import leftimg from "../image/login.png";
import Card from "react-bootstrap/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "react-bootstrap/Container";
import { Divider } from "antd";
import {
  LinkedinFilled,
  SmileOutlined,
  InstagramFilled,
  TwitterSquareFilled,
  FacebookFilled,
  GooglePlusSquareFilled,
} from "@ant-design/icons";
import { withStyles } from "@material-ui/core/styles";

// STYLING
const styles = (theme) => ({
  root: {
    Width: 50,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root2: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12}>
        {/* Signup CARD */}
        <div className="mainCard">
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Card className={classes.root} style={{ border: "none" }}>
                  <CardContent>
                    <Row>
                      <Col>
                        <img src={leftimg} alt="main" className="leftImage" />
                      </Col>
                      <Col className="justify-content-md-center">
                        <form
                          className={classes.root2}
                          autoComplete="off"
                          onSubmit={this.handleSubmit}
                        >
                          <Typography>
                            <b style={{ fontSize: "40px" }}>Sign Up</b>
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            <b>Enter your details below</b>
                          </Typography>
                          <TextField
                            type="text"
                            id="outlined-basic"
                            name="name"
                            label="Name"
                            variant="outlined"
                            style={{ width: "100%" }}
                            pattern="[a-zA-Z ]*"
                            size="small"
                            required
                          />
                          <br />
                          <TextField
                            type="email"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            style={{ width: "100%" }}
                            size="small"
                            required
                          />
                          <TextField
                            id="outlined-basic"
                            name="password"
                            label="Password"
                            variant="outlined"
                            size="small"
                            style={{ width: "100%" }}
                            type="password"
                          />

                          <TextField
                            id="outlined-basic"
                            name="confirmPassword"
                            label="Confirm Password"
                            variant="outlined"
                            size="small"
                            style={{ width: "100%" }}
                            type="password"
                          />

                          <TextField
                            id="outlined-basic"
                            name="phone"
                            label="Phone"
                            variant="outlined"
                            size="small"
                            style={{ width: "100%" }}
                            type="number"
                            onInput={(e) => {
                              e.target.value = Math.max(
                                0,
                                parseInt(e.target.value)
                              )
                                .toString()
                                .slice(0, 10);
                            }}
                            required
                          />

                          <FormHelperText id="standard-weight-helper-text">
                            At least 10 Characters
                          </FormHelperText>

                          <Button
                            variant="primary"
                            size="lg"
                            block
                            type="submit"
                          >
                            Sign Up
                          </Button>
                          <Divider orientation="right">
                            <SmileOutlined />
                          </Divider>
                          <Row>
                            <Col>
                              <GooglePlusSquareFilled
                                style={{ fontSize: "40px" }}
                              />
                            </Col>
                            <Col>
                              <FacebookFilled style={{ fontSize: "40px" }} />
                            </Col>
                            <Col>
                              <LinkedinFilled style={{ fontSize: "40px" }} />
                            </Col>
                            <Col>
                              <InstagramFilled style={{ fontSize: "40px" }} />
                            </Col>
                            <Col>
                              <TwitterSquareFilled
                                style={{ fontSize: "40px" }}
                              />
                            </Col>
                          </Row>
                        </form>
                      </Col>
                    </Row>
                  </CardContent>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Login);
