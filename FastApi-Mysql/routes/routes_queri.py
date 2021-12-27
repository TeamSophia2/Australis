from fastapi import APIRouter
from sqlalchemy.sql.functions import user
from config.db import conn
from models.tables import COUNTRY, FREEDOM, DEMOCRACY, GINI, HDI, VULNERABILITY,media_outlet

rutas= APIRouter()


@rutas.get("/countries")
async def get_countries():
    return conn.execute(COUNTRY.select()).fetchall()

@rutas.get("/freedom")
async def get_freedom_index():
    return conn.execute(FREEDOM.select()).fetchall()

@rutas.get("/democracy")
async def get_democracy_index():
    return conn.execute(DEMOCRACY.select()).fetchall()

@rutas.get("/hdi")
async def get_hdi_index():
    return conn.execute(HDI.select()).fetchall()

@rutas.get("/gini")
async def get_gini_index():
    return conn.execute(GINI.select()).fetchall()

@rutas.get("/vulne")
async def get_vulne_index():
    return conn.execute(VULNERABILITY.select()).fetchall()

@rutas.get("/media_outlet")
async def get_media_outlet():
    return conn.execute(media_outlet.select()).fetchall()