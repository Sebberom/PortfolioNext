import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 },
      );
    }

    // TODO: Configurer votre service d'envoi d'email
    // Option 1: Utiliser Resend (recommandé pour Next.js)
    // const { Resend } = require('resend');
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@votredomaine.com',
    //   to: 'Romain.Sebbe@gmail.com',
    //   subject: `Message de ${name}`,
    //   html: `<p><strong>De:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`
    // });

    // Option 2: Utiliser nodemailer avec SMTP
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: true,
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASSWORD,
    //   },
    // });
    // await transporter.sendMail({
    //   from: process.env.SMTP_USER,
    //   to: 'Romain.Sebbe@gmail.com',
    //   subject: `Message de ${name}`,
    //   html: `<p><strong>De:</strong> ${name} (${email})</p><p><strong>Message:</strong></p><p>${message}</p>`
    // });

    // Pour tester en développement (simuler l'envoi)
    console.log("Email reçu:", { name, email, message });

    return NextResponse.json(
      { message: "Email envoyé avec succès!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 },
    );
  }
}
