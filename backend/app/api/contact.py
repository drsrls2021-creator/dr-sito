from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import Optional

# Junior Dev: APIRouter ci permette di organizzare gli endpoint in file separati.
router = APIRouter()

# Junior Dev: Pydantic BaseModel definisce la struttura e i tipi dei dati in entrata.
# FastAPI userà questo modello per validare automaticamente il corpo della richiesta JSON.
class ContactForm(BaseModel):
    name: str
    email: EmailStr # Pydantic valida automaticamente che sia un'email valida
    message: str
    # Il campo 'phone' non era nel form frontend, ma lo aggiungiamo qui come opzionale
    # per future espansioni, senza rompere la compatibilità.
    phone: Optional[str] = None

@router.post("/contact")
async def handle_contact_form(form_data: ContactForm):
    """
    Riceve i dati dal form di contatto, li logga e restituisce una conferma.
    """
    # Junior Dev: In un'applicazione reale, qui inseriresti la logica per inviare un'email
    # usando un servizio come SendGrid, Resend, o la libreria smtplib di Python.
    # Per ora, stampiamo i dati sulla console per verificare che il backend li riceva correttamente.
    
    print("--- Nuova Richiesta di Contatto Ricevuta ---")
    print(f"Nome: {form_data.name}")
    print(f"Email: {form_data.email}")
    if form_data.phone:
        print(f"Telefono: {form_data.phone}")
    print(f"Messaggio: {form_data.message}")
    print("------------------------------------------")

    # Restituisce una risposta di successo al frontend.
    return {"status": "ok", "message": "Messaggio ricevuto correttamente"}