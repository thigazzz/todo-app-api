import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "hazel29@ethereal.email",
    pass: "PvrHrhmUXv4tMc9TNv",
  },
});

export { transporter };
