from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://foyarzun:foyarzun@localhost:3306/foyarzun" )

meta =MetaData()

conn = engine.connect()