import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, company, email, details } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT!,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nCompany: ${
      company || "N/A"
    }\nEmail: ${email}\nDetails: ${details}`,
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #1a73e8; margin-bottom: 20px;">${name}</h2>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Name:</strong>
            <span style="color: #555;">${name}</span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Company:</strong>
            <span style="color: #555;">${company || "N/A"}</span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Email:</strong>
            <span style="color: #555;">${email}</span>
          </div>
          <div style="margin-bottom: 15px;">
            <strong style="color: #333;">Details:</strong>
            <p style="color: #555; line-height: 1.5;">${details.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
        </div>
      `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
