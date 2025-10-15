from fastapi import APIRouter
from app.api import contact


api_router = APIRouter()

api_router.include_router(contact.router, tags=["contact"])

