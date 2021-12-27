from fastapi import FastAPI
from routes.routes_queri import rutas

app = FastAPI()

app.include_router(rutas)
