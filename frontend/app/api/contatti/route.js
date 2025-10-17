import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validazione campi obbligatori
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Tutti i campi sono obbligatori." }, 
        { status: 400 }
      );
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email non valida." }, 
        { status: 400 }
      );
    }

    // Validazione telefono (almeno 8 caratteri numerici)
    const phoneRegex = /^[0-9\s\+\-\(\)]{8,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Numero di telefono non valido." }, 
        { status: 400 }
      );
    }

    // Validazione lunghezza messaggio
    if (message.length < 10) {
      return NextResponse.json(
        { error: "Il messaggio deve essere almeno di 10 caratteri." }, 
        { status: 400 }
      );
    }

    // Log dei dati ricevuti (in produzione andrà su Vercel logs o Render logs)
    console.log("📩 Nuovo messaggio di contatto:");
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Telefono:", phone);
    console.log("Messaggio:", message);
    console.log("Data:", new Date().toISOString());

    // 🔧 TODO: Qui in futuro potrai integrare un vero servizio email
    // Esempio con Resend (3000 email/mese gratis):
    /*
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'noreply@dr-srls.com',
        to: 'drsrls2021@gmail.com',
        subject: `🔔 Nuovo contatto da ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 10px;">
              Nuovo messaggio dal sito DR srls
            </h2>
            <table style="width: 100%; margin-top: 20px;">
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; font-weight: bold;">Nome:</td>
                <td style="padding: 10px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold;">Email:</td>
                <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="background-color: #f3f4f6;">
                <td style="padding: 10px; font-weight: bold;">Telefono:</td>
                <td style="padding: 10px;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-left: 4px solid #1e40af;">
              <p style="font-weight: bold; margin-bottom: 10px;">Messaggio:</p>
              <p style="line-height: 1.6;">${message}</p>
            </div>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px; text-align: center;">
              Ricevuto il ${new Date().toLocaleString('it-IT', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}
            </p>
          </div>
        `
      })
    });

    if (!resendResponse.ok) {
      throw new Error('Errore invio email');
    }
    */

    return NextResponse.json(
      { message: "Messaggio inviato con successo!" }, 
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ Errore API Contatti:", error);
    return NextResponse.json(
      { error: "Errore interno del server." }, 
      { status: 500 }
    );
  }
}