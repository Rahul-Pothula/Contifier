const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const { request } = require("http");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const mail = req.body.mail;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  console.log(
    "mail: " + mail + " first name: " + firstName + " last name: " + lastName
  );
  const data = {
    members: [
      {
        email_address: mail,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us20.api.mailchimp.com/3.0/lists/013798e06c";

  // console.log("reached here");

  const options = {
    method: "POST",
    auth: "rahul1:1c88f8f46f7ef7ab5b121816bec16310-us20",
  };

  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) res.sendFile(__dirname + "/success.html");
    else res.sendFile(__dirname + "/");

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.get("/op", (req, res) => {
  // const mail;
  // const mail = req.body.mail
  const firstName = req.body.firstName;
  // const lastName = req.body.lastName
  const content = req.body.content;
  const data2 = {
    mailSend: [
      {
        message: `hey ${firstName}, <br> ${content}`,
      },
    ],
  };
});

app.listen(3000, () => {
  console.log("server is running at port: 3000");
});

//api key
//1c88f8f46f7ef7ab5b121816bec16310-us20

//list id
//013798e06c
