from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://foyarzun:foyarzun@localhost:3306/indexs" )

meta =MetaData()

conn = engine.connect()