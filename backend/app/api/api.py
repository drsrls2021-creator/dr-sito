from fastapi import APIRouter
from app.api import contact
from app.routers import chat

api_router = APIRouter()

api_router.include_router(contact.router, tags=["contact"])
api_router.include_router(chat.router, tags=["chat"])
