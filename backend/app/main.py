from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .contact import router as contact_router

app = FastAPI(
    title="D.R srls SERRAMENTI - Backend",
    description="Backend per la gestione del form contatti.",
    version="1.0.0"
)

# Lista delle origini (frontend) autorizzate a contattare questo backend
origins = [
    "http://localhost:3000",          # Per lo sviluppo locale
    "https://www.infodrsrls.com",     # Il tuo dominio principale
    "https://dr-sito.onrender.com"    # Il sottodominio del frontend su Render
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Backend Serramenti - Attivo"}