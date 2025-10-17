from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig

# CORREZIONE: Importa 'settings' dal file config.py nella stessa cartella ('app')
from .config import settings

# Creiamo l'oggetto di configurazione per fastapi-mail
conf = ConnectionConfig(
    MAIL_USERNAME = settings.MAIL_USERNAME,
    MAIL_PASSWORD = settings.MAIL_PASSWORD,
    MAIL_FROM = settings.MAIL_FROM,
    MAIL_PORT = settings.MAIL_PORT,
    MAIL_SERVER = settings.MAIL_SERVER,
    MAIL_STARTTLS = settings.MAIL_STARTTLS,
    MAIL_SSL_TLS = settings.MAIL_SSL_TLS,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

router = APIRouter()

class ContactSchema(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str

@router.post("/contact")
async def handle_contact_form(form_data: ContactSchema):
    html = f"""
    <h3>Nuovo messaggio da {form_data.name}</h3>
    <p><strong>Email:</strong> {form_data.email}</p>
    <p><strong>Telefono:</strong> {form_data.phone}</p>
    <p><strong>Messaggio:</strong> {form_data.message}</p>
    """
    message = MessageSchema(
        subject=f"Nuovo contatto da {form_data.name}",
        recipients=[settings.MAIL_TO],
        body=html,
        subtype="html"
    )
    
    fm = FastMail(conf)
    
    try:
        await fm.send_message(message)
        return {"message": "Messaggio inviato con successo!"}
    except Exception as e:
        print(f"ERRORE INVIO EMAIL: {e}")
        raise HTTPException(status_code=500, detail="Errore del server durante l'invio dell'email.")