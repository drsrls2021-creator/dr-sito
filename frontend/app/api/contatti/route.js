import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tutti i campi sono obbligatori." }, { status: 400 });
    }

    console.log("📩 Nuovo messaggio di contatto:");
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Messaggio:", message);

    // 🔧 Qui in futuro potrai integrare un vero servizio email (Nodemailer, Resend, SendGrid, ecc.)

    return NextResponse.json({ message: "Messaggio inviato con successo!" }, { status: 200 });
  } catch (error) {
    console.error("Errore API Contatti:", error);
    return NextResponse.json({ error: "Errore interno del server." }, { status: 500 });
  }
}
