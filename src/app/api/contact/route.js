import nodemailer from "nodemailer";

export async function GET() {
  return Response.json({
    message: "Samsona Contact API running"
  });
}

export async function POST(req) {

  try {

    const body = await req.json();

    const { name, email, phone, message } = body;

    console.log("Form received:", body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "info@samsonaservices.com",
      subject: "New Samsona Website Inquiry",
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`
    });

    return Response.json({
      success: true
    });

  } catch (error) {

    console.log("Email error:", error);

    return Response.json({
      success: false
    });

  }
}