const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
require("dotenv").config();

const { PORT } = process.env;

const app = express();
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    layout: "layouts/dashboard",
    title: "Dashboard",
  });
});

app.get("/blank", (req, res) => {
  res.render("blank", {
    layout: "layouts/dashboard",
    title: "Blank Page",
  });
});

app.get("/buttons", (req, res) => {
  res.render("buttons", {
    layout: "layouts/dashboard",
    title: "Buttons",
  });
});

app.get("/cards", (req, res) => {
  res.render("cards", {
    layout: "layouts/dashboard",
    title: "Cards",
  });
});

app.get("/charts", (req, res) => {
  res.render("charts", {
    layout: "layouts/dashboard",
    title: "Charts",
  });
});

app.get("/tables", (req, res) => {
  res.render("tables", {
    layout: "layouts/dashboard",
    title: "Tables",
  });
});

app.get("/utilities-animation", (req, res) => {
  res.render("utilities-animation", {
    layout: "layouts/dashboard",
    title: "Utilities Animation",
  });
});

app.get("/utilities-border", (req, res) => {
  res.render("utilities-border", {
    layout: "layouts/dashboard",
    title: "Utilities Border",
  });
});

app.get("/utilities-color", (req, res) => {
  res.render("utilities-color", {
    layout: "layouts/dashboard",
    title: "Utilities Color",
  });
});

app.get("/utilities-other", (req, res) => {
  res.render("utilities-other", {
    layout: "layouts/dashboard",
    title: "Utilities Other",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    layout: "layouts/landingPage",
    title: "Login",
  });
});

app.get("/forgot-password", (req, res) => {
  res.render("forgot-password", {
    layout: "layouts/landingPage",
    title: "Forgot Password",
  });
});

app.get("/register", (req, res) => {
  res.render("register", {
    layout: "layouts/landingPage",
    title: "Register",
  });
});

app.use("/", (req, res) => {
  res.status(404);
  res.render("404", {
    layout: "layouts/dashboard",
    title: "404 not found",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
