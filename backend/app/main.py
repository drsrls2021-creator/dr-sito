from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .contact import router as contact_router  # Importa il router dal file contact.py

app = FastAPI(
    title="D.R srls SERRAMENTI - Backend",
    description="Backend per la gestione del form contatti.",
    version="1.0.0"
)

# --- MODIFICA FONDAMENTALE QUI ---
# Aggiungiamo gli URL di produzione alla lista delle origini permesse
origins = [
    "http://localhost:3000",                  # Per lo sviluppo locale
    "https://www.infodrsrls.com",             # Il tuo dominio principale
    "https://dr-sito.onrender.com",    # Il sottodominio del frontend su Render
    "https://dr-sito-1.onrender.com/"  # Un altro possibile URL di backend su Render                                                   
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Includi il router del form con il prefisso /api
app.include_router(contact_router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Backend Serramenti - Attivo"}