const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {

  const { name, email, subject, message } = req.body;

  try {

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: "gobikrishnan9360@gmail.com",
        pass: "ttuq srae rvmt hjev"
      }

    });

    const mailOptions = {

      from: email,

      to: "gobikrishnan9360@gmail.com",

      subject: subject,

      text: `
Name: ${name}

Email: ${email}

Message:
${message}
`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent");

  } catch (error) {

    console.log(error);

    res.status(500).send("Error sending email");

  }

});

app.listen(5000, () =>
  console.log("Server running on port 5000")
);