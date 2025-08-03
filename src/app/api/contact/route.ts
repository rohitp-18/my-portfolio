import mongoose from "mongoose";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const { email, name, message, type } = await req.json();
  if (!email || !name || !message || !type) {
    return new Response("Missing required fields", { status: 400 });
  }

  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGODB_URI || "");
    } catch (error) {
      return new Response("Internal Server Error", { status: 500 });
    }
  }

  const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, default: "contact" },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });

  const Contact =
    mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

  try {
    const newContact = new Contact({ name, email, message, type });
    await newContact.save();
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }

  mongoose.connection.close();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Type: ${type}
        Message:
        ${message}
      `,
    });
  } catch (error) {}

  return new Response("Form submitted successfully", { status: 200 });
};
