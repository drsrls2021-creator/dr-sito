from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .contact import router as contact_router  # Importa il router dal file contact.py

app = FastAPI(
    title="D.R srls SERRAMENTI - Backend",
    description="Backend per la gestione del form contatti.",
    version="1.0.0"
)

origins = [
    "http://localhost:3000",
    "https://infodrsrls.com"
    # Aggiungi qui il tuo dominio di produzione quando sarà live
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