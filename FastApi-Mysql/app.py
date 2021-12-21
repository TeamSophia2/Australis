from fastapi import FastAPI
from routes.country import rutas

app = FastAPI()

app.include_router(rutas)
