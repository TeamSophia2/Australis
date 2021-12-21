from sqlalchemy import Table
from sqlalchemy.sql.schema import Column
from sqlalchemy.sql.sqltypes import INT, INTEGER, VARCHAR, DECIMAL
from config.db import meta

COUNTRY = Table("COUNTRY", meta, Column(
    "ISO3", VARCHAR(3), primary_key=True),
     Column("NAME", VARCHAR(50)))
 
FREEDOM = Table("Freedom", meta, Column(
    "ISO3", VARCHAR(3), primary_key=True),
     Column("2020", INT),
     Column("2021", INT)
     )

DEMOCRACY = Table("Democracy", meta, Column(
    "ISO3", VARCHAR(3), primary_key=True),
     Column("2020", DECIMAL)
     )

HDI = Table("Hdi", meta, Column(
    "ISO3", VARCHAR(3), primary_key=True),
     Column("2019", DECIMAL)
     )

GINI = Table("Gini", meta, Column(
    "Country_Code", VARCHAR(3), primary_key=True),
     Column("1960", DECIMAL)
     )

VULNERABILITY = Table("VULNERABILITY", meta, Column(
    "ISO3", VARCHAR(3), primary_key=True),
     Column("2008", DECIMAL),
     Column("2009", DECIMAL),
     Column("2010", DECIMAL),
     Column("2011", DECIMAL),
     Column("2012", DECIMAL)
     )
