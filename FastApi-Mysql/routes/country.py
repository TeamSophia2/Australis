from fastapi import APIRouter
from sqlalchemy.sql.functions import user
from config.db import conn
from models.country import COUNTRY, FREEDOM, DEMOCRACY, GINI, HDI, VULNERABILITY

rutas= APIRouter()


@rutas.get("/countries")
def get_countries():
    return conn.execute(COUNTRY.select()).fetchall()

@rutas.get("/freedom")
def get_freedom_index():
    return conn.execute(FREEDOM.select()).fetchall()

@rutas.get("/democracy")
def get_democracy_index():
    return conn.execute(DEMOCRACY.select()).fetchall()

@rutas.get("/hdi")
def get_hdi_index():
    return conn.execute(HDI.select()).fetchall()

@rutas.get("/gini")
def get_gini_index():
    return conn.execute(GINI.select()).fetchall()

@rutas.get("/vulne")
def get_vulne_index():
    return conn.execute(VULNERABILITY.select()).fetchall()