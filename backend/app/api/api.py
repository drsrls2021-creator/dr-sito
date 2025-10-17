from fastapi import APIRouter
# CORREZIONE: Importa 'contact' dalla sua posizione reale in app/api/core/
from app.api.core import contact 

api_router = APIRouter()

# Aggiungi il router di contact al router principale
api_router.include_router(contact.router, tags=["contact"])